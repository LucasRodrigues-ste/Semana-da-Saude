
// plateMaker.js

// List of foods with their health values
const foods = [
    { name: "Apple", healthy: true },
    { name: "Broccoli", healthy: true },
    { name: "Pizza", healthy: false },
    { name: "Burger", healthy: false },
    { name: "Carrot", healthy: true },
    { name: "Ice Cream", healthy: false },
    { name: "Salmon", healthy: true },
    { name: "Fries", healthy: false },
];

// Player's selected foods
let selectedFoods = [];

// Function to add food to the player's plate
function selectFood(foodName) {
    const food = foods.find((f) => f.name === foodName);
    if (food) {
        selectedFoods.push(food);
        console.log(`${foodName} added to your plate.`);
    } else {
        console.log(`${foodName} is not available.`);
    }
}

// Function to evaluate the player's healthiness
function evaluateHealth() {
    const healthyCount = selectedFoods.filter((food) => food.healthy).length;
    const unhealthyCount = selectedFoods.length - healthyCount;

    if (healthyCount > unhealthyCount) {
        console.log("Your plate is healthy! Great job!");
    } else if (unhealthyCount > healthyCount) {
        console.log("Your plate is unhealthy. Try adding more healthy foods!");
    } else {
        console.log("Your plate is balanced. Keep it up!");
    }
}

// Example usage
selectFood("Apple");
selectFood("Pizza");
selectFood("Broccoli");
evaluateHealth();