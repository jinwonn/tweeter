$(document).ready(function() {
  console.log("dom loaded")
  $(.new-tweet).on('keyup', '#tweet-composer textarea', function() {
    console.log("key pressed");
  })
};)