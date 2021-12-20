var mainDiv = ["#main-h1", "#main-p", "#main-btn"]
var time= 75
var score = "50"
var startButton = document.querySelector("#start-btn")
var questions = ["question1", "question2", "question3", "question4","question5"]
var qContent = [
    {
    id: 1,
    q: "Commonly used data types DO Not Include:",
    rAnswer:"3. alerts",
    wAnswer:["2. booleans", "1. strings", "4.numbers"],
    },
    {
    id: 2 ,
    q: "The condidion in an if / else statmenet is enclosed with ______.",
    rAnswer: "3. parenthesis",
    wAnswer: ["1. quotes", "2. curly brackets", "4. square brackets"],
    },
    {
    id: 3,
    q: "Arrays in JavaScript can be used to store ______.",
    rAnswer: "4. all of the above",
    wAnswer:["1. number and strings", "2. other arrays", "3. booleans"],
    },
    {
    id: 4,
    q: "String values must be enclosed withint ______ when being assigned to variables.",
    rAnswer: "3. quotes",
    wAnswer: ["1. commas", "2. curly brackets","4. parenthesis"],
    },
    {
    id: 5,
    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    rAnswer: "4. console.log()",
    wAnswer: ["1. JavaScript", "2. terminal/bash","3. for loops"],
}]
var main = document.querySelector("#main")
var emptyMain = function(){
    for (i = 0; i < mainDiv.length; i++){
    console.log(i)
    if(i < 2){
    var mainInfo = document.querySelector(mainDiv[i])
    }
    else{
    var removeMainH1 = document.querySelector("#main-h1");
    var removeMainP = document.querySelector("#main-p");
    var removeMainBtn = document.querySelector("#main-btn")
    removeMainBtn.remove()
    removeMainH1.remove()
    removeMainP.remove()
    }
}
}
var emptyQuestion = function(){
    for (i = 0; i < mainDiv.length; i++){
    console.log(i)
    if(i < 2){
    var mainInfo = document.querySelector(mainDiv[i])
    }
    else{
    var removeMainH1 = document.querySelector(".main-h1");
    var removeMainBtn = document.querySelector(".main-btn");
    var removeFooter = document.querySelector("footer");
    removeMainBtn.remove()
    removeFooter.remove()
    removeMainH1.remove()
    }
}
}
startButton.addEventListener("click", function(){
    question1()
});
var wrongAnswer = function() {
    score = score -10
    var wrong = document.createElement("footer")
    wrong.id = "wrong"
    wrong.textContent= "wrong!!!"
    main.append(wrong)
}
var correctAnswer = function() {
    var correct = document.createElement("footer")
    correct.id = "correct"
    correct.textContent= "correct!!!"
    main.append(correct)
}
var question1 = function(){
    emptyMain()
    var questionDiv = document.createElement("div")
    questionDiv.className = "main-h1"
    main.append(questionDiv)
    var answerDiv = document.createElement("div")
    answerDiv.className = "main-btn"
    answerDiv.id = "answer-div"
    main.append(answerDiv)
    var question1= document.createElement("h1")
    question1.textContent = qContent[0].q
    var answer1 = document.createElement("button");
    answer1.id="wrong-0"
    answer1.className ="btn";
    answer1.textContent = qContent[0].wAnswer[1];
    var answer2 = document.createElement("button");
    answer2.id="wrong-1"
    answer2.className ="btn";
    answer2.textContent = qContent[0].wAnswer[0];
    questionDiv.append(question1)
    var answer3 = document.createElement("button");
    answer3.id="right"
    answer3.className ="btn";
    answer3.textContent = qContent[0].rAnswer;
    var answer4 = document.createElement("button");
    answer4.id="wrong-2"
    answer4.className ="btn";
    answer4.textContent = qContent[0].wAnswer[2];
    answerDiv.append(answer1)
    answerDiv.append(answer2)
    answerDiv.append(answer3)
    answerDiv.append(answer4)
     var correctAnswerClicked = document.querySelector("#right")
    correctAnswerClicked.addEventListener("click", function(){
        if(correctAnswerClicked){
            correctAnswer()
            question2()
        }
    })
    for (i=0; i<=2; i++){
    var wrongAnswerClicked = document.querySelector("#wrong-" + i)
    wrongAnswerClicked.addEventListener("click", function(){
    if (wrongAnswerClicked){
    wrongAnswer()
    question2()
    }
    else{
    }
    })
    }
};
var question2 = function(){
    emptyQuestion()
    var questionDiv = document.createElement("div")
    questionDiv.className = "main-h1"
    main.append(questionDiv)
    var answerDiv = document.createElement("div")
    answerDiv.className = "main-btn"
    answerDiv.id = "answer-div"
    main.append(answerDiv)
    var question1= document.createElement("h1")
    question1.textContent = qContent[1].q
    var answer1 = document.createElement("button");
    answer1.id="wrong-0"
    answer1.className ="btn";
    answer1.textContent = qContent[1].wAnswer[0];
    var answer2 = document.createElement("button");
    answer2.id="wrong-1"
    answer2.className ="btn";
    answer2.textContent = qContent[1].wAnswer[1];
    questionDiv.append(question1)
    var answer3 = document.createElement("button");
    answer3.id="right"
    answer3.className ="btn";
    answer3.textContent = qContent[1].rAnswer;
    var answer4 = document.createElement("button");
    answer4.id="wrong-2"
    answer4.className ="btn";
    answer4.textContent = qContent[1].wAnswer[2];
    answerDiv.append(answer1)
    answerDiv.append(answer2)
    answerDiv.append(answer3)
    answerDiv.append(answer4)
    var correctAnswerClicked = document.querySelector("#right")
    correctAnswerClicked.addEventListener("click", function(){
        if(correctAnswerClicked){
            correctAnswer()
            question3()
        }
    })
    for (i=0; i<=2; i++){
    var wrongAnswerClicked = document.querySelector("#wrong-" + i)
    wrongAnswerClicked.addEventListener("click", function(){
    if (wrongAnswerClicked){
    wrongAnswer()
    question3
    }
    else{
    }
    })
    }
};
var question3 = function(){
    emptyQuestion()
    var questionDiv = document.createElement("div")
    questionDiv.className = "main-h1"
    main.append(questionDiv)
    var answerDiv = document.createElement("div")
    answerDiv.className = "main-btn"
    answerDiv.id = "answer-div"
    main.append(answerDiv)
    var question1= document.createElement("h1")
    question1.textContent = qContent[2].q
    var answer1 = document.createElement("button");
    answer1.id="wrong-0"
    answer1.className ="btn";
    answer1.textContent = qContent[2].wAnswer[0];
    var answer2 = document.createElement("button");
    answer2.id="wrong-1"
    answer2.className ="btn";
    answer2.textContent = qContent[2].wAnswer[1];
    questionDiv.append(question1)
    var answer3 = document.createElement("button");
    answer3.id="wrong-2"
    answer3.className ="btn";
    answer3.textContent = qContent[2].wAnswer[2];
    var answer4 = document.createElement("button");
    answer4.id="right"
    answer4.className ="btn";
    answer4.textContent = qContent[2].rAnswer;
    answerDiv.append(answer1)
    answerDiv.append(answer2)
    answerDiv.append(answer3)
    answerDiv.append(answer4)
    var correctAnswerClicked3 = document.querySelector("#right")
    correctAnswerClicked3.addEventListener("click", function(){
        if(correctAnswerClicked3){
            correctAnswer()
            question4()
        }
    })
    for (i=0; i<=2; i++){
    var wrongAnswerClicked = document.querySelector("#wrong-" + i)
    wrongAnswerClicked.addEventListener("click", function(){
    if (wrongAnswerClicked){
    wrongAnswer()
    question4()
    }
    else{
    }
    })
    }
};
var question4 = function(){
    emptyQuestion()
    var questionDiv = document.createElement("div")
    questionDiv.className = "main-h1"
    main.append(questionDiv)
    var answerDiv = document.createElement("div")
    answerDiv.className = "main-btn"
    answerDiv.id = "answer-div"
    main.append(answerDiv)
    var question1= document.createElement("h1")
    question1.textContent = qContent[3].q
    var answer1 = document.createElement("button");
    answer1.id="wrong-0"
    answer1.className ="btn";
    answer1.textContent = qContent[3].wAnswer[0];
    var answer2 = document.createElement("button");
    answer2.id="wrong-1"
    answer2.className ="btn";
    answer2.textContent = qContent[3].wAnswer[1];
    questionDiv.append(question1)
    var answer3 = document.createElement("button");
    answer3.id="right"
    answer3.className ="btn";
    answer3.textContent = qContent[3].rAnswer;
    var answer4 = document.createElement("button");
    answer4.id="wrong-2"
    answer4.className ="btn";
    answer4.textContent = qContent[3].wAnswer[2];
    answerDiv.append(answer1)
    answerDiv.append(answer2)
    answerDiv.append(answer3)
    answerDiv.append(answer4)
    var correctAnswerClicked4 = document.querySelector("#right")
    correctAnswerClicked4.addEventListener("click", function(){
        if(correctAnswerClicked4){
            correctAnswer()
            question5()
        }
    })
    for (i=0; i<=2; i++){
    var wrongAnswerClicked = document.querySelector("#wrong-" + i)
    wrongAnswerClicked.addEventListener("click", function(){
    if (wrongAnswerClicked){
    wrongAnswer()
    question5()
    }
    else{
    }
    })
    }
};
var question5 = function(){
    emptyQuestion()
    var questionDiv = document.createElement("div")
    questionDiv.className = "main-h1"
    main.append(questionDiv)
    var answerDiv = document.createElement("div")
    answerDiv.className = "main-btn"
    answerDiv.id = "answer-div"
    main.append(answerDiv)
    var question1= document.createElement("h1")
    question1.textContent = qContent[4].q
    var answer1 = document.createElement("button");
    answer1.id="wrong-0"
    answer1.className ="btn";
    answer1.textContent = qContent[4].wAnswer[0];
    var answer2 = document.createElement("button");
    answer2.id="wrong-1"
    answer2.className ="btn";
    answer2.textContent = qContent[4].wAnswer[1];
    questionDiv.append(question1)
    var answer3 = document.createElement("button");
    answer3.id="wrong-2"
    answer3.className ="btn";
    answer3.textContent = qContent[4].wAnswer[2];
    var answer4 = document.createElement("button");
    answer4.id="right"
    answer4.className ="btn";
    answer4.textContent = qContent[4].rAnswer;
    answerDiv.append(answer1)
    answerDiv.append(answer2)
    answerDiv.append(answer3)
    answerDiv.append(answer4)
    var correctAnswerClicked5 = document.querySelector("#right")
    correctAnswerClicked5.addEventListener("click", function(){
        if(correctAnswerClicked5){
            gameOver()
        }
    })
    for (i=0; i<=2; i++){
    var wrongAnswerClicked = document.querySelector("#wrong-" + i)
    wrongAnswerClicked.addEventListener("click", function(){
    if (wrongAnswerClicked){
    wrongAnswer()
    gameOver()
    }
    else{
    }
    })
    }
};
var gameOver = function(){
    var highscore = document.createElement("p")
    highscore.textContent = score;
};
//var timer = function() {
//console.log(time);
// time--;
// if (time===0){
//     clearInterval(startTimer)
// }
//}
//var startTimer = setInterval(timer, 1000)