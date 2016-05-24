
$(document).ready(function() {


	$('body').videoBG({
		position:"fixed",
		zIndex:0,
		mp4:'assets/christmas_snow.mp4',
		ogv:'assets/christmas_snow.ogv',
		webm:'assets/christmas_snow.webm',
		poster:'assets/christmas_snow.jpg',
		opacity:1,
		fullscreen:true,
	});
	
	
	$('#div_demo').videoBG({
		mp4:'/images/backs/2014enero.mp4',
		ogv:'/images/backs/2014enero.ogv',
		webm:'/images/backs/2014enero.webm',
		poster:'/images/backs/2014enero.jpg',
		scale:true,
		zIndex:0
	});
	
	
	$('#text_replacement_demo').videoBG({
		mp4:'assets/text_replacement.mp4',
		ogv:'assets/text_replacement.ogv',
		webm:'assets/text_replacement.webm',
		poster:'assets/text_replacement.png',
		textReplacement:true,
		width:760,
		height:24
	});
		
})