var readLineSync = require('readline-sync');
var chalk = require("chalk");
var score = 0;

var userName = readLineSync.question('Please Enter Your Good Name : ');
console.log(chalk.yellow("Welcome " + userName));

var queArr = [
  {
    question: "What is Gujarat Famous for ?? : ",
    ans: "modi"
  },
  {
    question: "In which direction Gujarat is situted in India ?? ",
    ans: "west"
  },
  {
    question: "Capital of Gujarat ?? : ",
    ans: "gandhinagar"
  },
  {
    question: "Mahatma Gandhi belongs to which state ?? : ",
    ans: "gujarat"
  },
  {
    question: "Is Ahmedabad is in Gujarat ?? : ",
    ans: "yes"
  }
];

var highScore = [
  {
    name: "Vishal",
    score: 3
  }
];

for (var i = 0; i < queArr.length; i++) {
  ask(queArr[i].question, queArr[i].ans);
}

if (highScore[0].score < score) {
  highScore = [];
  var obj = {};
  obj["name"] = userName;
  obj["score"] = score;
  highScore.push(obj);

  console.log(("Yippiee..." + userName + " You break the Highest Score , New Highest Score is : " + score));
}
else {
  console.log(("Your Score is : " + score));
}

function ask(question, answers) {
  var answer = readLineSync.question(question);
  if (answer.toLowerCase() === answers.toLowerCase()) {
    console.log(chalk.blue("You are Right"));
    score++;
  }
  else {
    console.log(chalk.red("You are wrong"));
    score--;
  }
}


console.log(("High Score is : " + highScore[0].score));