<?php 
$pageTitle = "Slot Machine";
include 'header.php'; 
?>

<div class="container my-5">
    <div class="game-container">
        <h1 class="text-center mb-4" style="color: var(--primary-purple);">
            <i class="fas fa-coins me-2"></i>Slot Machine
        </h1>
        
        <div class="game-interface">
            <!-- Balance Display -->
            <div class="balance-display-game">
                <i class="fas fa-wallet me-2"></i>Balance: <span id="gameBalance">10,000</span> Coins
            </div>
            
            <!-- Slot Display -->
            <div class="slot-machine mb-4">
                <div class="slot-reels">
                    <div class="slot-reel" id="reel1">
                        <span class="slot-symbol">🍒</span>
                    </div>
                    <div class="slot-reel" id="reel2">
                        <span class="slot-symbol">🍒</span>
                    </div>
                    <div class="slot-reel" id="reel3">
                        <span class="slot-symbol">🍒</span>
                    </div>
                </div>
            </div>
            
            <!-- Bet Controls -->
            <div class="bet-controls">
                <label for="betAmount" class="text-white me-2">Bet Amount:</label>
                <input type="number" id="betAmount" class="bet-input" value="100" min="10" max="1000" step="10">
                <button id="spinBtn" class="btn btn-primary btn-lg ms-3">
                    <i class="fas fa-sync-alt me-2"></i>SPIN
                </button>
            </div>
            
            <!-- Payout Table -->
            <div class="mt-4 text-center">
                <h5 class="text-white mb-3">Payout Table</h5>
                <div class="payout-table">
                    <div class="payout-row">
                        <span>🍒 🍒 🍒</span>
                        <span>10x</span>
                    </div>
                    <div class="payout-row">
                        <span>🍋 🍋 🍋</span>
                        <span>15x</span>
                    </div>
                    <div class="payout-row">
                        <span>🍊 🍊 🍊</span>
                        <span>20x</span>
                    </div>
                    <div class="payout-row">
                        <span>🍇 🍇 🍇</span>
                        <span>25x</span>
                    </div>
                    <div class="payout-row">
                        <span>💎 💎 💎</span>
                        <span>50x</span>
                    </div>
                    <div class="payout-row">
                        <span>⭐ ⭐ ⭐</span>
                        <span>100x</span>
                    </div>
                    <div class="payout-row">
                        <span>7️⃣ 7️⃣ 7️⃣</span>
                        <span>500x JACKPOT!</span>
                    </div>
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
.slot-machine {
    background: rgba(0, 0, 0, 0.3);
    border: 3px solid var(--accent-gold);
    border-radius: 12px;
    padding: 2rem;
}

.slot-reels {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.slot-reel {
    background: white;
    border: 3px solid var(--accent-gold);
    border-radius: 8px;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);
}

.slot-reel.spinning {
    animation: spin 0.1s linear infinite;
}

@keyframes spin {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}

.payout-table {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid var(--accent-gold);
    border-radius: 8px;
    padding: 1rem;
    display: inline-block;
}

.payout-row {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    padding: 0.5rem 1rem;
    color: white;
    font-size: 1.1rem;
}

.payout-row:nth-child(even) {
    background: rgba(255, 255, 255, 0.05);
}
</style>

<script>
const symbols = ['🍒', '🍋', '🍊', '🍇', '💎', '⭐', '7️⃣'];
const payouts = {
    '🍒': 10,
    '🍋': 15,
    '🍊': 20,
    '🍇': 25,
    '💎': 50,
    '⭐': 100,
    '7️⃣': 500
};

let isSpinning = false;

document.getElementById('spinBtn').addEventListener('click', spin);

function spin() {
    if (isSpinning) return;
    
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
    
    // Add spinning animation
    const reels = [
        document.getElementById('reel1'),
        document.getElementById('reel2'),
        document.getElementById('reel3')
    ];
    
    reels.forEach(reel => reel.classList.add('spinning'));
    
    // Spin for 2 seconds
    setTimeout(() => {
        // Stop spinning and show results
        const results = [
            symbols[Math.floor(Math.random() * symbols.length)],
            symbols[Math.floor(Math.random() * symbols.length)],
            symbols[Math.floor(Math.random() * symbols.length)]
        ];
        
        reels.forEach((reel, index) => {
            reel.classList.remove('spinning');
            reel.querySelector('.slot-symbol').textContent = results[index];
        });
        
        // Check for win
        if (results[0] === results[1] && results[1] === results[2]) {
            const multiplier = payouts[results[0]];
            const winAmount = betAmount * multiplier;
            currency.addBalance(winAmount);
            
            if (multiplier >= 100) {
                currency.showNotification(`🎉 JACKPOT! You won ${winAmount.toLocaleString()} coins! 🎉`, 'win');
            } else {
                currency.showNotification(`🎊 You won ${winAmount.toLocaleString()} coins! (${multiplier}x)`, 'win');
            }
        } else {
            currency.showNotification(`You lost ${betAmount.toLocaleString()} coins. Try again!`, 'lose');
        }
        
        isSpinning = false;
    }, 2000);
}
</script>

<?php include 'footer.php'; ?>
