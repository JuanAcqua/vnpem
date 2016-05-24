
$(document).ready(function() {


	$('#portada').videoBG({
		mp4:'/images/top/header.mp4',
		ogv:'/images/top/header.ogv',
		webm:'/images/top/header.webm',
		poster:'/images/top/header.jpg',
		scale:true,
		loop:false,
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