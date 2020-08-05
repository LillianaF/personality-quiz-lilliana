//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var oldestScore = 0;
var middleScore = 0;
var youngestScore = 0;
var onlyScore = 0;

//is there a way to randomize answers?

//Take this quiz and find out what sibling order you are most like
//Pick adjectives 
//scenerios based on adjectives 

//1
//Your flight going home just got canceled. What do you do?
//Oldest-Immediately book the next flight
//Middle-Wait around and hope for the best
//Youngest-Stay on vacation longer
//Only-Demand to speak with the head of the airline company

//2
//You are planning a picnic with your friends. What do you do?
//Oldest-Plan the location and bring food for everyone
//Middle-Bring some snacks and hope no one is allergic to them
//Youngest-Just bring yourself
//Only-Just bring food for yourself

//3
//You have an assignment due next week. When do you do it?
//Do it right away
//Do it gradually throughout the week
//Do it the night before it is due
//Hire a tutor to do it for you

//4
//Your boat crashes, leaving you stranded on an island. What do you do?
//Find food, shelter, and come up with a plan to get off the island
//Sit and hope an airplane or boat finds you
//Build a shelter and plan to live there
//Give up on life and cry

//5
//You want to go to your friends house, but your parents will not let you. What do you do?
//Listen to what your parents say and stay home
//Make different plans but do not tell your parents
//Sneak out to friend's house
//Invite your friend over to your house

//6
//Your car breaks down in the middle of the road. What do you do?
//Immediately call for help
//Try to fix it yourself and then call for help
//Fix it yourself
//Sit in your car upset and cry

//7
//You are in a group project. What role do you take?
//Takes charge of the entire project
//Do all the work 
//Do your work at the very last minute
//Do you part, but nothing more

//8
//You get in a big fight with a family member. Who is it with?
//Your sibling(s)
//No fight, you are the peacemaker
//Anyone who will pick a fight
//Your parents

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
  
}

function middleChild(){
  
}

function youngestChild(){
  
}

function onlyChild(){
  
}