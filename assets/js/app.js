// variables
const tweetList = document.getElementById("tweet-list");

// event listeners

eventListeners();

function eventListeners() {
  document.querySelector("#form").addEventListener("submit", newTweet);
  // for removing the tweets from the tweet list
  tweetList.addEventListener("click", removeTweet);

  // document
  document.addEventListener("DOMContentLoaded", localStorageOnLoad);
}

// functions
// creating a newTweet function

function newTweet(e) {
  e.preventDefault();

  //   reading the textarea value
  const tweet = document.getElementById("tweet").value;

  // creating a remove btn
  const removeBtn = document.createElement("a");
  removeBtn.textContent = "X";
  removeBtn.classList = "remove-tweet";

  //   creating an li element and adding this tweet to the tweet-list
  const li = document.createElement("li");
  li.textContent = tweet;

  //   adding the button to each li tag
  li.appendChild(removeBtn);

  tweetList.appendChild(li);

  // adding the tweets to the local storage
  addTweetLocalStorage(tweet);
}

// function to remove the tweets from the tweet-list
function removeTweet(e) {
  if (e.target.classList.contains("remove-tweet")) {
    e.target.parentElement.remove();
  }
}

// function to add tweets to the local storage

function addTweetLocalStorage(tweet) {
  let tweets = getTweetFromStorage();
  // add the tweets to the storage
  tweets.push(tweet);
  // converting the tweet array into a string
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

// get tweets from the local storage
function getTweetFromStorage() {
  let tweets;
  const tweetsLS = localStorage.getItem("tweets");
  // get the values. if null is returned then we return an empty array
  if (tweetsLS === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(tweetsLS);
  }
  return tweets;
}

// print local storage tweets on load
function localStorageOnLoad() {
  let tweets = getTweetFromStorage();

  // loop throught the tweets
  tweets.forEach(tweet => {
    // creating a remove btn
    const removeBtn = document.createElement("a");
    removeBtn.textContent = "X";
    removeBtn.classList = "remove-tweet";

    //   creating an li element and adding this tweet to the tweet-list
    const li = document.createElement("li");
    li.textContent = tweet;

    //   adding the button to each li tag
    li.appendChild(removeBtn);

    tweetList.appendChild(li);
  });
}
