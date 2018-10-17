/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function getTime(date) {
  var currentDate = Date.now();
  var secondsAgo = (currentDate - date) / 1000 / 60;
  var minutesAgo = (currentDate - date) / 1000 / 60;
  var hoursAgo = (currentDate - date) / 1000 / 60 / 60;
  if (minutesAgo < 1) {
    return `${Math.floor(secondsAgo)} seconds ago`;
  } else if (minutesAgo > 1 && minutesAgo < 60) {
    return `${Math.floor(minutesAgo)} minutes ago`;
  } else if (minutesAgo > 60 && hoursAgo < 24) {
    return `${Math.floor(hoursAgo)} hours ago`;
  } else if (hoursAgo > 24) {
    return `${Math.floor(hoursAgo / 24)} days ago`;
  }
}

  function createTweetElement (twtobj) {

    //creation of tweet header
    let $header = $("<header>");
    let $avatar = $("<img>").attr('src', twtobj.user.avatars.regular);
    let $username = $("<h1>").text(twtobj.user.name);
    let $handle = $("<h2>").text(twtobj.user.handle);
    $header.append($avatar, $username, $handle);
    
    //creation of tweet body
    let $tweetbody = $("<div>").addClass("tweet-body");
    let $tweet = $("<p>").text(twtobj.content.text);
    $tweetbody.append($tweet);

    //creation of footer
    let $footer = $("<footer>");
    let $timestamp = $("<p>").text(getTime(twtobj.created_at));
    let $buttons = $("<span>")
    let $flag = $('<i>').addClass('fa fa-flag').attr('aria-hidden', 'true');
    let $retweet = $('<i>').addClass('fa fa-retweet').attr('aria-hidden', 'true');
    let $heart = $('<i>').addClass('fa fa-heart').attr('aria-hidden', 'true');
    $buttons.append($flag, $retweet, $heart);
    $footer.append($timestamp, $buttons);
    
    //creation of final output 
    let $output = $("<section>").addClass("tweet");
    $output.append($header, $tweetbody, $footer);
    return $output;
  }

  //renders tweets 
  function renderTweets(tweets) {
    let $twts = $("<div>");
    tweets.forEach((tweet) => {
      $twts.prepend(createTweetElement(tweet));
    });
    $('.tweet_contain').append($twts);
  }
  

  //page ready
$(document).ready(function() {

// on tweet submit click
$("#tweet-submit").on("click", function(event) {
  event.preventDefault();
  if ($('textarea').val().length < 140 && $('textarea').val().length > 0) {
    $.ajax({
      url: "/tweets",
      method: 'POST',
      data: $(this).siblings('textarea').serialize(),
    }).then(function() {
      $('.tweet_contain').empty();
      loadTweets();
      $('.error').empty()
    });
    $('textarea').val('');
  } else if ($('textarea').val().length > 140) {
    $('.error').append('!!! exceeded 140 characters !!!')
  } else {
    $('.error').append('!!! Tweet some tweets !!!')
  }
});

//load tweets with ajax
function loadTweets(){
  $.ajax({
    url: 'http://localhost:8080/tweets',
    method: 'GET',
  }).then(function (response) {
    renderTweets(response);
  })
};

loadTweets();

$('#nav-bar').click('button', function() {
  if ($('.new-tweet').is(':animated')) {
    return false;
  }
  if ($('.new-tweet').is(":visible")) {
    $('.new-tweet').slideToggle();
  }

  if ($('.new-tweet').is(":hidden")) {
    $('.new-tweet').slideToggle();
    $('textarea').focus();
  }
});
});

// $("#tweet-submit").on("click", function(event) {
//   $.ajax({
//     url: "/tweets",
//     method: "POST",
//     data: $(this).siblings('textarea').serialize(),
//     success: function() {
//     }
//   });
//   console.log(done)
//   event.preventDefault();
// });