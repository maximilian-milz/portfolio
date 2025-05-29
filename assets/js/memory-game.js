// Memory Game Logic
document.addEventListener('DOMContentLoaded', () => {
    // Check if memory game elements exist
    const memoryBoard = document.getElementById('memory-board');
    const matchesCount = document.getElementById('matches-count');
    const accuracyValue = document.getElementById('accuracy-value');
    const attemptsCount = document.getElementById('attempts-count');
    const resetButton = document.getElementById('reset-game');

    // Exit if required elements don't exist
    if (!memoryBoard || !matchesCount || !accuracyValue || !attemptsCount || !resetButton) {
        console.log("Memory game elements not found, skipping initialization");
        return;
    }

    // Country-capital pairs (data for the memory game)
    const countryCapitalPairs = [
        { country: "Deutschland", capital: "Berlin" },
        { country: "Frankreich", capital: "Paris" },
        { country: "Italien", capital: "Rom" },
        { country: "Spanien", capital: "Madrid" },
        { country: "Vereinigtes Königreich", capital: "London" },
        { country: "USA", capital: "Washington D.C." },
        { country: "Japan", capital: "Tokio" },
        { country: "Australien", capital: "Canberra" },
        { country: "Brasilien", capital: "Brasília" },
        { country: "Kanada", capital: "Ottawa" },
        { country: "China", capital: "Peking" },
        { country: "Indien", capital: "Neu-Delhi" }
    ];

    // Game state variables
    let selectedCards = [];
    let matchedPairs = 0;
    let attempts = 0;
    let accuracy = 100;

    // Initialize the game
    function initGame() {
        // Reset game state
        selectedCards = [];
        matchedPairs = 0;
        attempts = 0;
        accuracy = 100;

        // Update UI
        matchesCount.textContent = matchedPairs;
        accuracyValue.textContent = `${accuracy}%`;
        attemptsCount.textContent = attempts;

        // Clear the board
        memoryBoard.innerHTML = '';

        // Create a shuffled array of cards
        const cards = createShuffledCards();

        // Add cards to the board
        cards.forEach(card => {
            memoryBoard.appendChild(card);
        });
    }

    // Create and shuffle cards
    function createShuffledCards() {
        // Select a random subset of pairs if there are too many
        let gamePairs = [...countryCapitalPairs];
        if (gamePairs.length > 8) {
            gamePairs = shuffleArray(gamePairs).slice(0, 8);
        }

        // Create card elements
        let cards = [];

        gamePairs.forEach(pair => {
            // Create country card
            const countryCard = createCard('country', pair.country);
            cards.push(countryCard);

            // Create capital card
            const capitalCard = createCard('capital', pair.capital);
            cards.push(capitalCard);
        });

        // Shuffle the cards
        return shuffleArray(cards);
    }

    // Create a single card element
    function createCard(type, text) {
        const card = document.createElement('div');
        card.className = 'memory-card-item';
        card.dataset.type = type;
        card.dataset.value = text;

        const cardInner = document.createElement('div');
        cardInner.className = 'memory-card-inner';

        const cardFront = document.createElement('div');
        cardFront.className = 'memory-card-front';
        cardFront.textContent = '?';

        const cardBack = document.createElement('div');
        cardBack.className = 'memory-card-back';
        cardBack.textContent = text;

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);

        // Add click event
        card.addEventListener('click', () => flipCard(card));

        return card;
    }

    // Handle card flip
    function flipCard(card) {
        // Ignore if card is already flipped or matched
        if (card.classList.contains('flipped') || card.classList.contains('matched')) {
            return;
        }

        // Ignore if two cards are already flipped
        if (selectedCards.length === 2) {
            return;
        }

        // Flip the card
        card.classList.add('flipped');
        selectedCards.push(card);

        // Check for match if two cards are flipped
        if (selectedCards.length === 2) {
            checkForMatch();
        }
    }

    // Check if the two flipped cards match
    function checkForMatch() {
        const [card1, card2] = selectedCards;

        // Increment attempts
        attempts++;
        attemptsCount.textContent = attempts;

        // Check if cards form a pair (country-capital)
        const isMatch = (
            (card1.dataset.type === 'country' && card2.dataset.type === 'capital') ||
            (card1.dataset.type === 'capital' && card2.dataset.type === 'country')
        ) && isCorrectPair(card1.dataset.value, card2.dataset.value);

        if (isMatch) {
            // Mark cards as matched
            setTimeout(() => {
                card1.classList.add('matched');
                card2.classList.add('matched');

                // Update matched pairs count
                matchedPairs++;
                matchesCount.textContent = matchedPairs;

                // Check if game is complete
                if (matchedPairs === memoryBoard.childElementCount / 2) {
                    setTimeout(() => {
                        // Get current language from html lang attribute
                        const currentLang = document.documentElement.lang || 'de';
                        const completionMessage = translations[currentLang].memoryGameComplete;
                        alert(completionMessage);
                    }, 500);
                }

                // Reset selected cards
                selectedCards = [];
            }, 500);
        } else {
            // Update accuracy
            const totalPossibleMatches = memoryBoard.childElementCount / 2;
            accuracy = Math.max(0, Math.round(100 - (attempts - matchedPairs) / totalPossibleMatches * 100));
            accuracyValue.textContent = `${accuracy}%`;

            // Flip cards back
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');

                // Reset selected cards
                selectedCards = [];
            }, 1000);
        }
    }

    // Check if the country and capital form a correct pair
    function isCorrectPair(value1, value2) {
        for (const pair of countryCapitalPairs) {
            if ((value1 === pair.country && value2 === pair.capital) ||
                (value1 === pair.capital && value2 === pair.country)) {
                return true;
            }
        }
        return false;
    }

    // Shuffle array (Fisher-Yates algorithm)
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    // Reset game event
    resetButton.addEventListener('click', initGame);

    // Initialize the game on load
    initGame();
});
