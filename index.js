var readlinesync = require("readline-sync");

var userName = readlinesync.question("Enter your name: ");
var score = 0;

function welcome(userName, lvl) {
  console.log(`\nWelcome ${userName}, to the ${lvl} of the quiz!`);
}

var lvl1 = [{
  question: "What is the capital of India? ",
  a: "Mumbai",
  b: "Delhi",
  c: "Chennai",
  ans: "b"
}, {
  question: "Who was the first president of India? ",
  a: "Jawaharlal Nehru",
  b: "Lal Bahadur Shastri",
  c: "Dr.Rajendra Prasad",
  ans: "c"
}, {
  question: "Which is the national bird of India? ",
  a: "Peacock",
  b: "Eagle",
  c: "Greater Flamingo",
  ans: "a"
}];

var lvl2 = [{
  question: "Who is the father of the Indian Navy? ",
  a: "Chhatrapati Sambhaji Maharaj",
  b: "Samudragupta",
  c: "Chhatrapati Shivaji Maharaj",
  ans: "c"
}, {
  question: "Which was the first university of India? ",
  a: "Nalanda University",
  b: "Takshashila University",
  c: "Vikramashila University",
  ans: "a"
}, {
  question: " When is Army Day celebrated in India?",
  a: "15 January",
  b: "18 January",
  c: "20 January",
  ans: "a"
}];

var lvl3 = [{
  question: "Who was the first Asian to win the Nobel Prize? ",
  a: "Bankim Chandra Chatterjee",
  b: "Rabindranath Tagore",
  c: "Netaji Subhash Chandra Bose",
  ans: "b"
}, {
  question: " Who was the First Deputy Prime Minister of India?",
  a: "Jawaharlal Nehru",
  b: "Dr. B. R. Ambedkar",
  c: "Vallabhbhai Patel",
  ans: "c"
}, {
  question: "Which English word was inspired by Puri's spectacular Rath Yatra?",
  a: "Kamikaze",
  b: "Portmanteau",
  c: "Juggernaut",
  ans: "c"
}];

var highScores = [{
  name: "Novesh",
  score: 10
}, {
  name: "Ajay",
  score: 9
}, {
  name: "Vijay",
  score: 9
}, {
  name: "mrunal",
  score: 8
}]

function showHighScores(score) {
  console.log("\nCheck out the high scores, if you should be there ping me I'll update it ");
  highScores.map(score => console.log(`${score.name} : ${score.score}`));
}

function displayScore(score) {
  console.log(`\nWell done! Your score is: ${score}`)
}

function play(question, answer) {
  console.log(`\n${question.question}\n a. ${question.a}\n b. ${question.b} \n c. ${question.c} `)
  var userAns = readlinesync.question();
  if (userAns === answer) {
    console.log("awesome! \n---------------------")
    score += 1;
  } else {
    console.log("wrong!");
  }
}

function game() {
  for (var i = 0; i < lvl1.length; i++) {
    play(lvl1[i], lvl1[i].ans);
  }
  displayScore(score);

  if (score === 3) {
    welcome(userName, "level-2");
    for (var i = 0; i < lvl2.length; i++) {
      play(lvl2[i], lvl2[i].ans);
    }
    displayScore(score);

    if (score >= 5) {
      welcome(userName, "level-3");
      for (var i = 0; i < lvl3.length; i++) {
        play(lvl3[i], lvl3[i].ans);
      }
      displayScore(score);
      showHighScores();

    } else {
      console.log("To begin with the level-3 a minimum score of 5 is required, Try again!");
      showHighScores();
    }
  } else {
    console.log("Try again,a score of 3 is needed to get into the level-2!");
    showHighScores();
  }
}


welcome(userName, "level-1");
game();