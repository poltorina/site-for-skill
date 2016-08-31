$(document).ready(function() {
	$('.header .header-user .user-wrapp').click(function() {
		$('.user-menu ').toggleClass('user-menu-active');
	});

	$('.an-close').click(function() {
		$('.anons').css('display', 'none');
	});


  	$('.header .loggin button').click(function() {
		$('#overlay').fadeIn(400);
	})

	$('#overlay').click( function(){
		$('.enter-form').animate({opacity: 0, top: '0%'}, 200, function(){
	    	$(this).css('display', 'none'); 
	    	$('#overlay').fadeOut(400);
		});
	});


	$('.to-sign').click(function() {
		$('.enter-form').animate({opacity: 0, top: '0%'}, 200, function(){
	    	$('.signin').css('display', 'block').animate({opacity: 1, top: '13%'}, 200);
		});
	});

	$('.to-reg').click(function() {
		$('.enter-form').animate({opacity: 0, top: '0%'}, 200, function(){
	    	$('.reg').css('display', 'block').animate({opacity: 1, top: '13%'}, 200);
		});
	})

	$('.forgot-pass').click(function() {
		$('.enter-form').animate({opacity: 0, top: '0%'}, 200, function(){
	    	$('.forgot').css('display', 'block').animate({opacity: 1, top: '13%'}, 200);
		});
	})

	$('.footer .fa-chevron-up').click(function(event) {
		event.preventDefault();
	  	$('body,html').animate({
	    	scrollTop: $('.wrapper').offset().top}, 1000);
	});

	//mobile menu-button
	$('.mobile-menu-btn').click(function(e){
		$(this).toggleClass('active');
		$('.header .menu').toggleClass('active-mobile');
		$('.header .loggin').toggleClass('loggin-mobile');
		e.preventDefault();
		return false;
	});

	$('.ms-block .c-title').each(function(i,elem) {
		if ($(this).find('.c-name').height() > 25) {
			$(this).find('.c-time').css('display', 'inline-block');
		}

	});

	$('.course-bottom .show-bought label').hover(function() {
		$('.course-bottom .show-bought .speech-bubble').addClass('hint');
	}, function() {
		$('.course-bottom .show-bought .speech-bubble').removeClass('hint');
	});

	$('.course-bottom .tabs li').click(function() {
		$('.course-bottom .tabs li').removeClass('active');
		$(this).addClass('active');
		$('.info-panel').addClass('hidden');
		let firstClass = $(this).attr('class').split(' ')[0];
		$('#' + firstClass).removeClass('hidden');


		$('.course-bottom .tabs li img').each(function(index, el) {
		var notHover = $(this).attr('src');
		notHover = notHover.slice(0, -8);
		activeImg = notHover + '-hov.png';
		notActiveImg = notHover + '-not.png';
			$(this).attr('src', notActiveImg);
		});

		var notHover = $(this).find('img').attr('src');
		notHover = notHover.slice(0, -8);
		activeImg = notHover + '-hov.png';
		$(this).find('img').attr('src', activeImg);
	})

	$('.courses-menu-btn').click(function() {
		$(this).toggleClass('courses-menu-btn-active');
		$('.courses-menu').toggleClass('menu-active');
	})

	$('.course-bottom .reply').click(function(event) {
		event.preventDefault();
		$(this).closest('.comment ').find('.reply-form').removeClass('hidden');
	});

	$('.const-wrapp .add').click(function() {
		$(this).addClass('added');
	});

	$('.const-wrapp .expand').click(function() {
		// setTimeout(setEqualHeight, 1000, $(".left-col, .right-col"));
		$(this).find('i').toggleClass('fa-chevron-down');
		$(this).find('i').toggleClass('fa-chevron-up');
	});

	$('.const-wrapp .expand-course').click(function() {
		$(this).closest('li').toggleClass('active-course');
		$(this).closest('li').find('.part-list').toggleClass('part-list-active');
	})

	$('.const-wrapp .expand-part').click(function() {
		$(this).closest('li').toggleClass('active-part');
		$(this).closest('li').find('.less-list').toggleClass('less-list-active');
	})


	$(document).on('click', function(e) {
	  if (!$(e.target).closest(".reply").length && !$(e.target).closest(".reply-form").length) {
	    $('.reply-form').addClass('hidden');
	  }
	  e.stopPropagation();
	});
	


	$('.top-menu-button .tabs li').click(function() {
		$('.top-menu-button .tabs li').removeClass('active');
		$(this).addClass('active');
		$('.info-panel').addClass('hidden');
		let firstClass = $(this).attr('class').split(' ')[0];
		$('#' + firstClass).removeClass('hidden');
	})

	$('.profile-wrapp .prof-name img').click(function() {
		$('.profile-wrapp .prof-name input, .profile-wrapp .prof-name i').removeClass('hidden')
		$('.profile-wrapp .prof-name span, .profile-wrapp .prof-name img').addClass('hidden');
	});

	$('.profile-wrapp .prof-name i').click(function() {
		var profileName = $('.profile-wrapp .prof-name input').val();
		$('.profile-wrapp .prof-name span').html(profileName)
		$('.profile-wrapp .prof-name span, .profile-wrapp .prof-name img').removeClass('hidden')
		$('.profile-wrapp .prof-name input, .profile-wrapp .prof-name i').addClass('hidden');
	});
});

window.onload = resizeDiv;
window.addEventListener('resize', function(){
	return resizeDiv();
}, true);

function resizeDiv(){
	//player size
	$(function(){
	    var win = $(window);
	    var descrWidth;
	    var aspect = 16/9;
	    var resizeVideoContent = function() {
	        var w = win.width() - 70;
	        var h = win.height() - 156;
	        if(w/h>aspect) {
	            $('.video-container').height(h);
	            $('.video-content').width(h*aspect);
	        }
	        else {
	            $('.video-content').width(w);
	            $('.video-container').height(w/aspect);
	        }
	    }
	    resizeVideoContent();
	});

	$('.rel-title').each(function(i,elem) {
		if ($(this).height() < 35) {
			$(this).find('.rel-name').css('display', 'block');
			if ($(this).height() > 70) {
				$(this).find('.rel-name').css('display', 'inline');
			}
		}
		if ($(this).height() > 70) {
			$(this).find('.rel-name').css('display', 'inline');
		}
	});

	$('.course-bottom .tab-list li').each(function(i, el) {
		if($(this).height() > 60) {
    		$(this).addClass('psevdo-middle')
		}
	});

	$('.part-name').each(function(i,elem) {
		if ($(this).height() < 35) {
			$(this).css('display', 'block');
			if ($(this).height() > 35) {
				$(this).css('display', 'inline');
			}
		}
		if ($(this).height() > 35) {
			$(this).css('display', 'inline');
		}
	});

	
	var footerHeight = $('.footer').outerHeight();
	$('.wrapper').css('min-height', 'calc(100vh - ' + footerHeight + 'px)');
	if ($('.container').height() < 240) {
		$('.container').css('top', $('.wrapper').height() / 2 - 120 + 'px');
	} else {
		$('.container').css('top', '0');		
	}
}

