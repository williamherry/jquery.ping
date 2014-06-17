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

    return result === settings.expect;
  }

}(jQuery));
