var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

function mainGame(){
    document.querySelector(".dice .img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".dice .img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    } else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
    } else if(randomNumber1 === randomNumber2){
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

function resetGame(){
    document.querySelector(".dice .img1").setAttribute("src", "images/dice6.png");
    document.querySelector(".dice .img2").setAttribute("src", "images/dice6.png");

    document.querySelector("h1").innerHTML = "START GAME";

    randomNumber1 = Math.ceil(Math.random() * 6);
    randomNumber2 = Math.ceil(Math.random() * 6);
}


document.querySelector(".btn1").addEventListener("click", function(){
    mainGame();
});

document.querySelector(".btn2").addEventListener("click", function(){
    resetGame();
});