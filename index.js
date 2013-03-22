var data = {'url': 'http://www.untiredwithloving.org/palm_tree_2.jpg'};
var plantList = { "list": [{'name':'palm', 'scientific':'yo motha', 'image':'http://www.untiredwithloving.org/palm_tree_2.jpg'},{'name':'rose', 'scientific':'yo fatha', "image":"http://www.nasa.gov/centers/goddard/images/content/174100main_planet_plants_lg.jpg"},{'name':'cactus', 'scientific':'yo dog', "image":"http://www.nasa.gov/centers/goddard/images/content/174100main_planet_plants_lg.jpg"}]}

// $("#gameModal").append('<div class="span3"><img src="'+data.url+'">')
$("#plantList").empty()

var plantArray = plantList.list;

for(var i=0; i<plantArray.length; i++) {
	// alert(plantArray[i].name)
	// $("#plantList").append('<div class="span2">')
    $("#plantList").append("<div class='span2'><a href='#gameModal' data-toggle='modal'> <img value='"+plantArray[i].name+"'style='height:200px;' src='"+plantArray[i].image+"'/></a></div>")
	// $("#plantList").append('</div>')
}