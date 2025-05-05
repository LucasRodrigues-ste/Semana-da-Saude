import { foodPairs } from '../data/foods.js';

function initMemoryGame() {
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let moves = 0;
    let canFlip = true;

    const gameBoard = document.getElementById("gameBoard");
    const movesDisplay = document.getElementById("moves");
    const pairsDisplay = document.getElementById("pairs");

    function startGame() {
        const selectedPairs = foodPairs.slice(0, 6); // Limita a 6 pares

        
        cards = [...selectedPairs.map(f => ({ ...f })), ...selectedPairs.map(f => ({ ...f }))].sort(() => Math.random() - 0.5);

        gameBoard.innerHTML = "";
        flippedCards = [];
        matchedPairs = 0;
        moves = 0;
        updateStats();

        cards.forEach((food, index) => {
            const card = document.createElement("div");
            card.className = "memory-card";
            card.dataset.index = index;
            card.innerHTML = `<img src="${food.image}" alt="${food.name}">`;
            card.addEventListener("click", flipCard);
            gameBoard.appendChild(card);
        });
    }

    function flipCard() {
        if (!canFlip || this.classList.contains("flipped") || this.classList.contains("matched")) return;

        this.classList.add("flipped");
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            canFlip = false;
            moves++;
            updateStats();
            checkForMatch();
        }
    }

    
    function checkForMatch() {
        const [card1, card2] = flippedCards;
        const index1 = card1.dataset.index;
        const index2 = card2.dataset.index;

        if (cards[index1].name === cards[index2].name) {
            card1.classList.add("matched");
            card2.classList.add("matched");
            matchedPairs++;
            updateStats();
            flippedCards = [];
            canFlip = true;

            if (matchedPairs === cards.length / 2) {
                setTimeout(() => {
                    alert(`Parabéns! Você completou o jogo em ${moves} jogadas!`);
                }, 500);
            }
        } else {
            setTimeout(() => {
                card1.classList.remove("flipped");
                card2.classList.remove("flipped");
                flippedCards = [];
                canFlip = true;
            }, 1000);
        }
    }

    function updateStats() {
        movesDisplay.textContent = moves;
        pairsDisplay.textContent = matchedPairs;
    }

    startGame();
}

export { initMemoryGame };
