(function($) {
  var email = encodeURIComponent("info@kana.fitness"),
    $form = $("#contact-form"),
    $message = $("#message");

  $form.on("submit", function(e) {
    e.preventDefault();

    var body = encodeURIComponent($message.val()),
      mailto = "mailto:"+ email +"?body=" + body;

    location.href = mailto;
  })

})(jQuery);
