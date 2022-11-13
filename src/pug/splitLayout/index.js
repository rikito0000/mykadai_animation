$(window).scroll(function() {

  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.section');

  var scroll = $window.scrollTop() + ($window.height() / 3);

  $('.section').removeClass('active');

  $panel.each(function () {
    var $this = $(this);
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
      $this.addClass('active');
    }
  });

}).scroll();
