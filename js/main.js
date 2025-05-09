import { initQuizGame } from './quiz.js';
import { initMemoryGame } from './memory.js';
import { initChoiceGame } from './choice.js';

const menuScreen = document.getElementById("menuScreen");
const quizGame = document.getElementById("quizGame");
const memoryGame = document.getElementById("memoryGame");
const choiceGame = document.getElementById("choiceGame");


document.getElementById("quizBtn").addEventListener("click", () => {

    menuScreen.style.display = "none";
    quizGame.style.display = "block";
    initQuizGame();

});


document.getElementById("memoryBtn").addEventListener("click", () => {

    menuScreen.style.display = "none";
    memoryGame.style.display = "block";
    initMemoryGame();

});

document.getElementById("choiceBtn").addEventListener("click", () => {

    menuScreen.style.display = "none";
    choiceGame.style.display = "block";
    initChoiceGame();

});



document.getElementById("backQuizBtn").addEventListener("click", showMenu);
document.getElementById("backMemoryBtn").addEventListener("click", showMenu);
document.getElementById("backChoiceBtn").addEventListener("click", showMenu);


function showMenu() {
    quizGame.style.display = "none";
    memoryGame.style.display = "none";
    choiceGame.style.display = "none"; 
    menuScreen.style.display = "block";
}
