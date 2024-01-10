let q_no = document.getElementById("qno");
let score = document.getElementById("score");
let Question = document.getElementById("question");
let option1 = document.getElementById("op1");
let option2 = document.getElementById("op2");
let option3 = document.getElementById("op3");
let option4 = document.getElementById("op4");
let btn = document.getElementById("next");
let q = 0;
let scr = 0;
let count = 1;

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
let text = document.getElementById("text");

btn.onclick = next;
//array containing questions of the quiz
let questionarr = [
  {
    number: 1,
    question: "What is console.log(3 + '4') ?",
    options: ["34(as string)", 34, "7(as string)", 7],
    corans: "34(as string)",
  },
  {
    number: 2,
    question: "What is the output of console.log(this) in nodejs ?",
    options: ["Window", "global object", "blank", "{}"],
    corans: "{}",
  },
  {
    number: 3,
    question: "Javascript is an _______ language?",
    options: ["Object-oriented", "Object-based", "Procedural", "None"],
    corans: "Object-oriented",
  },
  {
    number: 4,
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    options: ["var", "let", "both above", "None"],
    corans: "both above",
  },
  {
    number: 5,
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    options: ["getElementById()", "getElementByClassName()", "Both", "None"],
    corans: "Both",
  },
  {
    number: 6,
    question:
      "Which of the following can be used to display data in some form using Javascript?",
    options: [
      "Document.write()",
      "Window.alert()",
      "console.log()",
      "all above",
    ],
    corans: "all above",
  },
  {
    number: 7,
    question: "How can a datatype be declared to be a constant type?",
    options: ["var", "let", "const", "none"],
    corans: "const",
  },
  {
    number: 8,
    question:
      "What keyword is used to declare an asynchronous function in Javascript?",
    options: ["async", "await", "setTimeout", "none"],
    corans: "async",
  },
  {
    number: 9,
    question: "How to stop an interval timer in Javascript?",
    options: ["clearTimer", "clearInterval", "stopInterval", "none"],
    corans: "clearInterval",
  },
  {
    number: 10,
    question:
      "Which built-in method returns the character at the specified index?",
    options: ["characterAt()", "getCharAt()", "charAt()", "none"],
    corans: "charAt()",
  },
];
// Function to declare wrong option
let wrongopt = (x) => {
  x.style.backgroundColor = "#F78CA2";
  text.innerText = "<Its wrong Bro ❌/>.. <try again>";
};
// Function to declare correct option
let correctopt = (x) => {
  x.style.backgroundColor = "#C1F2B0";
  scr += 1;
  score.innerText = scr;
  text.innerText = "<You got it correct 😎/>..";
};
//Function for updating question , options 
const update = (Q) => {
  q = Q.number;
  q_no.innerText = q;
  Question.innerText = Q.question;
  option1.innerText = Q.options[0];
  option2.innerText = Q.options[1];
  option3.innerText = Q.options[2];
  option4.innerText = Q.options[3];

  if (Q.options[0] == Q.corans) {
    div1.onclick = () => correctopt(div1);
    div2.onclick = () => wrongopt(div2);
    div3.onclick = () => wrongopt(div3);
    div4.onclick = () => wrongopt(div4);
  } else if (Q.options[1] == Q.corans) {
    div2.onclick = () => correctopt(div2);
    div1.onclick = () => wrongopt(div1);
    div3.onclick = () => wrongopt(div3);
    div4.onclick = () => wrongopt(div4);
  } else if (Q.options[2] == Q.corans) {
    div3.onclick = () => correctopt(div3);
    div2.onclick = () => wrongopt(div2);
    div1.onclick = () => wrongopt(div1);
    div4.onclick = () => wrongopt(div4);
  } else {
    div4.onclick = () => correctopt(div4);
    div2.onclick = () => wrongopt(div2);
    div3.onclick = () => wrongopt(div3);
    div1.onclick = () => wrongopt(div1);
  }
  text.innerText = "";
};
update(questionarr[0]);
// function to restart
const Restart = () => {
  scr = 0;
  score.innerText = scr;
  update(questionarr[0]);
  count = 1;
  btn.innerText = "Next";
  btn.onclick = next;
};
//Function to move to next question and declaring the end of the game

function next() {
  // console.log(count)
  if (count <= 9) {
    update(questionarr[count]);
    count++;
  } else if (scr == 10) {
    text.innerText = "<You got all correct! 🥂/>..";
    btn.innerText = "Restart";
    btn.onclick = Restart;
  } else {
    text.innerText = "<The quiz ends here!🎉 well played 💥/>..";
    btn.innerText = "Restart";
    btn.onclick = Restart;
  }

  div1.style.backgroundColor = "#fff";
  div2.style.backgroundColor = "#fff";
  div3.style.backgroundColor = "#fff";
  div4.style.backgroundColor = "#fff";
}
