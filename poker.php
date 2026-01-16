<?php 
$pageTitle = "Video Poker";
include '../header.php'; 
?>

<div class="container my-5">
    <div class="game-container">
        <h1 class="text-center mb-4" style="color: var(--primary-purple);">
            <i class="fas fa-diamond me-2"></i>Video Poker
        </h1>
        
        <div class="game-interface">
            <div class="balance-display-game">
                <i class="fas fa-wallet me-2"></i>Balance: <span id="gameBalance">10,000</span> Coins
            </div>
            
            <!-- Poker Hand -->
            <div class="poker-hand mb-4">
                <div class="cards-display" id="pokerCards"></div>
                <div class="hold-buttons" id="holdButtons" style="display: none;"></div>
            </div>
            
            <div class="text-center mb-4">
                <h4 class="text-white" id="handResult"></h4>
            </div>
            
            <!-- Bet Controls -->
            <div id="bettingPhase">
                <div class="bet-controls mb-4">
                    <label for="betAmount" class="text-white me-2">Bet Amount:</label>
                    <input type="number" id="betAmount" class="bet-input" value="100" min="10" max="1000" step="10">
                </div>
                <div class="text-center">
                    <button id="dealBtn" class="btn btn-primary btn-lg">
                        <i class="fas fa-play me-2"></i>DEAL
                    </button>
                </div>
            </div>
            
            <!-- Game Controls -->
            <div id="gamePhase" style="display: none;">
                <div class="text-center">
                    <button id="drawBtn" class="btn btn-primary btn-lg">
                        <i class="fas fa-sync-alt me-2"></i>DRAW
                    </button>
                </div>
            </div>
            
            <!-- Payout Table -->
            <div class="mt-4">
                <h5 class="text-white text-center mb-3">Payout Table</h5>
                <div class="payout-table-poker">
                    <div class="payout-row"><span>Royal Flush</span><span>250x</span></div>
                    <div class="payout-row"><span>Straight Flush</span><span>50x</span></div>
                    <div class="payout-row"><span>Four of a Kind</span><span>25x</span></div>
                    <div class="payout-row"><span>Full House</span><span>9x</span></div>
                    <div class="payout-row"><span>Flush</span><span>6x</span></div>
                    <div class="payout-row"><span>Straight</span><span>4x</span></div>
                    <div class="payout-row"><span>Three of a Kind</span><span>3x</span></div>
                    <div class="payout-row"><span>Two Pair</span><span>2x</span></div>
                    <div class="payout-row"><span>Jacks or Better</span><span>1x</span></div>
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
.poker-hand {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid var(--accent-gold);
    border-radius: 8px;
    padding: 2rem;
}

.cards-display {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
}

.playing-card {
    width: 100px;
    height: 140px;
    background: white;
    border: 3px solid #333;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;
}

.playing-card:hover {
    transform: translateY(-10px);
}

.playing-card.held {
    border-color: var(--accent-gold);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
}

.playing-card.red {
    color: #dc3545;
}

.playing-card.black {
    color: #000;
}

.hold-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.hold-btn {
    padding: 0.5rem 1rem;
    background: rgba(255, 215, 0, 0.2);
    border: 2px solid var(--accent-gold);
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.hold-btn.active {
    background: var(--accent-gold);
    color: var(--primary-purple);
}

.payout-table-poker {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid var(--accent-gold);
    border-radius: 8px;
    padding: 1rem;
    max-width: 400px;
    margin: 0 auto;
}

.payout-row {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    color: white;
}

.payout-row:nth-child(even) {
    background: rgba(255, 255, 255, 0.05);
}
</style>

<script>
const suits = ['♠', '♥', '♦', '♣'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const valueMap = {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':11,'Q':12,'K':13,'A':14};

let deck = [];
let hand = [];
let held = [false, false, false, false, false];
let betAmount = 0;
let gamePhase = 'betting';

document.getElementById('dealBtn').addEventListener('click', deal);
document.getElementById('drawBtn').addEventListener('click', draw);

function createDeck() {
    deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ suit, value });
        }
    }
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function displayCard(card, index) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'playing-card';
    cardDiv.classList.add(card.suit === '♥' || card.suit === '♦' ? 'red' : 'black');
    if (held[index]) cardDiv.classList.add('held');
    cardDiv.innerHTML = `${card.value}<br>${card.suit}`;
    cardDiv.onclick = () => toggleHold(index);
    return cardDiv;
}

function updateDisplay() {
    const cardsDiv = document.getElementById('pokerCards');
    cardsDiv.innerHTML = '';
    hand.forEach((card, i) => {
        cardsDiv.appendChild(displayCard(card, i));
    });
}

function toggleHold(index) {
    if (gamePhase !== 'draw') return;
    held[index] = !held[index];
    updateDisplay();
}

function deal() {
    betAmount = parseInt(document.getElementById('betAmount').value);
    if (betAmount < 10 || betAmount > currency.getBalance()) {
        currency.showNotification('Invalid bet amount!', 'lose');
        return;
    }
    
    currency.subtractBalance(betAmount);
    createDeck();
    hand = [deck.pop(), deck.pop(), deck.pop(), deck.pop(), deck.pop()];
    held = [false, false, false, false, false];
    gamePhase = 'draw';
    
    updateDisplay();
    document.getElementById('bettingPhase').style.display = 'none';
    document.getElementById('gamePhase').style.display = 'block';
    document.getElementById('handResult').textContent = 'Select cards to hold, then click DRAW';
}

function draw() {
    for (let i = 0; i < 5; i++) {
        if (!held[i]) {
            hand[i] = deck.pop();
        }
    }
    
    updateDisplay();
    gamePhase = 'result';
    
    const result = evaluateHand(hand);
    document.getElementById('handResult').textContent = result.name;
    
    if (result.payout > 0) {
        const winAmount = betAmount * result.payout;
        currency.addBalance(winAmount);
        currency.showNotification(`🎉 ${result.name}! Won ${winAmount.toLocaleString()} coins! (${result.payout}x)`, 'win');
    } else {
        currency.showNotification(`${result.name}. Lost ${betAmount.toLocaleString()} coins.`, 'lose');
    }
    
    setTimeout(() => {
        document.getElementById('bettingPhase').style.display = 'block';
        document.getElementById('gamePhase').style.display = 'none';
        document.getElementById('handResult').textContent = '';
        gamePhase = 'betting';
    }, 3000);
}

function evaluateHand(cards) {
    const values = cards.map(c => valueMap[c.value]).sort((a,b) => a-b);
    const suits = cards.map(c => c.suit);
    const valueCounts = {};
    values.forEach(v => valueCounts[v] = (valueCounts[v] || 0) + 1);
    const counts = Object.values(valueCounts).sort((a,b) => b-a);
    
    const isFlush = suits.every(s => s === suits[0]);
    const isStraight = values[4] - values[0] === 4 && new Set(values).size === 5;
    const isRoyal = isStraight && values[0] === 10;
    
    if (isRoyal && isFlush) return {name: 'Royal Flush', payout: 250};
    if (isStraight && isFlush) return {name: 'Straight Flush', payout: 50};
    if (counts[0] === 4) return {name: 'Four of a Kind', payout: 25};
    if (counts[0] === 3 && counts[1] === 2) return {name: 'Full House', payout: 9};
    if (isFlush) return {name: 'Flush', payout: 6};
    if (isStraight) return {name: 'Straight', payout: 4};
    if (counts[0] === 3) return {name: 'Three of a Kind', payout: 3};
    if (counts[0] === 2 && counts[1] === 2) return {name: 'Two Pair', payout: 2};
    if (counts[0] === 2) {
        const pairValue = Object.keys(valueCounts).find(k => valueCounts[k] === 2);
        if (parseInt(pairValue) >= 11) return {name: 'Jacks or Better', payout: 1};
    }
    return {name: 'No Win', payout: 0};
}
</script>

<?php include '../footer.php'; ?>
