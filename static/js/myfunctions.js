var resetLiActive = function() {
	$('.nav-link').each(function() {
		$(this).parent().removeClass("active");
  });
}

$("#menu-home").click(function() {
	resetLiActive();
	$(this).parent().addClass("active");
    $('html,body').animate({
        scrollTop: $("#section-home").offset().top},
        1000);
});


$("#menu-acoes").click(function() {
	resetLiActive();
	$(this).parent().addClass("active");
    $('html,body').animate({
        scrollTop: $("#section-acoes").offset().top+1},
        1000);
});

$("#menu-visoes").click(function() {
	resetLiActive();
	$(this).parent().addClass("active");
    $('html,body').animate({
        scrollTop: $("#section-visoes").offset().top+1},
        1000);
});

$("#menu-onde").click(function() {
	resetLiActive();
	$(this).parent().addClass("active");
    $('html,body').animate({
        scrollTop: $("#section-onde").offset().top+1},
        1000);
});

$("#menu-cadastar").click(function() {
	resetLiActive();
	$(this).parent().addClass("active");
    $('html,body').animate({
        scrollTop: $("#section-cadastar").offset().top+1},
        1000);
});

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$.fn.isFocused = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  var viewMiddle = (viewportBottom + viewportTop)/2;

  return elementBottom > viewMiddle && elementTop < viewMiddle;
};

var countViewed = false;
var prevScrollpos = window.pageYOffset;
$(window).on('resize scroll', function() {
  $('.site-section').each(function() {
    var activeSection = $(this).attr('id');
    if ($(this).isFocused()) {
      $('header #menu-' + activeSection).addClass('active');
    } else {
      $('header #menu-' + activeSection).removeClass('active');
    }
  });
  
  if (!countViewed)
	  $('.count').each(function() {
		if ($(this).isInViewport()) {
			countViewed = true;
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 2000 + Math.floor(Math.random() * Math.floor(3000)),
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		}
	  });
	  
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
	$('header').css('top', 0);
  } else {
	$('header').css('top', '-200px');
  }
  prevScrollpos = currentScrollPos;
  
});