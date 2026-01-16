<?php 
$pageTitle = "Baccarat";
include 'header.php'; 
?>

<div class="container my-5">
    <div class="game-container">
        <h1 class="text-center mb-4" style="color: var(--primary-purple);">
            <i class="fas fa-heart me-2"></i>Baccarat
        </h1>
        
        <div class="game-interface">
            <div class="balance-display-game">
                <i class="fas fa-wallet me-2"></i>Balance: <span id="gameBalance">10,000</span> Coins
            </div>
            
            <div class="row mb-4">
                <div class="col-md-6">
                    <div class="baccarat-hand">
                        <h4 class="text-white text-center">Player <span id="playerScore"></span></h4>
                        <div class="cards-display" id="playerCards"></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="baccarat-hand">
                        <h4 class="text-white text-center">Banker <span id="bankerScore"></span></h4>
                        <div class="cards-display" id="bankerCards"></div>
                    </div>
                </div>
            </div>
            
            <div class="bet-controls mb-4">
                <label for="betAmount" class="text-white me-2">Bet Amount:</label>
                <input type="number" id="betAmount" class="bet-input" value="100" min="10" max="1000" step="10">
            </div>
            
            <div class="text-center mb-4">
                <h5 class="text-white mb-3">Place Your Bet:</h5>
                <button class="btn btn-bet me-2" data-bet="player">Player (2x)</button>
                <button class="btn btn-bet me-2" data-bet="banker">Banker (1.95x)</button>
                <button class="btn btn-bet" data-bet="tie">Tie (8x)</button>
            </div>
            
            <div class="text-center">
                <button id="dealBtn" class="btn btn-primary btn-lg" disabled>
                    <i class="fas fa-play me-2"></i>DEAL
                </button>
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
.baccarat-hand {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid var(--accent-gold);
    border-radius: 8px;
    padding: 1.5rem;
    min-height: 200px;
}
.cards-display {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
}
.playing-card {
    width: 60px;
    height: 90px;
    background: white;
    border: 2px solid #333;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
}
.playing-card.red { color: #dc3545; }
.playing-card.black { color: #000; }
.btn-bet {
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    color: white;
    padding: 1rem 2rem;
    font-weight: 600;
}
.btn-bet.selected {
    background: var(--accent-gold);
    color: var(--primary-purple);
    border-color: var(--accent-gold);
}
</style>

<script>
const suits = ['♠', '♥', '♦', '♣'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let selectedBet = null;

document.querySelectorAll('.btn-bet').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.btn-bet').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        selectedBet = this.dataset.bet;
        document.getElementById('dealBtn').disabled = false;
    });
});

document.getElementById('dealBtn').addEventListener('click', playBaccarat);

function createDeck() {
    const deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ suit, value });
        }
    }
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function getCardValue(card) {
    if (card.value === 'A') return 1;
    if (['J', 'Q', 'K'].includes(card.value)) return 0;
    return parseInt(card.value);
}

function calculateScore(hand) {
    return hand.reduce((sum, card) => sum + getCardValue(card), 0) % 10;
}

function displayCard(card) {
    const div = document.createElement('div');
    div.className = 'playing-card ' + (card.suit === '♥' || card.suit === '♦' ? 'red' : 'black');
    div.innerHTML = `${card.value}<br>${card.suit}`;
    return div;
}

function playBaccarat() {
    const betAmount = parseInt(document.getElementById('betAmount').value);
    if (!selectedBet || betAmount < 10 || betAmount > currency.getBalance()) {
        currency.showNotification('Invalid bet!', 'lose');
        return;
    }
    
    currency.subtractBalance(betAmount);
    const deck = createDeck();
    
    const playerHand = [deck.pop(), deck.pop()];
    const bankerHand = [deck.pop(), deck.pop()];
    
    // Natural win check
    let playerScore = calculateScore(playerHand);
    let bankerScore = calculateScore(bankerHand);
    
    // Third card rules (simplified)
    if (playerScore <= 5 && bankerScore <= 5) {
        playerHand.push(deck.pop());
        playerScore = calculateScore(playerHand);
    }
    if (bankerScore <= 5) {
        bankerHand.push(deck.pop());
        bankerScore = calculateScore(bankerHand);
    }
    
    // Display
    document.getElementById('playerCards').innerHTML = '';
    document.getElementById('bankerCards').innerHTML = '';
    playerHand.forEach(card => document.getElementById('playerCards').appendChild(displayCard(card)));
    bankerHand.forEach(card => document.getElementById('bankerCards').appendChild(displayCard(card)));
    document.getElementById('playerScore').textContent = `(${playerScore})`;
    document.getElementById('bankerScore').textContent = `(${bankerScore})`;
    
    // Determine winner
    let result = playerScore > bankerScore ? 'player' : bankerScore > playerScore ? 'banker' : 'tie';
    let won = result === selectedBet;
    
    if (won) {
        const multiplier = selectedBet === 'tie' ? 8 : selectedBet === 'banker' ? 1.95 : 2;
        const winAmount = Math.floor(betAmount * multiplier);
        currency.addBalance(winAmount);
        currency.showNotification(`🎉 ${result.toUpperCase()} wins! You won ${winAmount.toLocaleString()} coins!`, 'win');
    } else {
        currency.showNotification(`${result.toUpperCase()} wins. You lost ${betAmount.toLocaleString()} coins.`, 'lose');
    }
}
</script>

<?php include 'footer.php'; ?>
