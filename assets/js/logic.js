$(document).ready(function() {


// var paintingList = [
// 	["aeroBoy.jpg", "Aero Boy"],
// 	["baltimoreOri.jpg", "Baltimore Ori"],
// 	["bird1.jpg", "Bird #1"],
// 	["bird3.jpg", "Bird #3"],
// 	["brainGame.jpg", "Brain Game"],
// 	["eastOfEdo.jpg", "East of Edo"],
// 	["forceOfLight.jpg", "Force of Light"],
// 	["goldLongLifeGoodLuck.jpg", "NA"],
// 	["hatTrack.jpg", "Hat Track"],
// 	["landingInAmerica.jpg", "Landing In America"],
// 	["lili.jpg", "Lili"],
// 	["manInCan.jpg", "Man In Can"],
// 	["neckbrace.jpg", "Neckbrace"],
// 	["painting04.jpg", "Painting 04"],
// 	["painting12.jpg", "Painting 12"],
// 	["painting13.jpg", "Painting 13"],
// 	["painting14.jpg", "Painting 14"],
// 	["painting16.jpg", "Painting 16"],
// 	["papasTable.jpg", "Papa's Table"],
// 	["repairman.jpg", "Repairman"],
// 	["RPeluce300Z001.jpg", "NA"],
// 	["soundTheAlarm.jpg", "Sound the Alarm"],
// 	["theBlindCarpenter.jpg", "The Blind Carpenter"],
// 	["thePhysicians.jpg", "The Physicians"],
// 	["theTeapot.jpg", "The Teapot"],
// 	["vanishingPoint.jpg", "Vanishing Point"],
// 	["womanClown.jpg", "Woman Clown"]
// ];

// paintingList.forEach(function(element) {
// 	$(".allPaintings").append("<img src='assets/images/"+element[0]+"'alt='"+element[1]+"' class='painting'>");
// 	console.log(element[0], element[1]);
// });

// MASONRY
$(".allPaintings").masonry({
		columnWidth: ".painting",
		itemSelector: ".painting",
		gutter: 10
	});


// NAVICON CLICK
$(".navIcon").on("click", function() {
	$(".navText").toggleClass("isNotShowing");
})
$(".contact").on("click", function() {
	$('#alertModal').modal('show');
})

var darkImage = true;
$("#homePainting").hover(function() {
	if (darkImage) {
		$(".imageText").toggleClass("isNotShowing");

		$("#homePainting").toggleClass("darken");
		$("#homePainting").toggleClass("transition");

		darkImage = false;
	}
})

});
