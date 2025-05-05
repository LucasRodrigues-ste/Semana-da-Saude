import { initQuizGame } from './quiz.js';
import { initMemoryGame } from './memory.js';

const menuScreen = document.getElementById("menuScreen");
const quizGame = document.getElementById("quizGame");
const memoryGame = document.getElementById("memoryGame");

// Botões do menu  

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


// Botões de voltar  

document.getElementById("backQuizBtn").addEventListener("click", showMenu);
document.getElementById("backMemoryBtn").addEventListener("click", showMenu);


function showMenu() {

    quizGame.style.display = "none";
    memoryGame.style.display = "none";
    menuScreen.style.display = "block";

}
