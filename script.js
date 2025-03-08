const Types = document.getElementsByClassName("Types")[0];
const category = document.getElementsByClassName("category");
const Main = document.getElementsByClassName("Main-Contant")[0];
const QuestionElmt = document.getElementsByClassName("Question")[0];
const Option = document.getElementsByClassName("Option")[0];
const ScoreElmt = document.getElementsByClassName("Score")[0];
const Nextbtn = document.getElementsByClassName("Next")[0];
const submitbtn = document.getElementsByClassName("submit")[0];
const ResultElmt = document.getElementsByClassName("Result")[0];
const Text = document.getElementsByClassName("Text")[0];
const Total = document.getElementsByClassName("Total")[0];
const Resetbtn = document.getElementsByClassName("Restart")[0];
const Welcome = document.getElementsByClassName("Welcome")[0];
const AnswerText = document.getElementsByClassName("AnswerText")[0];
const audio = document.getElementById("Audio");

let index = 0;
let categoryIndex = 0;
let isrunning = false;
let Score = 0;

const QuizList = {
  0: {
    categoryName: "Anime",
    QuestionList: [
      {
        question:
          "Q1. What is the real name of Pain that Naruto fought in the leaf village?",
        Option: ["A: Kakuza", "B: Nagato", "C: Kabuto", "D: Hiraku"],
        Answer: "B: Nagato",
      },
      {
        question:
          "Q2. who is the main protagonist in the anime 'attack on titan'?",
        Option: [
          "A: Eren Yeager",
          " B: Mikasa Ackerman",
          "C. Levi Ackerman",
          "D. Armin arlert",
        ],
        Answer: "A: Eren Yeager",
      },
      {
        question:
          "Q3. Which anime features a character named Monkey D. Luffy who aims to become the pirate King?",
        Option: [
          "A: Fairy Tail",
          "B: One piece",
          "C: Black Clover",
          "D: My hero Academia",
        ],
        Answer: "B: One piece",
      },
      {
        question:
          "Q4. Who does Levi term up with to recuse Eren from the female Titan 'Attack on Titan'?",
        Option: [
          "A: Kitz Weilman",
          "B: Jean kirshtien",
          "C: Mikasa Ackerman",
          "D: Dot Pyxis",
        ],
        Answer: "C: Mikasa Ackerman",
      },
    ],
  },
  1: {
    categoryName: "Cricket",
    QuestionList: [
      {
        question:
          "Q1. Which country Won the first-ever Cricket World cup in 1975?",
        Option: ["A: India", "B: England", "C: Australia", "D: West Indies"],
        Answer: "D: West Indies",
      },
      {
        question:
          "Q2. Who Holds the record for the highest Individual score in Test Cricket?",
        Option: [
          "A: Sachin Tendulkar",
          "B: Brian Lara",
          "C: Don Bradman",
          "D: Ricky Ponting",
        ],
        Answer: "B: Brian Lara",
      },
      {
        question: "Q3. Which year did India win their first Cricket World cup?",
        Option: ["A: 1975", "B: 1983", "C: 2003", "D: 2011"],
        Answer: "B: 1983",
      },
      {
        question:
          "Q4. Who holds the record for the Fastest century in One Day International?",
        Option: [
          "A: Chirs Gayle",
          "B: virat Kholi",
          "C: AB de villers",
          "D: Rohit Shrama",
        ],
        Answer: "C: AB de villers",
      },
    ],
  },
  2: {
    categoryName: "Coding",
    QuestionList: [
      {
        question:
          "Q1. Which of the Dialog Box Display a Message and a data Entry Field",
        Option: ["A: Alert()", "B: Prompt()", "C: Confirm()", "D: MSG()"],
        Answer: "B: Prompt()",
      },
      {
        question: "Q2. If ____ Button is clicked ....Event handler is invoked",
        Option: [
          "A: OnSubmit()",
          "B: OnLoad()",
          "C: IsPostBack()",
          "D: OnClick()",
        ],
        Answer: "D: OnClick",
      },
      {
        question: "Q3. Inside which HTML element do we put the JavaScript?",
        Option: ["A: Js", "B: JavaScript", "C: Script", "D: Scripting"],
        Answer: "C: Script",
      },
      {
        question:
          "Q4. Which One of the following is the correct way for calling the JavaScript code?",
        Option: [
          "A: Function/Method",
          "B: RMI",
          "C: Triggering Event",
          "D: Preprocessor",
        ],
        Answer: "D: Function/Method",
      },
    ],
  },
};

Option.innerHTML = `<div class="Answer Hover"></div>
                            <div class="Answer Hover"></div>
                            <div class="Answer Hover"></div>
                            <div class="Answer Hover"></div>`;

function Start() {
  Types.style.display = "flex";
  Welcome.style.display = "none";
  for (let i = 0; i < category.length; i++) {
    category[i].innerHTML = QuizList[i].categoryName;
    category[i].addEventListener("click", () => {
      Types.style.display = "none";
      Main.style.display = "flex";
      categoryIndex = i;
      fillElmt();
    });
  }
}

function fillElmt() {
  QuestionElmt.textContent =
    QuizList[categoryIndex].QuestionList[index].question;
  for (let j = 0; j < Option.children.length; j++) {
    Option.children[j].textContent =
      QuizList[categoryIndex].QuestionList[index].Option[j];
  }
}

function QuizGame() {
  fillElmt();
  for (let i = 0; i < Option.children.length; i++) {
    Option.children[i].addEventListener("click", () => {
      if (!isrunning) {
        Option.children[i].style.backgroundcolor = "teal";
        setTimeout(() => {
          if (
            Option.children[i].textContent ===
            QuizList[categoryIndex].QuestionList[index].Answer
          ) {
            Option.children[i].style.backgroundcolor = "green";
            Score += 25;
            ScoreElmt.textContent = `score: ${Score}`;
            AnswerText.style.display = "block";
            AnswerText.textContent = "Oh Great, its correct! congratulation";
            AnswerText.style.color = "green";
            audio.src = "correct.mp3";
            audio.play();
          } else {
            Option.children[i].style.backgroundcolor = "black";
            AnswerText.style.display = "block";
            AnswerText.textContent = "No, it is wrong Answer! Try harder";
            AnswerText.style.color = "red";
            audio.src = "Wrong.mp3";
            audio.play();
          }
        }, 500);
        isrunning = true;
      } else {
        window.alert("Please click on next button to continue");
      }
    });
  }
}

Nextbtn.addEventListener("click", () => {
  index++;
  if (isrunning) {
    for (let i = 0; i < Option.children.length; i++) {
      Option.children[i].style.backgroundcolor = "orengered";
      AnswerText.style.display = "none";
    }
    isrunning = false;
    if (index > QuizList[0].QuestionList.length - 1) {
      Main.style.display = "none";
      Result();
    } else {
      fillElmt();
    }
  } else {
    window.alert("Please select an option");
  }
});

function checkAnswer() {}

function Result() {
  Result.style.display = "flex";
  if (Score == 0) {
    Text.textContent = `Better luck for next time:`;
    Total.textContent = `Total Score is ${Score}`;
  } else if (Score == 25) {
    Text.textContent = `Your are Not Bad`;
    Total.textContent = `Total Score is ${Score}`;
  } else if (Score == 50) {
    Text.textContent = `Your are very nice`;
    Total.textContent = `Total Score is ${Score}`;
  } else if (Score == 75) {
    Text.textContent = `Your are Exellent!`;
    Total.textContent = `Total Score is ${Score}`;
  } else if (Score == 100) {
    Text.textContent = `Your are Amazing! Perfect!`;
    Total.textContent = `Total Score is ${Score}`;
  }
}

Resetbtn.addEventListener("click", () => {
  index = 0;
  Score = 0;
  ResultElmt.style.display = "none";
  Types.style.display = "flex";
  fillElmt();
});

QuizGame();
