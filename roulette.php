<?php 
$pageTitle = "Roulette";
include 'header.php'; 
?>

<div class="container my-5">
    <div class="game-container">
        <h1 class="text-center mb-4" style="color: var(--primary-purple);">
            <i class="fas fa-circle-notch me-2"></i>Roulette
        </h1>
        
        <div class="game-interface">
            <!-- Balance Display -->
            <div class="balance-display-game">
                <i class="fas fa-wallet me-2"></i>Balance: <span id="gameBalance">10,000</span> Coins
            </div>
            
            <!-- Roulette Wheel -->
            <div class="roulette-wheel-container mb-4">
                <div class="roulette-wheel" id="rouletteWheel">
                    <div class="wheel-center">
                        <span id="winningNumber">0</span>
                    </div>
                </div>
            </div>
            
            <!-- Bet Controls -->
            <div class="bet-controls mb-4">
                <label for="betAmount" class="text-white me-2">Bet Amount:</label>
                <input type="number" id="betAmount" class="bet-input" value="100" min="10" max="1000" step="10">
            </div>
            
            <!-- Betting Options -->
            <div class="betting-board mb-4">
                <h5 class="text-white text-center mb-3">Place Your Bets</h5>
                <div class="bet-options">
                    <button class="btn btn-bet red" data-type="color" data-value="red">
                        Red (2x)
                    </button>
                    <button class="btn btn-bet black" data-type="color" data-value="black">
                        Black (2x)
                    </button>
                    <button class="btn btn-bet green" data-type="number" data-value="0">
                        0 (35x)
                    </button>
                </div>
                <div class="bet-options mt-3">
                    <button class="btn btn-bet" data-type="range" data-value="low">
                        1-18 (2x)
                    </button>
                    <button class="btn btn-bet" data-type="parity" data-value="even">
                        Even (2x)
                    </button>
                    <button class="btn btn-bet" data-type="parity" data-value="odd">
                        Odd (2x)
                    </button>
                    <button class="btn btn-bet" data-type="range" data-value="high">
                        19-36 (2x)
                    </button>
                </div>
            </div>
            
            <div class="text-center">
                <button id="spinBtn" class="btn btn-primary btn-lg" disabled>
                    <i class="fas fa-sync-alt me-2"></i>SPIN WHEEL
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
.roulette-wheel-container {
    display: flex;
    justify-content: center;
    padding: 2rem;
}

.roulette-wheel {
    width: 200px;
    height: 200px;
    border: 10px solid var(--accent-gold);
    border-radius: 50%;
    background: conic-gradient(
        from 0deg,
        #dc3545 0deg 10deg,
        #000 10deg 20deg,
        #dc3545 20deg 30deg,
        #000 30deg 40deg,
        #dc3545 40deg 50deg,
        #000 50deg 60deg,
        #dc3545 60deg 70deg,
        #000 70deg 80deg,
        #dc3545 80deg 90deg,
        #000 90deg 100deg,
        #dc3545 100deg 110deg,
        #000 110deg 120deg,
        #dc3545 120deg 130deg,
        #000 130deg 140deg,
        #dc3545 140deg 150deg,
        #000 150deg 160deg,
        #dc3545 160deg 170deg,
        #000 170deg 180deg,
        #dc3545 180deg 190deg,
        #000 190deg 200deg,
        #dc3545 200deg 210deg,
        #000 210deg 220deg,
        #dc3545 220deg 230deg,
        #000 230deg 240deg,
        #dc3545 240deg 250deg,
        #000 250deg 260deg,
        #dc3545 260deg 270deg,
        #000 270deg 280deg,
        #dc3545 280deg 290deg,
        #000 290deg 300deg,
        #dc3545 300deg 310deg,
        #000 310deg 320deg,
        #dc3545 320deg 330deg,
        #000 330deg 340deg,
        #dc3545 340deg 350deg,
        #000 350deg 360deg
    );
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
    transition: transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99);
}

.roulette-wheel.spinning {
    transform: rotate(1800deg);
}

.wheel-center {
    width: 80px;
    height: 80px;
    background: white;
    border: 3px solid var(--accent-gold);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary-purple);
}

.betting-board {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid var(--accent-gold);
    border-radius: 8px;
    padding: 1.5rem;
}

.bet-options {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn-bet {
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    color: white;
    padding: 1rem 1.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
    min-width: 120px;
}

.btn-bet.red {
    background: #dc3545;
    border-color: #dc3545;
}

.btn-bet.black {
    background: #000;
    border-color: #000;
}

.btn-bet.green {
    background: #28a745;
    border-color: #28a745;
}

.btn-bet:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.btn-bet.selected {
    border-color: var(--accent-gold);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
}
</style>

<script>
const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
const blackNumbers = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

let selectedBet = null;
let isSpinning = false;

// Bet selection
document.querySelectorAll('.btn-bet').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.btn-bet').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        selectedBet = {
            type: this.dataset.type,
            value: this.dataset.value
        };
        document.getElementById('spinBtn').disabled = false;
    });
});

// Spin button
document.getElementById('spinBtn').addEventListener('click', spinWheel);

function spinWheel() {
    if (isSpinning || !selectedBet) return;
    
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
    isSpinning = true;
    
    // Spin animation
    const wheel = document.getElementById('rouletteWheel');
    wheel.classList.add('spinning');
    
    setTimeout(() => {
        // Generate result
        const result = Math.floor(Math.random() * 37); // 0-36
        document.getElementById('winningNumber').textContent = result;
        wheel.classList.remove('spinning');
        
        // Check win
        let won = false;
        let multiplier = 0;
        
        if (selectedBet.type === 'number' && result === 0) {
            won = true;
            multiplier = 35;
        } else if (selectedBet.type === 'color') {
            if (selectedBet.value === 'red' && redNumbers.includes(result)) {
                won = true;
                multiplier = 2;
            } else if (selectedBet.value === 'black' && blackNumbers.includes(result)) {
                won = true;
                multiplier = 2;
            }
        } else if (selectedBet.type === 'range') {
            if (selectedBet.value === 'low' && result >= 1 && result <= 18) {
                won = true;
                multiplier = 2;
            } else if (selectedBet.value === 'high' && result >= 19 && result <= 36) {
                won = true;
                multiplier = 2;
            }
        } else if (selectedBet.type === 'parity' && result !== 0) {
            if (selectedBet.value === 'even' && result % 2 === 0) {
                won = true;
                multiplier = 2;
            } else if (selectedBet.value === 'odd' && result % 2 === 1) {
                won = true;
                multiplier = 2;
            }
        }
        
        if (won) {
            const winAmount = betAmount * multiplier;
            currency.addBalance(winAmount);
            currency.showNotification(`🎉 Number ${result}! You won ${winAmount.toLocaleString()} coins! (${multiplier}x)`, 'win');
        } else {
            currency.showNotification(`Number ${result}. You lost ${betAmount.toLocaleString()} coins.`, 'lose');
        }
        
        isSpinning = false;
    }, 3000);
}
</script>

<?php include 'footer.php'; ?>
