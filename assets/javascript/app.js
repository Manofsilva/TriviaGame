
//Remove The Start Button When Starting The Game
$('#start').on('click',function(){
    $('#start').remove();
})

// Variables to setup Questions with an Array
var questions = [{
    question: "Who is the biggest polluter in the world?",
    answers: ["China", "Japan", "USA", "Russia"],
    correctAnswer: "China",
    image:
}, {
    question: "How many years does it take for a plastic water bottle to degrade?",
    answers: ["No less than 50 years", "No less than 1000 years", "No less than 450 years", "Nearly 10000 years"],
    correctAnswer: "No  less than 450 years",
    image:
}, {
    question: "Every year an estimated _____ people die from pollution. fill in the blank?",
    answers: ["2.4 million", "8 million", "5 million", "3.2 million"],
    correctAnswer: "2.4 million",
    image:
}, {
    question: "What is the MOST threatening type of pullution in the world?",
    answers: ["Littering", "Noise", "Water", "Air"],
    correctAnswer: "Air",
    image:
}, {
    question: "How many people are affected by pollution around the world?",
    answers: ["100 million", "50 million", '300 million', "15 million"],
    correctAnswer: "100 million",
    image:
}, {
    question: "What is an example of point source pollution?",
    answers: ["Chemical runoff from roads", "Beach trash that gets into the water", "Sewage pipes draining into bodies of water", "Fertilizer from lawns seeping into groundwater"],
    correctAnswer: "Sewage pipes draining into bodies of water",
    image:
}, {
    question: "What represents 30% of all litter in the USA?",
    answers: ["Food waste", "Food packages", "Bottles", "Cigarette butts"],
    correctAnswer: "Cigarette butts", 
    image:
}];

// Setup of the Game Questions through methods

var game = {
    questions:questions,
    // keep track of what question we are currently on
    currentQuestion:0,
    counter: 30,
    correct:0,
    incorrect:0,
    // Setting up a countdown method
    countDown: function(){

    },
    // Setting up a loadQuestion method
    loadQuestion: function(){

    },
    // Setting up a nextQuestion method
    nextQuestion: function(){

    },
    // Setting up a timeUp method
    timeUp: function(){

    },
    // Setting up a results method
    results: function(){

    },
    // Setting up a clicked method
    clicked: function(){

    }, 
    // Setting up a answeredCorrectly method
    answeredCorrectly: function(){

    },
    // Setting up a answeredIncorrectly method
    answeredIncorrectly: function(){

    },
    // Setting up a reset method
    reset: function(){

    }
}