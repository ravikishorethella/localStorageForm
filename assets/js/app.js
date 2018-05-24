eventListeners();

// event listeners

// selecting the form tag
function eventListeners() {
  document.querySelector("#form").addEventListener("submit", newTweet);
}

// functions
// creating a newTweet function

function newTweet(e) {
  e.preventDefault();
  console.log("Form submitted");
}
