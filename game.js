$(function()
  {

    totalScore = 0;
    var totalPointsAvailable = 0;
    var url = "http://botanicalapp.com/api/v1/";
    var questions = ""

    var score = {
      update: function(){ return false;}
    }
    
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
          console.log(JSON.stringify(data))
          questions = data.guessing_game.guessing_game_questions
          totalPointsAvailable = 100*questions.length
          $("#score").html('<b>Total Score : </b>'+totalScore + " / "+totalPointsAvailable)
  
            for(var i =0; i < questions.length; i++){
                $("#matchDiv").append("<div class='span3'><a href='#"+questions[i].guessing_game_question.id+"' data-toggle='modal'> <img alt='aasdfasdfasdf' style='height:200px;' src='"+"http://www.botanicalapp.com/"+ questions[i].guessing_game_question.plant.plant_photos[0].plant_photo.image.url+"'/></a></div>")
            }

            for(var i=0; i<questions.length; i++) {
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
                "<img style='opacity:1000;height:200px;'' src='http://www.botanicalapp.com/"+ questions[i].guessing_game_question.plant.plant_photos[0].plant_photo.image.url+"'/>"+
                "</div>"+
                "</div>"+
                "</div>"+
                "<div class='modal-footer'>"+
                "<div class='row'>"+
                "<div class='span2' align='left'>"+         
                "<b>  </b>"+
                "</div>"+
                "<input class='guess' type='text'>"+
                "<input type='submit' align='right' class='btn btn-primary submit' value='Submit' name='"+questions[i].guessing_game_question.plant.name+"'>"+
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
  var a = $('.guess').val()
    // alert(a)
    if(a===this.name){
      totalScore += 100
      $("#score").html('<b>Total Score : </b>'+totalScore + " / "+totalPointsAvailable)
      $(this).parent().html(this.name)
      $(this).remove()
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