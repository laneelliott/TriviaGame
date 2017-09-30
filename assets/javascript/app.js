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
	"Question": "How many square miles were destroyed in the Great Chicago Fire of 1871?",
	"Answer": "4",
	"Choices": {
		1: "2",
		2: "3",
		3: "4",
		4: "5"
	}
},
{
	"Question": "How many  NFL Championships have the Chicago Bears won? ",
	"Answer": "Nine",
	"Choices": {
		1: "Fine",
		2: "Seven",
		3: "Nine",
		4: "Eleven"
	}
},
{
	"Question": "How many Stanley Cups have the Chicago Blackhawks won?",
	"Answer": "Five",
	"Choices": {
		1: "None",
		2: "One",
		3: "Four",
		4: "Five"
	}
},
{
	"Question": "In what year was Chicago the host of The Century of Progress Worlds' Fair?",
	"Answer": "1933",
	"Choices": {
		1: "1928",
		2: "1931",
		3: "1932",
		4: "1933"
	}
},
{
	"Question": "Illinois leads all other US states in the amount of electricity that it generates from what type of fuel?",
	"Answer": "Nuclear Power",
	"Choices": {
		1: "Natural Gas",
		2: "Coal",
		3: "Nuclear Power",
		4: "Geo Thermal"
	}
},
{
	"Question": "The World's Columbian Exposition, held in Chicago in 1893, introduced what delicacy to the city?",
	"Answer": "Hot Dogs",
	"Choices": {
		1: "Pizza",
		2: "Popcorn",
		3: "Hot Dogs",
		4: "Pretzels"
	}
},
{
	"Question": "For what phenomenon is Chicago nicknamed \"the Windy City\"?",
	"Answer": "Politicians' bluster",
	"Choices": {
		1: "Wind off Lake Michigan",
		2: "Politicians' bluster",
		3: "Tall Ship at Navy Pier",
		4: "Quantity of harbors in Chicago"
	}
},
{
	"Question": "Some say the name 'Chicago' comes from a Native American term for what food?",
	"Answer": "Wild Onion",
	"Choices": {
		1: "Wild Onion",
		2: "Red Potato",
		3: "Lake Michigan whitefish",
		4: "Lily Toad"
	}
},
{
	"Question": "What famous physicist produced the world's first controlled nuclear reaction at the University of Chicago?",
	"Answer": "Enrico Fermi",
	"Choices": {
		1: "Robert Oppenheimer",
		2: "Felix Bloch",
		3: "Enrico Fermi",
		4: "Sabastian Tinnes"
	}
},
{
	"Question": "Chicago's Home Insurance Building is often credited as the nation's first skyscraper. How tall was it when completed in 1885?",
	"Answer": "Ten Stories",
	"Choices": {
		1: "Five Stories",
		2: "Eight Stories",
		3: "Ten Stories",
		4: "Fifteen Stories"
	}
}]

//Global Variables
var selectedTrivia = [];
var highScore = 0;
var correctNum;
var intervalId;
var time;
var currentArrayNum = 0;
var currentQuestionNum;
var currentAnswer;

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
				//console.log(selectedTrivia)
			}else{
				//repeat the while loop
			}
		}
	}
}

function nextQuestion(){
	console.log('next question function');
	stopTimer();
	time = 20;
	$('.time h4').html('Time Remaining '+time);
	//Populate the question row in html
	currentQuestionNum++;
	console.log("current array number "+currentArrayNum)
	displayQuestion(selectedTrivia[currentArrayNum]);
		//Start 30 second timer
		startTimer();
	currentArrayNum++;
	//console.log(currentArrayNum);
}

function displayQuestion(index){
	currentAnswer = trivia[index].Answer;
	$('#current-progress').html('Question '+ currentQuestionNum +'/10');
	$('.question h4').html(trivia[index].Question);
	$('.choices .text-center').empty();
	for (var i=1; i <=4; i++){
		$('.choices .text-center').append('<h3>'+ trivia[index].Choices[i] + '</h3>');
	}

	//console.log(trivia[index]);
	
}

function startTimer(){
	intervalId = setInterval(decrement, 1000);
}

function decrement(){
	//decrease time by 1
	time--;
	//display the time
	$('.time h4').html('Time Remaining '+time);
	if(time === 0 ){
		stopTimer()
		nextQuestion();
	}
}

function stopTimer(){
	clearInterval(intervalId);
}

function updateScores(){
	if(correctNum > highScore){
		highScore = correctNum;
	}
	$('#high-score').html('High Score: '+ highScore);
	$('#current-score').html('Current Score: '+ correctNum);
}

//Game Logic Function
function playGame(){
	//hide button
	$('.btn-play').hide();
	//variables
	correctNum = 0;
	currentQuestionNum = 0;
	currentArrayNum = 0;

	//Select 10 random numbers and add them to an array
	chooseQuestions();
	updateScores();
	nextQuestion();
			
	
	
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

//capture user guess
$(document).on('click', '.choices h3', function(){
	var userGuess = $(this).text()

	if(userGuess == currentAnswer){
		//console.log('you win')
		correctNum++;
		updateScores()
	} else {
		//console.log('you lose')
	}

	if(currentQuestionNum === 10){
		gameOver();
	}else{
		nextQuestion();
	}
})

function gameOver(){
	$('.choices').hide();
	$('.btn-play').show();
}

$('.btn-play').on('click', function(){
	$('.choices').show();
	playGame();
})







