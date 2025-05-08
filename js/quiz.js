import { quizFoods } from '../data/foods.js';

function initQuizGame() {
    let currentFoodIndex = 0;
    const descriptionEl = document.getElementById("description");
    const optionsEl = document.getElementById("options");
    const feedbackEl = document.getElementById("feedback");
    const nextBtn = document.getElementById("nextBtn");

    function loadFood(index) {
        const food = quizFoods[index]; 
        descriptionEl.textContent = food.description;
        const allImages = [food.correctImage, ...food.wrongImages].sort(() => Math.random() - 0.5);
        optionsEl.innerHTML = "";

        allImages.forEach(imgSrc => {
            const imgContainer = document.createElement("div");
            imgContainer.className = "quiz-option";
            imgContainer.innerHTML = `<img src="${imgSrc}" alt="Alimento">`;
            imgContainer.addEventListener("click", () => checkAnswer(imgSrc === food.correctImage, imgContainer));
            optionsEl.appendChild(imgContainer);
        });

        feedbackEl.textContent = "";
        nextBtn.style.display = "none";
    }

    function checkAnswer(isCorrect, clickedElement) {
        document.querySelectorAll(".quiz-option").forEach(opt => {
            opt.style.pointerEvents = "none";
        });

        if (isCorrect) {
            clickedElement.classList.add("correct");
            feedbackEl.textContent = "✅ Correto! Bom trabalho!";
        } else {
            clickedElement.classList.add("incorrect");
            feedbackEl.textContent = "❌ Tente novamente!";
        }

        nextBtn.style.display = "block";
    }

    nextBtn.addEventListener("click", () => {
        if (currentFoodIndex < quizFoods.length - 1) {
            currentFoodIndex++;
            loadFood(currentFoodIndex);
        } else {
            feedbackEl.textContent = "🎉 Parabéns! Você completou o quiz!";
            nextBtn.style.display = "none"; // Oculta o botão "Próximo" ao final
        }
    });

    loadFood(0);
}

export { initQuizGame };
