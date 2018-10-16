/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
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
    let $timestamp = $("<p>").text("10 days ago");
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

  //appending created tweet after DOM is loaded
$(document).ready(function() {
$('.container').append(createTweetElement(tweetData));
});
