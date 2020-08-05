
// $(document).ready(function(){


	AOS.init();


	// $(".section_wrap").niceScroll({cursorwidth: '10px', autohidemode: true, zindex: 999 });

	$('.burgur-menu').click(function(){

		$('.mob-links').toggle();
		// $('.burgur-menu span.m-top').css('display','none');
		// $('.burgur-menu span.middle').css({transform:'rotate(-45deg)',top:'30px',left:'-20px'});
		// $('.burgur-menu span.bottom').css({transform:'rotate(45deg)',top:'00px',left:'10px'});

	});
	$('.mob-links a').click(function(){
		$('.mob-links').css('display','none');
		$('.mob-links ul').css('height','0%');
	});
// }
