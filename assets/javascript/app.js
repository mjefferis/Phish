//start by declaring global variables
//these following 3 variables are self explanatory
var correct = 0;
var incorrect = 0;
var unanswered = 0;


//document.getElementById("quiz").style.visibility = "hidden";
$('.quiz').hide();
$('.end').hide();
$('.submitbutton').hide();
$('.dog').hide(); 

//set timer for 45 seconds
var count = 60;
var counter;
 

function questionCheckOne() {
    var correctAnswer = document.getElementById("blue")
    var firstIncorrect = document.getElementById('red')
    var secondIncorrect=document.getElementById('orange')

    if (correctAnswer.checked == true) {
        correct++;
        
    } else if (firstIncorrect.checked==true || secondIncorrect.checked==true){
        incorrect++;
        
    }
    else {unanswered++;}

};

function questionCheckTwo() {
    var correctAnswer = document.getElementById("bce")
    var firstIncorrect = document.getElementById('abc')
    var secondIncorrect=document.getElementById('cde')

    if (correctAnswer.checked == true) {
        correct++;
        
    } else if (firstIncorrect.checked==true || secondIncorrect.checked==true){
        incorrect++;
        
    }
    else {unanswered++;}

};

function questionCheckThree() {
    var correctAnswer = document.getElementById("lincoln")
    var firstIncorrect = document.getElementById('omaha')
    var secondIncorrect=document.getElementById('london')

    if (correctAnswer.checked == true) {
        correct++;
        
    } else if (firstIncorrect.checked==true || secondIncorrect.checked==true) {
        incorrect++;
        
    }
    else {unanswered++;}

};

function questionCheckFour() {
    var correctAnswer = document.getElementById("eight")
    var firstIncorrect = document.getElementById('six')
    var secondIncorrect=document.getElementById('over')

    if (correctAnswer.checked == true) {
        correct++;
      
    } else if (firstIncorrect.checked==true || secondIncorrect.checked==true) {
        incorrect++;
        
    }
    else {unanswered++;}

};

function questionCheckFive() {
    var correctAnswer = document.getElementById("five")
    var firstIncorrect = document.getElementById('four')
    var secondIncorrect=document.getElementById('ninethousand')
    
    if (correctAnswer.checked == true) {
        correct++;
        
    } else if (firstIncorrect.checked==true || secondIncorrect.checked==true) {
        incorrect++;
        
    }
    else {unanswered++;}

};

function checkAll() {
    questionCheckOne();
    questionCheckTwo();
    questionCheckThree();
    questionCheckFour();
    questionCheckFive();
    
};

function finished() {
    checkAll();
    $('.quiz').hide();
    $('.submitbutton').hide();
    $('.end').show();
    $('.dog').show();
    $('.instructions').hide();
    $("#numbercorrect").text(correct);
    $("#numberincorrect").text(incorrect);
    $("#numberunanswered").text(unanswered);
};

function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        //counter ended, invoke finished function
        finished();
    }

    document.getElementById("timeleft").innerHTML = count + " secs";
};

//create function for start button
$(".startbutton").on("click", function() {
    $('.startbutton').hide();
    $('.quiz').show();
    $('.submitbutton').show();
    counter = setInterval(timer, 1000);
    timer();
});

$(".submitbutton").on("click", function() {
    $('.quiz').hide();
    $('.submitbutton').hide();
    $('.end').show();
    checkAll();
    $("#numbercorrect").text(correct);
    $("#numberincorrect").text(incorrect);
    $("#numberunanswered").text(unanswered);
    $('.dog').show();
    $('.instructions').hide();
});