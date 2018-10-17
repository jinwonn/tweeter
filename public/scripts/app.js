/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

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

  function renderTweets(tweets) {
    let $twts = $("<div>");
    tweets.forEach((tweet) => {
      $twts.prepend(createTweetElement(tweet));
    });
    $('.tweet_contain').append($twts);
  }
  

$(document).ready(function() {
renderTweets(data);

$("#tweet-submit").on("click", function(event) {
  // $.ajax({
  //   url: "/tweets",
  //   method: "POST",
  //   data: 
  //   success: function() {
  //     console.log("done")
  //   }
  // });
  event.preventDefault();
  if ($('textarea').val().length < 140) {
    $.ajax({
      url: "/tweets",
      method: 'POST',
      data: $(this).siblings('textarea').serialize(),
    }).then(function() {
      $('.tweet_contain').empty();
      loadTweets();
    });
    $('textarea').val('');
    $('.counter').text('140');
  } else {
    alert('exceeded 140 characters')
  }
});

function loadTweets(){
  $.ajax({
    url: 'http://localhost:8080/tweets',
    method: 'GET',
  }).then(function (response) {
    renderTweets(response);
  })
};

loadTweets();

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