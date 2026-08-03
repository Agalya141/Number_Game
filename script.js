var guessnumber = document.getElementById("guessnumber");
var submit = document.getElementById("button");
var result = document.getElementById("result");
var score = document.getElementById("totalscore");
var randomnumber = Math.floor(Math.random() * 10) + 1;
var totalscore = 10;
function check(){
    var userguess = guessnumber.value;
    if(userguess == randomnumber){
        result.innerHTML = "Congratulations! You Won!";
        alert("You Won The Game!")
        console.log("Right")
    }
    else{
        console.log("Wrong")
        totalscore = totalscore - 1;
        result.innerHTML = "Sorry! You Lost!"
        score.innerHTML = "Score: " + totalscore;
    }
    if(totalscore == 0){
        alert("Game Over! You have no more attempts left.");
    }
    
}