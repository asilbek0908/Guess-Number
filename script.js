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
let secretNumber =Math.round(Math.random()*20+1);

const displayMessage =(message)=>{
    messageEl.textContent =message;
}

const displayScore =(mark)=>{
    scoreEl.textContent = mark;
}

const displayNumber =(number)=>{
    numberEl.textContent =number;
}

// numberEl.textContent = secretNumber;



buttonCheck.addEventListener("click", ()=>{
    // e.preventDefault();
    const inputVal = Number(inputEl.value);

// When there is not input
    if(!inputVal){
        displayMessage("📛 No Number");
        // messageEl.textContent ="📛 Wrong Number"; 

// When player wins
    } else if(inputVal === secretNumber){
        displayMessage("🎉 Correct Number!");
        // messageEl.textContent ="🎉 Correct Number!";
        bodyEl.style.backgroundColor="#60b347"
        displayNumber(secretNumber);
        // numberEl.textContent = secretNumber;
        if(score > highscore){
            highscore = score;
            highScoreEl.textContent =` 🥇 Highscore: ${highscore}`;
        }
         
        // When guess is wrong  
    } else if(inputVal !== secretNumber){
        if(score > 1){
             // When the number is too high   and too low
             displayMessage(inputVal > secretNumber ? "↗ Too high" : "↙ Too low");
            //  messageEl.textContent = inputVal > secretNumber ? "↗ Too high" : "↙ Too low";
            score--;
            displayScore(`🧡 Score: ${score}`)
            // scoreEl.textContent = `🧡 Score: ${score}`;
        } else {
            displayMessage("☹ You lost the game!");
            // messageEl.textContent="☹ You lost the game!"
            displayScore( `🧡 Score: 0`);
            // scoreEl.textContent = `🧡 Score: 0`;
        }
       
    }
    
    
    
    
    
    
    
    
    // else if(inputVal > secretNumber ) {
    //    if(score > 1){
    //     messageEl.textContent ="↗ Too high";
    //     score--;
    //     scoreEl.textContent = `🧡 Score: ${score}`;
    //    } else{
    //     messageEl.textContent="☹ You lost the game!"
    //     scoreEl.textContent = `🧡 Score: 0`;
    // }
    
    // // When the number is too high       
    // }else if(inputVal < secretNumber){
    //     if(score > 1){
    //         messageEl.textContent ="↙ Too low"
    //         score--;
    //         scoreEl.textContent =  `🧡 Score: ${score}`;
    //     } else{
    //         messageEl.textContent="☹ You lost the game!"
    //         scoreEl.textContent = `🧡 Score: 0`;
    //     }
     
    // }
});





buttonAgain.addEventListener("click",()=>{
    secretNumber =Math.round(Math.random()*20+1);
    displayNumber(secretNumber);
    // numberEl.textContent = secretNumber;
    score =20;
    displayScore( `🧡 Score: ${score}`);
    // scoreEl.textContent = `🧡 Score: ${score}`;
    // highscore =0;
    // highScoreEl.textContent =` 🥇 Highscore: ${highscore}`;
    displayNumber("?");
    numberEl.textContent = "?"
    bodyEl.style.backgroundColor= "#222";
    inputEl.value ="";
    displayMessage("Start guessing...");
    // messageEl.textContent ="Start guessing...";
});  







































































 