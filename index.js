var url = "http://botanicalapp.com/api/v1/";
var result = []
$.ajax(url + "guessing_games")
.success(function ( data ) {
  for (var i = 0; i < data.length; i++){
    $.ajax(url + "guessing_games/"+(i+1))
    .success(function ( data ) {
      var temp = {}
      temp.name = data.guessing_game.title;
      temp.scientific = data.guessing_game.guessing_game_questions[0].guessing_game_question.plant_name;
      if(temp.image = data.guessing_game.guessing_game_questions[0].guessing_game_question.plant.plant_photos[0]){
        temp.image = 'http://botanicalapp.com'+data.guessing_game.guessing_game_questions[0].guessing_game_question.plant.plant_photos[0].plant_photo.image.url
      }
      temp.hint1 = data.guessing_game.guessing_game_questions[0].guessing_game_question.hint1;
      temp.hint2 = data.guessing_game.guessing_game_questions[0].guessing_game_question.hint2;
      temp.hint3 = data.guessing_game.guessing_game_questions[0].guessing_game_question.hint3;
      result.push(temp)
      plantList.list = result;
      afterAjax()
    })
    .error(function ( data ) {
      alert('Sorry, it doesn\'t appear as though things are working properly')
    });
  }
})
.error(function ( data ) {
  alert('Sorry, it doesn\'t appear as though things are working properly')
});


function afterAjax(){


  var data = {'url': 'http://www.untiredwithloving.org/palm_tree_2.jpg'};
// var plantList = { 
//   "list": [
//     {'name':'palm', 'scientific':'yo_motha', 'image':'http://www.untiredwithloving.org/palm_tree_2.jpg', 'hint1': 'palm', 'hint2': 'its a palm', 'hint3': 'just type palm'},
//     {'name':'rose', 'scientific':'Rosa_berberifolia', "image":"http://www.nasa.gov/centers/goddard/images/content/174100main_planet_plants_lg.jpg",'hint1': 'rose', 'hint2': 'titanic', 'hint3': 'iceberg'},
//     {'name':'cactus', 'scientific':'yodog', "image":"http://www.nasa.gov/centers/goddard/images/content/174100main_planet_plants_lg.jpg",'hint1': 'cactus jack', 'hint2': 'its a cact', 'hint3': 'just type cact'}
//     ]}

// $("#gameModal").append('<div class="span3"><img src="'+data.url+'">')
$("#plantList").empty();

var plantArray = plantList.list;
var score = 0;


//exchange ' ' with '_' for scientificname
for (i=0;i<plantArray.length;i++){
    plantArray[i].scientific = plantArray[i].scientific.replace(' ','_');



for(var i=0; i<plantArray.length; i++) {
  $("#plantList").append("<div class='span2'><a href='#"+plantArray[i].scientific+"modal' data-toggle='modal'> <img value='"+plantArray[i].scientific+"'style='height:200px;' src='"+plantArray[i].image+"'/></a></div>")

}



for(var i=0; i<plantArray.length; i++) {
//Create modale divs for each plant
$("#plantList").append(
  "<div id= '"+plantArray[i].scientific+"modal' class='modal hide fade'>"+
  "<div id='"+plantArray[i].scientific+"modal-header'>"+
  "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>"+
  "<h3>Mystery Plant</h3>"+
  "</div>"+
  "<div class='modal-body'>"+
  "<div class='row'>"+
  "<div class='span2' id='hintdiv'> </br>"+
  "<div id='hintdiv1'> <input type='button' id ='"+plantArray[i].scientific+"h1' class='btn btn-info' data-toggle ='button' value='Hint 1'></a></br></br></br></div>"+
  "<div id='hintdiv2'> <input type='button' id ='"+plantArray[i].scientific+"h2' class='btn btn-info' data-toggle ='button' value='Hint 2'></a></br></br></br></div>"+
  "<div id='hintdiv3'> <input type='button' id ='"+plantArray[i].scientific+"h3' class='btn btn-info' data-toggle ='button' value='Hint 3'></a></br></br></br></div>"+
  "</div>"+
  "<div class='span2 offset1'>"+
  "<img style='opacity:1000;height:200px;'' src='"+plantArray[i].image+"'/>"+
  "</div>"+
  "</div>"+
  "</div>"+
  "<div class='modal-footer'>"+
  "<div class='row'>"+
  "<div class='span2' id='"+plantArray[i].scientific+"result' align='left'>"+         
  "<b>  </b>"+
  "</div>"+
  "<input id='"+plantArray[i].scientific+"textbox' type='text'>"+
  "<input type='button' align='right' id='"+plantArray[i].scientific+"submit' class='btn btn-primary' value='Submit'</a>"+
              //"<a href='#' id='"+plantArray[i].scientifice+"submit' class='btn btn-primary'>Submit</a>"+
              "</div>"+
              "</div>"
              )
}


//--------------Hint Buttons----------------
for(var i=0; i<plantArray.length; i++){

  $("#"+plantArray[i].scientific+"h1").click(function(){
    var btn = $(this).attr('id');
    for(var i=0;i<plantArray.length;i++){
      if(btn ===""+plantArray[i].scientific+"h1"){
        $(this).attr('value', plantArray[i].hint1);
        score = score-25; 
      }

    }
  });

  $("#"+plantArray[i].scientific+"h2").click(function(){
    var btn = $(this).attr('id');
    for(var i=0;i<plantArray.length;i++){
      if(btn ===""+plantArray[i].scientific+"h2"){
        $(this).attr('value', plantArray[i].hint2);
        score = score-25; 
      }

    }
  });

  $("#"+plantArray[i].scientific+"h3").click(function(){
    var btn = $(this).attr('id');
    for(var i=0;i<plantArray.length;i++){
      if(btn ===""+plantArray[i].scientific+"h3"){
        $(this).attr('value', plantArray[i].hint3);
        score = score-25; 
      }

    }
  });

//--------------Submit Buttons----------------
$("#"+plantArray[i].scientific+"submit").click(function(){
  var btnid = $(this).attr('id');
  for(var i=0;i<plantArray.length;i++){
    if( btnid === ""+plantArray[i].scientific+"submit"){
      var guess = document.getElementById(""+plantArray[i].scientific+"textbox").value;
      var answer = plantArray[i].name;
      guess = guess.toLowerCase().split(' ');
      guess = guess[0] + guess[1]
      answer = answer.toLowerCase().split(' ');
      answer = answer[0] + answer[1]
      if(guess===answer){
        $("#"+plantArray[i].scientific+"result").html('You are correct!');
        $("#"+plantArray[i].scientific+"modal-header").html('<h3> '+plantArray[i].name+' </h3>');
        score = score +100;
        $("#score").html('Total Points: '+score+'');
        $(this)[0].disabled = true;
      }
      else{
        $("#"+plantArray[i].scientific+"result").html('guess again!') 
      }
    }
  }
});
}



}
