let UserScore = 0;
let CompScore = 0;
var viewResultChange = false;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("machine-score");
const scoreBoard_div = document.querySelector(".score");
const picUser = document.getElementById("pic-user");
const picMach = document.getElementById("pic-mach");
const result_p = document.querySelector(".result > p");
const stone_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

https: function getCompChoice() {
  // body...
  const choice = ["r", "p", "s"];
  var comp = Math.floor(Math.random() * 3);
  if (choice[comp] === "r") {
    picMach.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzi8xjHod6u5p2sbHF-7vfwKzUsnp6FnXozwrc6YsgOXMEEyqA&usqp=CAU";
  } else if (choice[comp] === "p") {
    picMach.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmimdyHyerFnkdZtwhp6t9k5K2_mYBcCOHTOaDETmfPjTl1ILO&usqp=CAU";
  } else {
    picMach.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtO53UeVk2JBXGww9Q3qtG7UCH0q-iHMGc2RrBeq6Zm5Mxlksl&usqp=CAU";
  }
  return choice[comp];
}

function reset() {
  UserScore = 0;
  CompScore = 0;
  result_p.innerHTML = "";
  location.reload();
}
function viewResult() {
  console.log(viewResultChange);
  if (!viewResultChange) {
    viewResultChange = true;
    document.getElementById("result").innerHTML = "HIDE RESULT";
    document.getElementById("result").style.backgroundColor =
      "rgb(189, 21, 21)";
    result_p.style.display = "block";
    result_p.style.padding = "10px";
    result_p.innerHTML = result_p.innerHTML.startsWith(
      "choose any option to view result"
    )
      ? "choose any option to view result"
      : result_p.innerHTML;
  } else {
    viewResultChange = false;
    document.getElementById("result").innerHTML = "VIEW RESULT";
    document.getElementById("result").style.backgroundColor =
      "rgb(14, 173, 62)";
    result_p.style.display = "none";
  }
}
function place(choosed) {
  // body...
  if (choosed === "r") {
    return "stone";
  } else if (choosed === "p") {
    return "paper";
  }
  return "scissors";
}
function win(userchoice, compchoice) {
  UserScore++;
  userScore_span.innerHTML = UserScore;
  compScore_span.innerHTML = CompScore;

  result_p.innerHTML =
    "You Won computer" +
    "<br>" +
    "you choosed : " +
    place(userchoice) +
    "<br>" +
    "mach choosed : " +
    place(compchoice);
}
function lose(userchoice, compchoice) {
  CompScore++;
  userScore_span.innerHTML = UserScore;
  compScore_span.innerHTML = CompScore;
  result_p.innerHTML =
    "You lost with computer" +
    "<br>" +
    "you choosed : " +
    "<bold>" +
    place(userchoice) +
    "<br>" +
    "mach choosed : " +
    place(compchoice);
}
function draw(userchoice, compchoice) {
  result_p.innerHTML =
    "both gets draw" +
    "<br>" +
    "you choosed : " +
    place(userchoice) +
    "<br>" +
    "mach choosed : " +
    place(compchoice);
}

function game(userchoice) {
  var compchoice = getCompChoice();
  switch (userchoice + compchoice) {
    case "pr":
    case "rs":
    case "sp":
      win(userchoice, compchoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userchoice, compchoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userchoice, compchoice);
      break;
  }
}

// body...
stone_div.addEventListener("click", function () {
  console.log("r calling game function");
  game("r");
  picUser.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzi8xjHod6u5p2sbHF-7vfwKzUsnp6FnXozwrc6YsgOXMEEyqA&usqp=CAU";
});

paper_div.addEventListener("click", function () {
  game("p");
  picUser.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmimdyHyerFnkdZtwhp6t9k5K2_mYBcCOHTOaDETmfPjTl1ILO&usqp=CAU";
});

scissors_div.addEventListener("click", function () {
  game("s");
  picUser.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtO53UeVk2JBXGww9Q3qtG7UCH0q-iHMGc2RrBeq6Zm5Mxlksl&usqp=CAU";
});
