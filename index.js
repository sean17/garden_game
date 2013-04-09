var data = {'url': 'http://www.untiredwithloving.org/palm_tree_2.jpg'};
var plantList = { 
	"list": [
		{'name':'palm', 'scientific':'yo motha', 'image':'http://www.untiredwithloving.org/palm_tree_2.jpg', 'hint1': 'palm', 'hint2': 'its a palm', 'hint3': 'just type palm'},
		{'name':'rose', 'scientific':'Rosa berberifolia', "image":"http://www.nasa.gov/centers/goddard/images/content/174100main_planet_plants_lg.jpg",'hint1': 'palm', 'hint2': 'its a palm', 'hint3': 'just type palm'},
		{'name':'cactus', 'scientific':'yo dog', "image":"http://www.nasa.gov/centers/goddard/images/content/174100main_planet_plants_lg.jpg",'hint1': 'palm', 'hint2': 'its a palm', 'hint3': 'just type palm'}
		]}
		
// $("#gameModal").append('<div class="span3"><img src="'+data.url+'">')
$("#plantList").empty()

var plantArray = plantList.list;

for(var i=0; i<plantArray.length; i++) {
	// alert(plantArray[i].name)
	// $("#plantList").append('<div class="span2">')
    $("#plantList").append("<div class='span2'><a href='#"+plantArray[i].name+"modal'' data-toggle='modal'> <img value='"+plantArray[i].name+"'style='height:200px;' src='"+plantArray[i].image+"'/></a></div>")
    
	// $("#plantList").append('</div>')
	//$("#plantList").append('<a href ="#'+plantArray[i].name+'">');
	//$("#modalList").append('<div id ="+plantArray[i].name+">');
}
//$(".modal-header").append("<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button><h3>Mystery Plant</h3>");


for(var i=0; i<plantArray.length; i++) {
//Create modale divs for each plant
	$("#plantList").append(
		"<div id= '"+plantArray[i].name+"modal' class='modal hide fade'>"+
			"<div class='modal-header'>"+
          		"<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>"+
          		"<h3>"+plantArray[i].name+"</h3>"+
        	"</div>"+
        	"<div class='modal-body'>"+
          		 "<div class='row'>"+
          		 	"<div class='span2' id='hintdiv'> </br>"+
                	"<div id='hintdiv1'> <input type='button' id ='ht1' class='btn btn-info' data-toggle ='button' value='Hint 1'></a></br></br></br></div>"+
		        	"<div id='hintdiv2'> <input type='button' id ='ht2' class='btn btn-info' data-toggle ='button' value='Hint 2'></a></br></br></br></div>"+
		       		"<div id='hintdiv3'> <input type='button' id ='ht3' class='btn btn-info' data-toggle ='button' value='Hint 3'></a></br></br></br></div>"+
            	"</div>"+
            	"<div class='span2 offset1'>"+
               		"<img style='opacity:1000;height:200px;'' src='"+plantArray[i].image+"' />"+
            		"</div>"+
          		"</div>"+
        	"</div>"+
        	"<div class='modal-footer'>"+
        	"<div class='row'>"+
        		"<div class='span2' align='left'>"+        	
        			"<b> score: </b>"+
           		"</div>"+
           		"<input type='text'>"+
           		"<a href='#'' class='btn btn-primary'>Submit</a>"+
        	"</div>"+
      	"</div>"
      	)
}


//hint button different for each hint
//function hintList(text){
	//var elem = document.getElementById("ht1");
    //elem.value = hint1;
    //$("#ht1").value = hint1;
    //if ( elem.value = hint1 ) elem.value = "hint1";
    //else elem.value = hint1;
    //text.value = "show some hints";  
//}

$("#ht1").click(function(){
	if ($(this).attr('value') == 'Hint 1') 
		$(this).attr('value', 'the hint');
	else
		$(this).attr('value', 'Hint 1');
});

$("#ht2").click(function(){
	if ($(this).attr('value') == 'Hint 2') 
		$(this).attr('value', 'the hint');
	else
		$(this).attr('value', 'Hint 2');
});

$("#ht3").click(function(){
	if ($(this).attr('value') == 'Hint 3') 
		$(this).attr('value', 'the hint');
	else
		$(this).attr('value', 'Hint 3');
});


//submit button to check answer
function submit(){

}