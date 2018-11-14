let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3)
  return choices[randomNumber];
}

function resultMessageDefault() {
  result_p.style.color = "white";
}

function flashResult(result) {
  switch (result) {
    case "win":
      result_p.style.color = "green";
      setTimeout(function() {
        resultMessageDefault();
      }, 200);
      break;
    case "lose":
      result_p.style.color = "red";
      setTimeout(function() {
        resultMessageDefault();
      }, 200);
      break;
    case "draw":
      result_p.style.color = "grey";
      setTimeout(function() {
        resultMessageDefault();
      }, 200);
      break;
  }
}

function win(ucChoice) {
  userScore++;
  let message = '';
  switch (ucChoice) {
    case "rs":
      message = "Rock smashes Scissors.";
      break;
    case "sp":
      message = "Scissors cut Paper.";
      break;
    case "pr":
      message = "Paper wraps Rock.";
      break;
  }
  result_p.innerHTML = `${message} You win!`;
  userScore_span.innerHTML = userScore;
  flashResult('win');
}

function lose(ucChoice) {
  computerScore++;
  let message = '';
  switch (ucChoice) {
    case "sr":
      message = "Rock smashes Scissors.";
      break;
    case "ps":
      message = "Scissors cut Paper.";
      break;
    case "rp":
      message = "Paper wraps Rock.";
      break;
  }
  result_p.innerHTML = `${message} You lose!`;
  computerScore_span.innerHTML = computerScore;
  flashResult('lose');
}

function draw(ucChoice) {
  let message = '';
  switch (ucChoice) {
    case "ss":
      message = "Scissors fight. Draw!";
      break;
    case "pp":
      message = "Paper fight. Draw!";
      break;
    case "rr":
      message = "Rock fight. Draw!";
      break;
  }
  result_p.innerHTML = message;
  flashResult('draw');
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice + computerChoice);
      break;
    case "sr":
    case "ps":
    case "rp":
      lose(userChoice + computerChoice);
      break;
    case "ss":
    case "pp":
    case "rr":
      draw(userChoice + computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  })

  scissors_div.addEventListener('click', function() {
    game("s");
  })
}

main();
