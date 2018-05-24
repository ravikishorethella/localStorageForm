// variables
const tweetList = document.getElementById("tweet-list");

// event listeners

eventListeners();

function eventListeners() {
  document.querySelector("#form").addEventListener("submit", newTweet);
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
}
