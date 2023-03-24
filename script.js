const inputEl =document.querySelector(".input__number");
const messageEl =document.querySelector(".message");
const numberEl =document.querySelector(".heading__number");
const buttonCheck =document.querySelector(".btn__check");
const scoreEl =document.querySelector(".score");
const highScoreEl =document.querySelector(".highscore");
const bodyEl =document.querySelector("body");
const buttonAgain =document.querySelector(".btn__again");

let score =20;
let highscore =0;


const secretNumber =Math.round(Math.random()*20+1);


// let convertNumb =Number(inputEl.value);
// console.log(typeof convertNumb)

buttonCheck.addEventListener("click", ()=>{

// When there is not input
    if(!Number(inputEl.value)){
        messageEl.textContent ="📛 Wrong Number"; 

// When player wins
    } else if(Number(inputEl.value) === secretNumber){
        messageEl.textContent ="🎉 Correct Number!";
        bodyEl.style.backgroundColor="#60b347"
        numberEl.textContent = secretNumber;
        if(score > highscore){
            highscore === score;
            highScoreEl.textContent =` 🥇 Highscore: ${highscore}`;
            console.log(highscore);
        }
        // When the number is too high       
    } else if(Number(inputEl.value) > secretNumber) {
       if(score > 1){
        messageEl.textContent ="↗ Too high";
        score--;
        scoreEl.textContent = `🧡 Score: ${score}`;
       } else{
        messageEl.textContent="☹ You lost the game!"
        scoreEl.textContent = `🧡 Score: 0`;
    }
    
    // When the number is too high       
    }else if(Number(inputEl.value) < secretNumber){
        messageEl.textContent ="↙ Too low"
        score--;
        scoreEl.textContent =  `🧡 Score: ${score}`;
    }
});





buttonAgain.addEventListener("click",()=>{
    bodyEl.style.backgroundColor= "#222";
    numberEl.textContent = "?";
    inputEl.value ="";
    scoreEl.textContent = `🧡 Score: 20`;
    messageEl.textContent ="Start guessing...";
});