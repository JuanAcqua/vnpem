
$(document).ready(function() {


	$('body').videoBG({
		position:"fixed",
		zIndex:0,
		mp4:'/images/backs/2014enero.mp4',
		ogv:'/images/backs/2014enero.ogv',
		webm:'/images/backs/2014enero.webm',
		poster:'/images/backs/2014enero.jpg',
		opacity:1,
		fullscreen:true,
	});
	
	
	$('#portada').videoBG({
		mp4:'images/backs/header.mp4',
		ogv:'images/backs/header.ogv',
		webm:'images/backs/header.webm',
		poster:'images/backs/header.jpg',
		scale:true,
		zIndex:0
	});
		
})