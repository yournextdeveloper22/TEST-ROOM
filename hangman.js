var words = ["strawberry", "appleseeds", "banana", "Avocado"];

var valid = "qwertyuiopasdfghjklzxcvbnm";
var word = words[Math.floor(Math.random() * words.length)];
console.log(word); //for testing purposes only please ignore or check f12 console
var continueGame = true;
var lives = 10;
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "*";
}
var remainingLetters = word.length;
console.log(remainingLetters); //for testing purposes only please ignore or check f12 console

while (remainingLetters >= 0 && continueGame) {
  console.log("lives", lives);
  alert(answerArray.join(" "));
  var guess = prompt("Guess a letter habibi, or stop playing and cry.");
  //   to lower case
  var newWord = guess.toLowerCase();
  console.log(newWord); //for testing purposes only please ignore or check f12 console
  while (!valid.includes(newWord)) {
    alert("Invalid Input !");
    var guess = prompt("Guess a letter habibi, or stop playing and cry.");
    var newWord = guess.toLowerCase();
    continue;
  }
  //    check if wrong
  if (!word.includes(newWord)) {
    alert("wrong guess! TRY AGAIN AND USE YOUR BRAIN FOR ONCE! hint: its a fruit");
    lives--;
    if (lives === 0) {
      alert("game over you pathetic loser");
      continueGame = false;
      break;
    }
    continue;
  } else {
    for (var i = 0; i < word.length; i++) {
      if (word[i] === newWord) {
        answerArray[i] = newWord;
        remainingLetters--;
        if (!answerArray.includes("*")) {
          alert("took you long enough.you win !");
          remainingLetters = 0;
          continueGame = false;
          break;
        }
      }
    }
  }
}