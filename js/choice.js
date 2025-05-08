import { foodChoices } from '../data/foods.js';

function initChoiceGame() {
    const choiceContainer = document.getElementById("choiceGame");
    const feedbackEl = document.createElement("div");
    feedbackEl.id = "choiceFeedback";
    choiceContainer.appendChild(feedbackEl);

    const foodListEl = document.createElement("div");
    foodListEl.id = "foodList";
    choiceContainer.appendChild(foodListEl);

    const evaluateBtn = document.createElement("button");
    evaluateBtn.textContent = "Avaliar Alimentação";
    evaluateBtn.className = "game-btn";
    choiceContainer.appendChild(evaluateBtn);

    let selectedFoods = [];

    function loadFoodChoices() {
        foodListEl.innerHTML = "";
        foodChoices.forEach(food => {
            const foodItem = document.createElement("div");
            foodItem.className = "food-item";
            foodItem.innerHTML = `<img src="${food.image}" alt="${food.name}"><p>${food.name}</p>`;
            foodItem.addEventListener("click", () => toggleFoodSelection(food, foodItem));
            foodListEl.appendChild(foodItem);
        });
    }

    function toggleFoodSelection(food, foodItem) {
        if (selectedFoods.includes(food)) {
            selectedFoods = selectedFoods.filter(f => f !== food);
            foodItem.classList.remove("selected");
        } else {
            selectedFoods.push(food);
            foodItem.classList.add("selected");
        }
    }

    function evaluateChoices() {
        const healthyFoods = selectedFoods.filter(food => food.isHealthy).length;
        const unhealthyFoods = selectedFoods.length - healthyFoods;

        if (healthyFoods > unhealthyFoods) {
            feedbackEl.textContent = "Parabéns! Você fez escolhas saudáveis! 🥗";
        } else if (unhealthyFoods > healthyFoods) {
            feedbackEl.textContent = "Cuidado! Suas escolhas não foram muito saudáveis. 🍔";
        } else {
            feedbackEl.textContent = "Você fez escolhas equilibradas. 👍";
        }
    }

    evaluateBtn.addEventListener("click", evaluateChoices);

    loadFoodChoices();
}

export { initChoiceGame };