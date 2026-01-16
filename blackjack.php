<?php 
$pageTitle = "Blackjack";
include '../header.php'; 
?>

<div class="container my-5">
    <div class="game-container">
        <h1 class="text-center mb-4" style="color: var(--primary-purple);">
            <i class="fas fa-spade me-2"></i>Blackjack
        </h1>
        
        <div class="game-interface">
            <div class="balance-display-game">
                <i class="fas fa-wallet me-2"></i>Balance: <span id="gameBalance">10,000</span> Coins
            </div>
            
            <!-- Dealer's Hand -->
            <div class="card-hand mb-4">
                <h4 class="text-white text-center">Dealer's Hand <span id="dealerScore"></span></h4>
                <div class="cards-display" id="dealerCards"></div>
            </div>
            
            <!-- Player's Hand -->
            <div class="card-hand mb-4">
                <h4 class="text-white text-center">Your Hand <span id="playerScore"></span></h4>
                <div class="cards-display" id="playerCards"></div>
            </div>
            
            <!-- Bet Controls -->
            <div id="bettingPhase">
                <div class="bet-controls mb-4">
                    <label for="betAmount" class="text-white me-2">Bet Amount:</label>
                    <input type="number" id="betAmount" class="bet-input" value="100" min="10" max="1000" step="10">
                </div>
                <div class="text-center">
                    <button id="dealBtn" class="btn btn-primary btn-lg">
                        <i class="fas fa-play me-2"></i>DEAL CARDS
                    </button>
                </div>
            </div>
            
            <!-- Game Controls -->
            <div id="gamePhase" style="display: none;">
                <div class="text-center">
                    <button id="hitBtn" class="btn btn-primary me-2">
                        <i class="fas fa-plus me-2"></i>HIT
                    </button>
                    <button id="standBtn" class="btn btn-secondary">
                        <i class="fas fa-hand-paper me-2"></i>STAND
                    </button>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-4">
            <a href="../games.php" class="btn btn-secondary">
                <i class="fas fa-arrow-left me-2"></i>Back to Games
            </a>
        </div>
    </div>
</div>

<style>
.card-hand {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid var(--accent-gold);
    border-radius: 8px;
    padding: 1.5rem;
}

.cards-display {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    min-height: 120px;
    align-items: center;
}

.playing-card {
    width: 80px;
    height: 120px;
    background: white;
    border: 2px solid #333;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.playing-card.red {
    color: #dc3545;
}

.playing-card.black {
    color: #000;
}

.playing-card.hidden {
    background: linear-gradient(135deg, var(--primary-purple) 0%, var(--secondary-purple) 100%);
    color: var(--accent-gold);
}
</style>

<script>
const suits = ['♠', '♥', '♦', '♣'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let deck = [];
let playerHand = [];
let dealerHand = [];
let betAmount = 0;
let gameInProgress = false;

document.getElementById('dealBtn').addEventListener('click', startGame);
document.getElementById('hitBtn').addEventListener('click', hit);
document.getElementById('standBtn').addEventListener('click', stand);

function createDeck() {
    deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ suit, value });
        }
    }
    // Shuffle
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function getCardValue(card) {
    if (card.value === 'A') return 11;
    if (['J', 'Q', 'K'].includes(card.value)) return 10;
    return parseInt(card.value);
}

function calculateScore(hand) {
    let score = 0;
    let aces = 0;
    
    for (let card of hand) {
        score += getCardValue(card);
        if (card.value === 'A') aces++;
    }
    
    while (score > 21 && aces > 0) {
        score -= 10;
        aces--;
    }
    
    return score;
}

function displayCard(card, hidden = false) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'playing-card';
    
    if (hidden) {
        cardDiv.classList.add('hidden');
        cardDiv.innerHTML = '?';
    } else {
        cardDiv.classList.add(card.suit === '♥' || card.suit === '♦' ? 'red' : 'black');
        cardDiv.innerHTML = `${card.value}<br>${card.suit}`;
    }
    
    return cardDiv;
}

function updateDisplay(revealDealer = false) {
    const playerCardsDiv = document.getElementById('playerCards');
    const dealerCardsDiv = document.getElementById('dealerCards');
    
    playerCardsDiv.innerHTML = '';
    dealerCardsDiv.innerHTML = '';
    
    playerHand.forEach(card => {
        playerCardsDiv.appendChild(displayCard(card));
    });
    
    dealerHand.forEach((card, index) => {
        if (index === 0 && !revealDealer) {
            dealerCardsDiv.appendChild(displayCard(card, true));
        } else {
            dealerCardsDiv.appendChild(displayCard(card));
        }
    });
    
    document.getElementById('playerScore').textContent = `(${calculateScore(playerHand)})`;
    
    if (revealDealer) {
        document.getElementById('dealerScore').textContent = `(${calculateScore(dealerHand)})`;
    } else {
        document.getElementById('dealerScore').textContent = '';
    }
}

function startGame() {
    betAmount = parseInt(document.getElementById('betAmount').value);
    const currentBalance = currency.getBalance();
    
    if (betAmount < 10) {
        currency.showNotification('Minimum bet is 10 coins!', 'lose');
        return;
    }
    
    if (betAmount > currentBalance) {
        currency.showNotification('Insufficient balance!', 'lose');
        return;
    }
    
    currency.subtractBalance(betAmount);
    
    createDeck();
    playerHand = [deck.pop(), deck.pop()];
    dealerHand = [deck.pop(), deck.pop()];
    
    updateDisplay();
    
    document.getElementById('bettingPhase').style.display = 'none';
    document.getElementById('gamePhase').style.display = 'block';
    gameInProgress = true;
    
    // Check for blackjack
    if (calculateScore(playerHand) === 21) {
        stand();
    }
}

function hit() {
    if (!gameInProgress) return;
    
    playerHand.push(deck.pop());
    updateDisplay();
    
    const playerScore = calculateScore(playerHand);
    if (playerScore > 21) {
        endGame(false, 'Bust! You went over 21.');
    } else if (playerScore === 21) {
        stand();
    }
}

function stand() {
    if (!gameInProgress) return;
    
    // Dealer draws until 17 or higher
    while (calculateScore(dealerHand) < 17) {
        dealerHand.push(deck.pop());
    }
    
    updateDisplay(true);
    
    const playerScore = calculateScore(playerHand);
    const dealerScore = calculateScore(dealerHand);
    
    if (dealerScore > 21) {
        endGame(true, `Dealer busts! You win!`);
    } else if (playerScore > dealerScore) {
        endGame(true, `You win! ${playerScore} beats ${dealerScore}`);
    } else if (playerScore < dealerScore) {
        endGame(false, `Dealer wins. ${dealerScore} beats ${playerScore}`);
    } else {
        endGame(null, `Push! It's a tie at ${playerScore}`);
    }
}

function endGame(won, message) {
    gameInProgress = false;
    
    if (won === true) {
        const winAmount = betAmount * 2;
        currency.addBalance(winAmount);
        currency.showNotification(`🎉 ${message} Won ${winAmount.toLocaleString()} coins!`, 'win');
    } else if (won === false) {
        currency.showNotification(`${message} Lost ${betAmount.toLocaleString()} coins.`, 'lose');
    } else {
        currency.addBalance(betAmount);
        currency.showNotification(message, 'info');
    }
    
    setTimeout(() => {
        document.getElementById('bettingPhase').style.display = 'block';
        document.getElementById('gamePhase').style.display = 'none';
        document.getElementById('playerCards').innerHTML = '';
        document.getElementById('dealerCards').innerHTML = '';
        document.getElementById('playerScore').textContent = '';
        document.getElementById('dealerScore').textContent = '';
    }, 3000);
}
</script>

<?php include '../footer.php'; ?>
