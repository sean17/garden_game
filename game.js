$(function()
{

  totalScore = 0;
  var totalPointsAvailable = 0;
  var url = "http://botanicalapp.com/api/v1/";
  var questions = ""

  function getGameNumber()
  {
    var search = window.location.search.substr(1);
    var params = {};
    $.each(search.split('&'), function (i, e)
    {
      var parts = e.split('=');

      params[parts[0]] = parts[1];
    });

          // alert(params.id)// params;
          $.ajax(url + "guessing_games/"+params.id)
          .success(function ( data ) {

            var common_name = '';
            var nameList = [];

            console.log(JSON.stringify(data))
            questions = data.guessing_game.guessing_game_questions

            for(var i =0; i < questions.length; i++){
              $.ajax(url + "plants/"+questions[i].guessing_game_question.plant_id)
              .success(function ( result ) {
                common_name = result.plant.common_name
                common_name = common_name.replace(/ /g,'')
                common_name = common_name.toLowerCase()
                nameList[i] = common_name
                $("#sub_"+result.plant.id).attr('name',common_name)
              })
            }

            totalPointsAvailable = 100*questions.length
            $("#score").html('<b>Total Score : </b>'+totalScore + " / "+totalPointsAvailable)

            for(var i =0; i < questions.length; i++){
              if (questions[i].guessing_game_question.plant.plant_photos[0]){
                $("#matchDiv").append("<div class='span3'><a href='#"+questions[i].guessing_game_question.id+"' data-toggle='modal'> <img style='height:200px;width:250px' src='"+"http://www.botanicalapp.com/"+ questions[i].guessing_game_question.plant.plant_photos[0].plant_photo.image.url+"'/></a></div>")
              } else {
                $("#matchDiv").append("<div class='span3'><a href='#"+questions[i].guessing_game_question.id+"' data-toggle='modal'> <img  style='height:200px;width:250px' src='"+"favicon.png"+"'/></a></div>")
              }
            }
            var plant_photo = ""

            for(var i=0; i<questions.length; i++) {
             if (questions[i].guessing_game_question.plant.plant_photos[0]){
               plant_photo = "http://www.botanicalapp.com/"+ questions[i].guessing_game_question.plant.plant_photos[0].plant_photo.image.url
             } else{
              plant_photo = 'favicon.png'
            }

              //Create modale divs for each plant
              $("#plantList").append(
                "<div id= '"+questions[i].guessing_game_question.id+"' class='modal hide fade'>"+
                "<div class='modal-header'>"+
                "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>"+
                "<h3>Mystery Plant</h3>"+
                "</div>"+
                "<div class='modal-body'>"+
                "<div class='row'>"+
                "<div class='span2' id='hintdiv'> </br>"+
                '<div style="height:50px"> <input type="button" class="btn btn-info" data-toggle ="button" onClick="this.value = this.name; totalScore -=25" name="'+questions[i].guessing_game_question.hint1+'" value="Hint 1"></a></br></br></br></div>'+
                '<div style="height:50px"> <input type="button" class="btn btn-info" data-toggle ="button" onClick="this.value = this.name; totalScore -=25" name="'+questions[i].guessing_game_question.hint2+'" value="Hint 2"></a></br></br></br></div>'+
                '<div style="height:50px"> <input type="button" class="btn btn-info" data-toggle ="button" onClick="this.value = this.name; totalScore -=25" name="'+questions[i].guessing_game_question.hint3+'" value="Hint 3"></a></br></br></br></div>'+
                "</div>"+
                "<div class='span2 offset1'>"+
                "<img style='height:200px;width:250px' src='"+ plant_photo+"'/>"+
                "</div>"+
                "</div>"+
                "</div>"+
                "<div class='modal-footer'>"+
                "<div class='row'>"+
                "<div class='span2' align='left'>"+         
                "<b>  </b>"+
                "</div>"+
                "<input class='guess' type='text'>"+
                "<input type='submit' align='right' class='btn btn-primary submit' value='Submit' name=' ' id='sub_"+questions[i].guessing_game_question.plant_id+"'><div class='answer'></div> "+
                            // "<a href='#' id='"+plantArray[i].scientifice+"submit' class='btn btn-primary'>Submit</a>"+
                            "</div>"+
                            "</div>"
                            );


$(".btn-info").click(function(){
  $("#score").html('<b>Total Score : </b>'+totalScore + " / "+totalPointsAvailable)
  $(this).parent().html(this.name)
  $(this).remove()
})

$(".submit").click(function(){
  var guess = $('.guess').val()
  guess = guess.replace(/ /g,'')
  guess = guess.toLowerCase()

    // alert(a)
    if(guess===this.name){
      totalScore += 100
      $("#score").html('<b>Total Score : </b>'+totalScore + " / "+totalPointsAvailable)
      $(this).parent().html('You have guessed the correct plant! </br> '+this.name)
      $(this).remove()
    } else 
    {
     $(".answer").text('try again please!') // var parent = $(this).parent()
      // $(".guess > .answer").text('try again')
    }
  })
}
})
.error(function ( data ) {
  alert('Sorry, it doesn\'t appear as though things are working properly')
});

}


getGameNumber()
});