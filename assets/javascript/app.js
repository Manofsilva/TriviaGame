
//Remove The Start Button When Starting The Game and Also Load The Questions
$('#start').on('click',function(){
    $('#start').remove();
    game.loadQuestion();
    
})

// Onclick Event To Find Out If Answer is Correct or Not
$(document).on('click', '.answer-button', function(e){
    game.clicked(e);
})

// Onclick Event To Reset The Game
$(document).on('click', '#reset', function(){
    game.reset();
})

// Variables to setup Questions with an Array
var questions = [{
    question: "Who is the biggest polluter in the world?",
    answers: ["China", "Japan", "USA", "Russia"],
    correctAnswer: "China",
    image: $("#picture").attr("src", "assets/image/China-Pollution.jpg")
}, {
    question: "How many years does it take for a plastic water bottle to degrade?",
    answers: ["No less than 50 years", "No less than 1000 years", "No less than 450 years", "Nearly 10000 years"],
    correctAnswer: "No  less than 450 years",
    image: ""
}, {
    question: "Every year an estimated _____ people die from pollution. fill in the blank?",
    answers: ["2.4 million", "8 million", "5 million", "3.2 million"],
    correctAnswer: "2.4 million",
    image: ""
}, {
    question: "What is the MOST threatening type of pullution in the world?",
    answers: ["Littering", "Noise", "Water", "Air"],
    correctAnswer: "Air",
    image: ""
}, {
    question: "How many people are affected by pollution around the world?",
    answers: ["100 million", "50 million", '300 million', "15 million"],
    correctAnswer: "100 million",
    image: ""
}, {
    question: "What is an example of point source pollution?",
    answers: ["Chemical runoff from roads", "Beach trash that gets into the water", "Sewage pipes draining into bodies of water", "Fertilizer from lawns seeping into groundwater"],
    correctAnswer: "Sewage pipes draining into bodies of water",
    image: ""
}, {
    question: "What represents 30% of all litter in the USA?",
    answers: ["Food waste", "Food packages", "Bottles", "Cigarette butts"],
    correctAnswer: "Cigarette butts", 
    image: ""
}];

// Setup of the Game Questions through methods

var game = {
    questions:questions,
    // keep track of what question we are currently on
    currentQuestion:0,
    counter: 10,
    correct:0,
    incorrect:0,
    Unanswered: 0,
    // Setting up a countdown method in charge of the timer
    countDown: function(){
        game.counter--;
    // Decrease The Counter on the Screen
        $('#counter').html(game.counter);
    // Find out If the Counter Has Run Out or Not
        if(game.counter<=0){
            console.log('TIMES UP!');
            game.timeUp();
        }
    },
    // Setting up a loadQuestion method making sure that the questions is being loaded to the page
    loadQuestion: function(){
    // Setting Up The Timer In This Function
    timer = setInterval(game.countDown, 1000);
    // Create a Counter on The Document
    $('#subwrapper').html("<h2 id='counter'>10</h2>");
    // Post the Question to The Page 
    $('#subwrapper').append('<h2>' + questions[game.currentQuestion].question + '</h2>');
    // The Following Will Make Sure To Post The Answers To The Page Utilizing a For Loop
    for (let i = 0; i < questions[game.currentQuestion].answers.length; i++){
    // Making Sure To Add The Buttons Here
        $('#subwrapper').append('<button class= "answer-button" id ="button-'+i+'" data-name="' + questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>'); 
        }
    },
    // Setting up a nextQuestion method
    nextQuestion: function(){
        game.counter = 10;
        $('#counter').html(game.counter);
        // Set Up So That I Don't Loop Over Same Question
        game.currentQuestion++;
        game.loadQuestion();
    },
    // Setting up a timeUp method
    timeUp: function(){
        clearInterval(timer);
        // Have Something for the Unanswered Questions
        game.Unanswered++;
        // Set This So That Subwrapper Tells Us We've Run Out Of Time
        $('#subwrapper').html('<h2>OUT OF TIME!</H2>');
        // What The Correct Answer Would Have Been
        $('#subwrapper').append('<h3>The Correct Answer Was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        // Make Sure If It Was Final Question
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000);
        } else {
            setTimeout(game.nextQuestion, 3*1000);
        }
    },
    // Setting up a Results Method So That It Shows Whenever We Hit The Last Question
    results: function(){
        clearInterval(timer);
        $('#subwrapper').html("<h2>ALL DONE!</h2>");
        // For Correct
        $('#subwrapper').append("<h3>Correct: " + game.correct+"</h3>");
        // For Incorrect
        $('#subwrapper').append("<h3>Incorrect: " + game.incorrect+"</h3>");
        // Have Something For Unanswered
        $('#subwrapper').append("<h3>Unanswered: " + game.Unanswered+"</h3>");
        $('#subwrapper').append("<button id ='reset'>Reset</button>");
    },
    // Setting up a clicked method
    clicked: function(e){
    //Make Sure That The Timer Isn't Running After Button Is Clicked
        clearInterval(timer);
        // If The Button Clicked Is Correct, Let User Know Otherwise Let User Know It Was Incorrect
        
        if($(e.target).data("name") == questions[game.currentQuestion].correctAnswer){
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }
    }, 
    // Setting up a answeredCorrectly method
    answeredCorrectly: function(){
        console.log('YOU GOT IT!');
        // Make Sure That This Method Also Clears The Timer
        clearInterval(timer);
        // And Counts If It Is Correct
        game.correct++;

        
        // Write To Document If It Was Correct
        $('#subwrapper').html('<h2>YOU GOT IT RIGHT!</h2>');
        // Add Something That Takes Us To The Next Question or Determines If In The Last Section and Takes Us To The Results Page, Wait 5 Seconds
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000);
        } else {
            setTimeout(game.nextQuestion, 3*1000);
        }
    },
    // Setting up a answeredIncorrectly method
    answeredIncorrectly: function(){
        console.log('WRONG!');
        // Make Sure That This Method Also Clears The Timer
        clearInterval(timer);
        // And Counts If It Is InCorrect
        game.incorrect++;
        // Write To Document If It Was Correct
        $('#subwrapper').html('<h2>YOU GOT IT WRONG!</h2>');
        // What The Correct Answer Would Have Been
        $('#subwrapper').append('<h3>The Correct Answer Was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        // Add Something That Takes Us To The Next Question or Determines If In The Last Section and Takes Us To The Results Page, Wait 5 Seconds
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000);
        } else {
            setTimeout(game.nextQuestion, 3*1000);
        }
    },
    // Setting up a reset method
    reset: function(){
        // Have Something Set Up To Go Back To The Beginning
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.Unanswered = 0;
        game.loadQuestion();

    }
}