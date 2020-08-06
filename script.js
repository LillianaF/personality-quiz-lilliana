//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var score = 0;

//is there a way to randomize answers?
//is there a way to grab all buttons by class by question and then link to other parts in the webpage

// i could do onclick for each category (oldest, youngest, etc.)

//if i had images as a click i would have to disable both the image and the button beneath
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

var button = document.getElementsByClassName("button");
var Q1 = document.getElementsByClassName("Q1");

//Q1.addEventListener("click", function(){
  //jump to another part in webpage
//})

//var old = document.getElementsByClassName("old");
//var middle = document.getElementsByClassName("middle");
//var young = document.getElementsByClassName("young");
//var only = document.getElementsByClassName("only");

//could i make a var with class for opacity

//var img = document.getElementById("plane");
//img.addEventListener("click", changeQ1);
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
  //alert("One point to middle child")
}

function youngestChild(){
  score+=30;
  questionCount+=1;
  if (questionCount >= 8) {
    updateResult();
  }
  //alert("One point to youngest child")
}

function onlyChild(){
  score+=40;
  questionCount+=1;
  if (questionCount >= 8) {
    updateResult();
  }
  //alert("One point to only child")
}

//#TODO: Calculate the results
var result = document.getElementById("result");

function updateResult(){
  if (score >= 80 && score <= 139) {
    result.innerHTML = "Oldest Sibling!";
  } else if (score >= 140 && score <= 199) {
    result.innerHTML = "Middle Sibling!";
  } else if (score >= 200 && score <= 259) {
    result.innerHTML = "Youngest Sibling!";
  } else if (score >= 260 && score <=320) {
    result.innerHTML = "No sibling! Only Child."
  }  
}

//#TODO: Restart the quiz (Extentsion 2)
var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);

function restartQuiz() {
  questionCount = 0;
  score = 0;
  result.innerHTML = "";
  enableQuestions();
//button.reset();
  //do not forget to enable questions again
//button.addEventListener("click", button.reset());
 // button.reset(); //a way to reset back to original cursor settings?
}//have to change the cursors back to normal, for the button i want pointer, that is what it is set to in css

//#TODO: Disable buttons after answered (Extentsion 3)
function changeQ1(){
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
  q1a1.style.cursor = "default";
  q1a2.style.cursor = "default";
  q1a3.style.cursor = "default";
  q1a4.style.cursor = "default";
//q1a1.style.opacity = "50%";
//img.style.opacity = "50%";
//  q1a2.style.opacity = "50%";
//  q1a3.style.opacity = "50%";
//  q1a4.style.opacity = "50%";
}

//maybe you just need to make sure it listens and the function does not matter
//maybe use an if statement in order to change the opacity
//if (q1a1.clicked === true) {
//  alert("button was clicked");
//}
//why doesn't my if statement work?

q1a1.addEventListener("click", changeQ1);
q1a2.addEventListener("click", changeQ1);
q1a3.addEventListener("click", changeQ1);
q1a4.addEventListener("click", changeQ1);

function changeQ2(){
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
  q2a1.style.cursor = "default";
  q2a2.style.cursor = "default";
  q2a3.style.cursor = "default";
  q2a4.style.cursor = "default";
}

q2a1.addEventListener("click", changeQ2);
q2a2.addEventListener("click", changeQ2);
q2a3.addEventListener("click", changeQ2);
q2a4.addEventListener("click", changeQ2);

function changeQ3(){
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
  q3a1.style.cursor = "default";
  q3a2.style.cursor = "default";
  q3a3.style.cursor = "default";
  q3a4.style.cursor = "default";
}

q3a1.addEventListener("click", changeQ3);
q3a2.addEventListener("click", changeQ3);
q3a3.addEventListener("click", changeQ3);
q3a4.addEventListener("click", changeQ3);

function changeQ4(){
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
  q4a1.style.cursor = "default";
  q4a2.style.cursor = "default";
  q4a3.style.cursor = "default";
  q4a4.style.cursor = "default";
}

q4a1.addEventListener("click", changeQ4);
q4a2.addEventListener("click", changeQ4);
q4a3.addEventListener("click", changeQ4);
q4a4.addEventListener("click", changeQ4);

function changeQ5(){
  q5a1.disabled = true;
  q5a2.disabled = true;
  q5a3.disabled = true;
  q5a4.disabled = true;
  q5a1.style.cursor = "default";
  q5a2.style.cursor = "default";
  q5a3.style.cursor = "default";
  q5a4.style.cursor = "default";
}

q5a1.addEventListener("click", changeQ5);
q5a2.addEventListener("click", changeQ5);
q5a3.addEventListener("click", changeQ5);
q5a4.addEventListener("click", changeQ5);

function changeQ6(){
  q6a1.disabled = true;
  q6a2.disabled = true;
  q6a3.disabled = true;
  q6a4.disabled = true;
  q6a1.style.cursor = "default";
  q6a2.style.cursor = "default";
  q6a3.style.cursor = "default";
  q6a4.style.cursor = "default";
}

q6a1.addEventListener("click", changeQ6);
q6a2.addEventListener("click", changeQ6);
q6a3.addEventListener("click", changeQ6);
q6a4.addEventListener("click", changeQ6);

function changeQ7(){
  q7a1.disabled = true;
  q7a2.disabled = true;
  q7a3.disabled = true;
  q7a4.disabled = true;
  q7a1.style.cursor = "default";
  q7a2.style.cursor = "default";
  q7a3.style.cursor = "default";
  q7a4.style.cursor = "default";
}

q7a1.addEventListener("click", changeQ7);
q7a2.addEventListener("click", changeQ7);
q7a3.addEventListener("click", changeQ7);
q7a4.addEventListener("click", changeQ7);

function changeQ8(){
  q8a1.disabled = true;
  q8a2.disabled = true;
  q8a3.disabled = true;
  q8a4.disabled = true;
  q8a1.style.cursor = "default";
  q8a2.style.cursor = "default";
  q8a3.style.cursor = "default";
  q8a4.style.cursor = "default";
}

q8a1.addEventListener("click", changeQ8);
q8a2.addEventListener("click", changeQ8);
q8a3.addEventListener("click", changeQ8);
q8a4.addEventListener("click", changeQ8);

function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
  q5a1.disabled = false;
  q5a2.disabled = false;
  q5a3.disabled = false;
  q5a4.disabled = false;
  q6a1.disabled = false;
  q6a2.disabled = false;
  q6a3.disabled = false;
  q6a4.disabled = false;
  q7a1.disabled = false;
  q7a2.disabled = false;
  q7a3.disabled = false;
  q7a4.disabled = false;
  q8a1.disabled = false;
  q8a2.disabled = false;
  q8a3.disabled = false;
  q8a4.disabled = false;
  q1a1.style.opacity = "100%";
  q1a2.style.opacity = "100%";
  q1a3.style.opacity = "100%";
  q1a4.style.opacity = "100%";
  q2a1.style.opacity = "100%";
  q2a2.style.opacity = "100%";
  q2a3.style.opacity = "100%";
  q2a4.style.opacity = "100%";
  q3a1.style.opacity = "100%";
  q3a2.style.opacity = "100%";
  q3a3.style.opacity = "100%";
  q3a4.style.opacity = "100%";
  q4a1.style.opacity = "100%";
  q4a2.style.opacity = "100%";
  q4a3.style.opacity = "100%";
  q4a4.style.opacity = "100%";
  q5a1.style.opacity = "100%";
  q5a2.style.opacity = "100%";
  q5a3.style.opacity = "100%";
  q5a4.style.opacity = "100%";
  q6a1.style.opacity = "100%";
  q6a2.style.opacity = "100%";
  q6a3.style.opacity = "100%";
  q6a4.style.opacity = "100%";
  q7a1.style.opacity = "100%";
  q7a2.style.opacity = "100%";
  q7a3.style.opacity = "100%";
  q7a4.style.opacity = "100%";
  q8a1.style.opacity = "100%";
  q8a2.style.opacity = "100%";
  q8a3.style.opacity = "100%";
  q8a4.style.opacity = "100%";
}

//Change Opacity 
/*
function oldestOpacity() {
  middle.style.opacity = "50%";
  young.style.opacity = "50%";
  only.style.opacity = "50%";
}*/

//q1a1.style.opacity = "50%";
//img.style.opacity = "50%";
//  q1a2.style.opacity = "50%";
//  q1a3.style.opacity = "50%";
//  q1a4.style.opacity = "50%";

q1a1.addEventListener("click", function(){
  q1a2.style.opacity = "50%";
  q1a3.style.opacity = "50%";
  q1a4.style.opacity = "50%";
});
q1a2.addEventListener("click", function(){
  q1a1.style.opacity = "50%";
  q1a3.style.opacity = "50%";
  q1a4.style.opacity = "50%";
});
q1a3.addEventListener("click", function(){
  q1a1.style.opacity = "50%";
  q1a2.style.opacity = "50%";
  q1a4.style.opacity = "50%";
});
q1a4.addEventListener("click", function(){
  q1a1.style.opacity = "50%";
  q1a2.style.opacity = "50%";
  q1a3.style.opacity = "50%";
});

q2a1.addEventListener("click", function(){
  q2a2.style.opacity = "50%";
  q2a3.style.opacity = "50%";
  q2a4.style.opacity = "50%";
});
q2a2.addEventListener("click", function(){
  q2a1.style.opacity = "50%";
  q2a3.style.opacity = "50%";
  q2a4.style.opacity = "50%";
});
q2a3.addEventListener("click", function(){
  q2a1.style.opacity = "50%";
  q2a2.style.opacity = "50%";
  q2a4.style.opacity = "50%";
});
q2a4.addEventListener("click", function(){
  q2a1.style.opacity = "50%";
  q2a2.style.opacity = "50%";
  q2a3.style.opacity = "50%";
});

q3a1.addEventListener("click", function(){
  q3a2.style.opacity = "50%";
  q3a3.style.opacity = "50%";
  q3a4.style.opacity = "50%";
});
q3a2.addEventListener("click", function(){
  q3a1.style.opacity = "50%";
  q3a3.style.opacity = "50%";
  q3a4.style.opacity = "50%";
});
q3a3.addEventListener("click", function(){
  q3a1.style.opacity = "50%";
  q3a2.style.opacity = "50%";
  q3a4.style.opacity = "50%";
});
q3a4.addEventListener("click", function(){
  q3a1.style.opacity = "50%";
  q3a2.style.opacity = "50%";
  q3a3.style.opacity = "50%";
});

q4a1.addEventListener("click", function(){
  q4a2.style.opacity = "50%";
  q4a3.style.opacity = "50%";
  q4a4.style.opacity = "50%";
});
q4a2.addEventListener("click", function(){
  q4a1.style.opacity = "50%";
  q4a3.style.opacity = "50%";
  q4a4.style.opacity = "50%";
});
q4a3.addEventListener("click", function(){
  q4a1.style.opacity = "50%";
  q4a2.style.opacity = "50%";
  q4a4.style.opacity = "50%";
});
q4a4.addEventListener("click", function(){
  q4a1.style.opacity = "50%";
  q4a2.style.opacity = "50%";
  q4a3.style.opacity = "50%";
});

q5a1.addEventListener("click", function(){
  q5a2.style.opacity = "50%";
  q5a3.style.opacity = "50%";
  q5a4.style.opacity = "50%";
});
q5a2.addEventListener("click", function(){
  q5a1.style.opacity = "50%";
  q5a3.style.opacity = "50%";
  q5a4.style.opacity = "50%";
});
q5a3.addEventListener("click", function(){
  q5a1.style.opacity = "50%";
  q5a2.style.opacity = "50%";
  q5a4.style.opacity = "50%";
});
q5a4.addEventListener("click", function(){
  q5a1.style.opacity = "50%";
  q5a2.style.opacity = "50%";
  q5a3.style.opacity = "50%";
});

q6a1.addEventListener("click", function(){
  q6a2.style.opacity = "50%";
  q6a3.style.opacity = "50%";
  q6a4.style.opacity = "50%";
});
q6a2.addEventListener("click", function(){
  q6a1.style.opacity = "50%";
  q6a3.style.opacity = "50%";
  q6a4.style.opacity = "50%";
});
q6a3.addEventListener("click", function(){
  q6a1.style.opacity = "50%";
  q6a2.style.opacity = "50%";
  q6a4.style.opacity = "50%";
});
q6a4.addEventListener("click", function(){
  q6a1.style.opacity = "50%";
  q6a2.style.opacity = "50%";
  q6a3.style.opacity = "50%";
});

q7a1.addEventListener("click", function(){
  q7a2.style.opacity = "50%";
  q7a3.style.opacity = "50%";
  q7a4.style.opacity = "50%";
});
q7a2.addEventListener("click", function(){
  q7a1.style.opacity = "50%";
  q7a3.style.opacity = "50%";
  q7a4.style.opacity = "50%";
});
q7a3.addEventListener("click", function(){
  q7a1.style.opacity = "50%";
  q7a2.style.opacity = "50%";
  q7a4.style.opacity = "50%";
});
q7a4.addEventListener("click", function(){
  q7a1.style.opacity = "50%";
  q7a2.style.opacity = "50%";
  q7a3.style.opacity = "50%";
});

q8a1.addEventListener("click", function(){
  q8a2.style.opacity = "50%";
  q8a3.style.opacity = "50%";
  q8a4.style.opacity = "50%";
});
q8a2.addEventListener("click", function(){
  q8a1.style.opacity = "50%";
  q8a3.style.opacity = "50%";
  q8a4.style.opacity = "50%";
});
q8a3.addEventListener("click", function(){
  q8a1.style.opacity = "50%";
  q8a2.style.opacity = "50%";
  q8a4.style.opacity = "50%";
});
q8a4.addEventListener("click", function(){
  q8a1.style.opacity = "50%";
  q8a2.style.opacity = "50%";
  q8a3.style.opacity = "50%";
});



