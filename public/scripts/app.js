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


  function createTweetElement () {
    var $header = $("<header>");
    var $avatar = $("<img>").attr('src', "/images/icon.png");
    var $username = $("<h1>").text("Bill Feilds");
    var $handle = $("<h2>").text("@MrFields");
    $header.append($avatar, $username, $handle);
return $header
  }
// createTweetElement(tweetData);

// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
$('#tweet-container').append(createTweetElement());

// <!-- <header>
// <img src="/images/icon.png" />
// <h1>Bill Fields</h1>
// <h2>@MrFields</h2>
// </header>
// <div class="tweet-body">
// <p>
// Little tweet here Little tweet here Little tweet here Little tweet here Little tweet here Little tweet here Little tweet here Little tweet here Little tweet here Little tweet here Little tweet here Little tweet here 
// </p>
// </div>
// <footer>
// <p>
// 10 days ago
// </p>
// <span>
//   <i class="fa fa-flag" aria-hidden="true"></i>
//   <i class="fa fa-retweet" aria-hidden="true"></i>
//   <i class="fa fa-heart" aria-hidden="true"></i>
// </span>
// </footer> -->
