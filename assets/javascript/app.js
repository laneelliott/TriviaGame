//Trivia Object
var trivia = [{
	"Question": "How many square miles is Chicago?",
	"Answer": "237 square miles",
	"Choices": {
		1: "197 square miles",
		2: "217 square miles",
		3: "237 square miles",
		4: "257 square miles"
	}
},
{
	"Question": "How many residents live in Chicago?",
	"Answer": "2.7 million",
	"Choices": {
		1: "2 million",
		2: "2.3 million",
		3: "2.5 million",
		4: "2.7 million"
	}
},
{
	"Question": "How many residents live in Chicago?",
	"Answer": "2.7 million",
	"Choices": {
		1: "2 million",
		2: "2.3 million",
		3: "2.5 million",
		4: "2.7 million"
	}
},
{
	"Question": "How many residents live in Chicago?",
	"Answer": "2.7 million",
	"Choices": {
		1: "2 million",
		2: "2.3 million",
		3: "2.5 million",
		4: "2.7 million"
	}
},
{
	"Question": "How many residents live in Chicago?",
	"Answer": "2.7 million",
	"Choices": {
		1: "2 million",
		2: "2.3 million",
		3: "2.5 million",
		4: "2.7 million"
	}
},
{
	"Question": "How many residents live in Chicago?",
	"Answer": "2.7 million",
	"Choices": {
		1: "2 million",
		2: "2.3 million",
		3: "2.5 million",
		4: "2.7 million"
	}
},
{
	"Question": "How many residents live in Chicago?",
	"Answer": "2.7 million",
	"Choices": {
		1: "2 million",
		2: "2.3 million",
		3: "2.5 million",
		4: "2.7 million"
	}
},
{
	"Question": "How many residents live in Chicago?",
	"Answer": "2.7 million",
	"Choices": {
		1: "2 million",
		2: "2.3 million",
		3: "2.5 million",
		4: "2.7 million"
	}
},
{
	"Question": "How many residents live in Chicago?",
	"Answer": "2.7 million",
	"Choices": {
		1: "2 million",
		2: "2.3 million",
		3: "2.5 million",
		4: "2.7 million"
	}
},
{
	"Question": "How many residents live in Chicago?",
	"Answer": "2.7 million",
	"Choices": {
		1: "2 million",
		2: "2.3 million",
		3: "2.5 million",
		4: "2.7 million"
	}
}]

//Global Variables
var selectedTrivia = [];
var highScore;

//Functions
function chooseQuestions(){
	selectedTrivia = [];
	for (var i=0; i < 10; i++){
		var newNum = false;
		while(!newNum){
			var number = Math.floor(Math.random() * trivia.length);
			if(selectedTrivia.indexOf(number) === -1){
				selectedTrivia.push(number);
				newNum = true;
			}else{
				//repeat the while loop
			}
		}
	}
}

function displayQuestion(index){
	console.log(trivia[index]);
}

//Game Logic Function
function playGame(){
	//variables
	var correctNum = 0;
	var currentQuestionNum = 1;

	//Select 10 random numbers and add them to an array
	chooseQuestions();
	//Begin a For Loop for 10 questions
	for(var i = 0; i < 10; i++){
		displayQuestion(selectedTrivia[i]);
		//Populate the question row in html
		//Start 30 second timer
		//if timer runs out
			//show answer
			//Alert to incorrect answer
			//Wait 5 Seconds then next question
		//capture user guess
		//if user guess is correct
			//show answer
			//alert to correct answer
			//increase correct answer counter
			//Wait 5 Seconds then next question
		//if user guess is incorrect
			//show answer
			//alert to correct answer
			//Wait 5 Seconds then next question
		//update current question counter
	}

}

playGame();