var wow = new WOW(
        {
          boxClass: 'wow', // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset: 1, // distance to the element when triggering the animation (default is 0)
          mobile: false, // trigger animations on mobile devices (true is default)
          live: true // act on asynchronously loaded content (default is true)
        }
      );
wow.init();
jQuery(document).ready(function ($) {
  $(window).stellar();
  var links = $('.navigation').find('li');
  slide = $('.slide');
  button = $('.button');
  mywindow = $(window);
  htmlbody = $('html,body');
  slide.waypoint(function (event, direction) {
    dataslide = $(this).attr('data-slide');
    if (direction === 'down') {
      $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
    }
    else {
      $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
    }
  });
  mywindow.scroll(function () {
    if (mywindow.scrollTop() == 0) {
      $('.navigation li[data-slide="1"]').addClass('active');
      $('.navigation li[data-slide="2"]').removeClass('active');
    }
  });
  function goToByScroll(dataslide) {
    htmlbody.animate({
      scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
    }, 2000, 'easeInOutQuint');
  }

  links.click(function (e) {
    e.preventDefault();
    dataslide = $(this).attr('data-slide');
    goToByScroll(dataslide);
  });
  button.click(function (e) {
    e.preventDefault();
    dataslide = $(this).attr('data-slide');
    goToByScroll(dataslide);
  });
});