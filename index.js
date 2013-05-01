var url = "http://botanicalapp.com/api/v1/";
var result = []
$.ajax(url + "guessing_games")
  .success(function ( data ) {
      for(var i =0; i < data.length; i++){
        var set = "<a href='game.html?id="+data[i].guessing_game.id+"'<div id='"+data[i].guessing_game.id+"'  class='span3' ><h2>"+data[i].guessing_game.title+"</h2><img style='height:200px;'src='http://www.botanicalapp.com/"+ data[i].guessing_game.photo.url +"' /> </div></a>";
        $("#matchDiv").append(set)
      }
  })
  .error(function ( data ) {
      alert('Sorry, it doesn\'t appear as though things are working properly')
  });


function afterAjax(){

}
