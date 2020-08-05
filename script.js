//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var score = 0;

//is there a way to randomize answers?

//Take this quiz and find out what sibling order you are most like
//Pick adjectives 
//scenerios based on adjectives 

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");
var q7a4 = document.getElementById("q7a4");

var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");
var q8a3 = document.getElementById("q8a3");
var q8a4 = document.getElementById("q8a4");


//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", oldestChild);
q1a2.addEventListener("click", middleChild);
q1a3.addEventListener("click", youngestChild);
q1a4.addEventListener("click", onlyChild);

q2a1.addEventListener("click", oldestChild);
q2a2.addEventListener("click", middleChild);
q2a3.addEventListener("click", youngestChild);
q2a4.addEventListener("click", onlyChild);

q3a1.addEventListener("click", oldestChild);
q3a2.addEventListener("click", middleChild);
q3a3.addEventListener("click", youngestChild);
q3a4.addEventListener("click", onlyChild);

q4a1.addEventListener("click", oldestChild);
q4a2.addEventListener("click", middleChild);
q4a3.addEventListener("click", youngestChild);
q4a4.addEventListener("click", onlyChild);

q5a1.addEventListener("click", oldestChild);
q5a2.addEventListener("click", middleChild);
q5a3.addEventListener("click", youngestChild);
q5a4.addEventListener("click", onlyChild);

q6a1.addEventListener("click", oldestChild);
q6a2.addEventListener("click", middleChild);
q6a3.addEventListener("click", youngestChild);
q6a4.addEventListener("click", onlyChild);

q7a1.addEventListener("click", oldestChild);
q7a2.addEventListener("click", middleChild);
q7a3.addEventListener("click", youngestChild);
q7a4.addEventListener("click", onlyChild);

q8a1.addEventListener("click", oldestChild);
q8a2.addEventListener("click", middleChild);
q8a3.addEventListener("click", youngestChild);
q8a4.addEventListener("click", onlyChild);

//#TODO: Define quiz functions here
function oldestChild(){
  score+=10;
  questionCount+=1;
  if (questionCount >= 8) {
    updateResult();
  }
  //alert("One point to oldest child")
}

function middleChild(){
  score+=20;
  questionCount+=1;
  if (questionCount >= 8) {
    updateResult();
  }
}

function youngestChild(){
  score+=30;
  questionCount+=1;
  if (questionCount >= 8) {
    updateResult();
  }
}

function onlyChild(){
  score+=40;
  questionCount+=1;
  if (questionCount >= 8) {
    updateResult();
  }
}

//#TODO: Calculate the results
var result = document.getElementById("result");

function updateResult(){
  if (score >= 80 && score <= 159) {
    result.innerHTML = "Oldest Sibling!";
  } else if (score >= 160 && score<= 159) {
    result.innerHTML = "Middle Sibling!";
  } else if (score >=16)
  
  
  
}
