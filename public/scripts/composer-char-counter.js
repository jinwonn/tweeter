$(document).ready(function() {
  var maxLength = 140;
  $('#tweet-input').keyup(function() {
    var chartyped = $(this).val().length;
    var totchartyped = maxLength - chartyped
    if (totchartyped < 0) {
      $("#counter").css("color", "#ff0000");
    } else {
      $("#counter").css("color", "");
    }
    $('#counter').text(totchartyped);
  });
});