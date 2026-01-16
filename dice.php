<?php 
$pageTitle = "Dice Game";
include '../header.php'; 
?>

<div class="container my-5">
    <div class="game-container">
        <h1 class="text-center mb-4" style="color: var(--primary-purple);">
            <i class="fas fa-dice me-2"></i>Dice Game
        </h1>
        
        <div class="game-interface">
            <!-- Balance Display -->
            <div class="balance-display-game">
                <i class="fas fa-wallet me-2"></i>Balance: <span id="gameBalance">10,000</span> Coins
            </div>
            
            <!-- Dice Display -->
            <div class="dice-container mb-4">
                <div class="dice" id="dice1">
                    <div class="dice-face">1</div>
                </div>
                <div class="dice" id="dice2">
                    <div class="dice-face">1</div>
                </div>
            </div>
            
            <div class="text-center mb-4">
                <h3 class="text-white">Total: <span id="diceTotal">2</span></h3>
            </div>
            
            <!-- Bet Controls -->
            <div class="bet-controls mb-4">
                <label for="betAmount" class="text-white me-2">Bet Amount:</label>
                <input type="number" id="betAmount" class="bet-input" value="100" min="10" max="1000" step="10">
            </div>
            
            <!-- Prediction Buttons -->
            <div class="text-center mb-4">
                <h5 class="text-white mb-3">Choose Your Prediction:</h5>
                <div class="prediction-buttons">
                    <button class="btn btn-prediction" data-prediction="under">
                        <i class="fas fa-arrow-down me-2"></i>Under 7 (2x)
                    </button>
                    <button class="btn btn-prediction" data-prediction="lucky">
                        <i class="fas fa-star me-2"></i>Lucky 7 (5x)
                    </button>
                    <button class="btn btn-prediction" data-prediction="over">
                        <i class="fas fa-arrow-up me-2"></i>Over 7 (2x)
                    </button>
                </div>
            </div>
            
            <div class="text-center">
                <button id="rollBtn" class="btn btn-primary btn-lg" disabled>
                    <i class="fas fa-dice me-2"></i>ROLL DICE
                </button>
            </div>
            
            <!-- Rules -->
            <div class="mt-4 text-center">
                <div class="rules-box">
                    <h5 class="text-white mb-3">How to Play</h5>
                    <p class="text-white mb-2">1. Choose your bet amount</p>
                    <p class="text-white mb-2">2. Select your prediction (Under 7, Lucky 7, or Over 7)</p>
                    <p class="text-white mb-2">3. Roll the dice and win!</p>
                    <p class="text-white mb-0"><strong>Under 7:</strong> Total is 2-6 (Pays 2x)</p>
                    <p class="text-white mb-0"><strong>Lucky 7:</strong> Total is exactly 7 (Pays 5x)</p>
                    <p class="text-white mb-0"><strong>Over 7:</strong> Total is 8-12 (Pays 2x)</p>
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
.dice-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
}

.dice {
    width: 100px;
    height: 100px;
    background: white;
    border: 3px solid var(--accent-gold);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.1s;
}

.dice.rolling {
    animation: roll 0.5s ease-in-out;
}

@keyframes roll {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(90deg); }
    50% { transform: rotate(180deg); }
    75% { transform: rotate(270deg); }
}

.dice-face {
    font-size: 3rem;
    font-weight: bold;
    color: var(--primary-purple);
}

.prediction-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn-prediction {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid var(--accent-gold);
    color: white;
    padding: 1rem 2rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-prediction:hover {
    background: rgba(255, 215, 0, 0.2);
    transform: translateY(-2px);
}

.btn-prediction.selected {
    background: var(--accent-gold);
    color: var(--primary-purple);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
}

.rules-box {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid var(--accent-gold);
    border-radius: 8px;
    padding: 1.5rem;
}
</style>

<script>
const PAYOUTS = {
    under: 2,
    lucky: 5,
    over: 2
};

let selectedPrediction = null;
let isRolling = false;

// Prediction button selection
document.querySelectorAll('.btn-prediction').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.btn-prediction').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        selectedPrediction = this.dataset.prediction;
        document.getElementById('rollBtn').disabled = false;
    });
});

// Roll dice button
document.getElementById('rollBtn').addEventListener('click', rollDice);

function rollDice() {
    if (isRolling || !selectedPrediction) return;
    
    const betAmount = parseInt(document.getElementById('betAmount').value);
    const currentBalance = currency.getBalance();
    
    if (betAmount < 10) {
        currency.showNotification('Minimum bet is 10 coins!', 'lose');
        return;
    }
    
    if (betAmount > currentBalance) {
        currency.showNotification('Insufficient balance!', 'lose');
        return;
    }
    
    // Deduct bet
    currency.subtractBalance(betAmount);
    isRolling = true;
    
    // Add rolling animation
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    dice1.classList.add('rolling');
    dice2.classList.add('rolling');
    
    // Animate dice rolling
    let rollCount = 0;
    const rollInterval = setInterval(() => {
        dice1.querySelector('.dice-face').textContent = Math.floor(Math.random() * 6) + 1;
        dice2.querySelector('.dice-face').textContent = Math.floor(Math.random() * 6) + 1;
        rollCount++;
        
        if (rollCount >= 10) {
            clearInterval(rollInterval);
            
            // Final result
            const result1 = Math.floor(Math.random() * 6) + 1;
            const result2 = Math.floor(Math.random() * 6) + 1;
            const total = result1 + result2;
            
            dice1.querySelector('.dice-face').textContent = result1;
            dice2.querySelector('.dice-face').textContent = result2;
            document.getElementById('diceTotal').textContent = total;
            
            dice1.classList.remove('rolling');
            dice2.classList.remove('rolling');
            
            // Check win
            let won = false;
            if (selectedPrediction === 'under' && total < 7) won = true;
            if (selectedPrediction === 'lucky' && total === 7) won = true;
            if (selectedPrediction === 'over' && total > 7) won = true;
            
            if (won) {
                const multiplier = PAYOUTS[selectedPrediction];
                const winAmount = betAmount * multiplier;
                currency.addBalance(winAmount);
                currency.showNotification(`🎉 You won ${winAmount.toLocaleString()} coins! (${multiplier}x)`, 'win');
            } else {
                currency.showNotification(`You lost ${betAmount.toLocaleString()} coins. Total was ${total}.`, 'lose');
            }
            
            isRolling = false;
        }
    }, 100);
}
</script>

<?php include '../footer.php'; ?>
