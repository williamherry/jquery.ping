(function($) {

  $.fn.ping = function( options ) {

    var settings = $.extend({
      url: '/ping',
      expect: 'pong'
    }, options);

    var result = $.ajax({
      type: "GET",
      url: settings.url,
      async: false
    }).responseText;

    if (result == settings.expect) {
      return true;
    } else {
      return false;
    }

  }

}(jQuery));
