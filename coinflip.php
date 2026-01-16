<?php 
$pageTitle = "Coin Flip";
include '../header.php'; 
?>
<div class="container my-5">
    <div class="game-container">
        <h1 class="text-center mb-4" style="color: var(--primary-purple);">
            <i class="fas fa-coins me-2"></i>Coin Flip
        </h1>
        <div class="game-interface">
            <div class="balance-display-game">
                <i class="fas fa-wallet me-2"></i>Balance: <span id="gameBalance">10,000</span> Coins
            </div>
            <div class="coin-display mb-4">
                <div class="coin" id="coin">?</div>
            </div>
            <div class="bet-controls mb-4">
                <label for="betAmount" class="text-white me-2">Bet Amount:</label>
                <input type="number" id="betAmount" class="bet-input" value="100" min="10" max="1000" step="10">
            </div>
            <div class="text-center mb-4">
                <button class="btn btn-bet me-3" data-side="heads">HEADS (2x)</button>
                <button class="btn btn-bet" data-side="tails">TAILS (2x)</button>
            </div>
            <div class="text-center">
                <button id="flipBtn" class="btn btn-primary btn-lg" disabled>
                    <i class="fas fa-sync-alt me-2"></i>FLIP COIN
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
.coin-display { display: flex; justify-content: center; padding: 2rem; }
.coin { width: 150px; height: 150px; background: var(--accent-gold); border: 5px solid #FFA500; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; font-weight: bold; color: var(--primary-purple); box-shadow: 0 0 30px rgba(255, 215, 0, 0.5); }
.coin.flipping { animation: flip 0.6s ease-in-out; }
@keyframes flip { 0%, 100% { transform: rotateY(0); } 50% { transform: rotateY(180deg); } }
.btn-bet { background: rgba(255, 255, 255, 0.2); border: 2px solid white; color: white; padding: 1rem 2rem; font-weight: 600; }
.btn-bet.selected { background: var(--accent-gold); color: var(--primary-purple); }
</style>
<script>
let selectedSide = null;
document.querySelectorAll('.btn-bet').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.btn-bet').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        selectedSide = this.dataset.side;
        document.getElementById('flipBtn').disabled = false;
    });
});
document.getElementById('flipBtn').addEventListener('click', () => {
    const betAmount = parseInt(document.getElementById('betAmount').value);
    if (!selectedSide || betAmount < 10 || betAmount > currency.getBalance()) {
        currency.showNotification('Invalid bet!', 'lose');
        return;
    }
    currency.subtractBalance(betAmount);
    const coin = document.getElementById('coin');
    coin.classList.add('flipping');
    setTimeout(() => {
        const result = Math.random() < 0.5 ? 'heads' : 'tails';
        coin.textContent = result === 'heads' ? 'H' : 'T';
        coin.classList.remove('flipping');
        if (result === selectedSide) {
            const winAmount = betAmount * 2;
            currency.addBalance(winAmount);
            currency.showNotification(`🎉 ${result.toUpperCase()}! You won ${winAmount.toLocaleString()} coins!`, 'win');
        } else {
            currency.showNotification(`${result.toUpperCase()}. You lost ${betAmount.toLocaleString()} coins.`, 'lose');
        }
    }, 600);
});
</script>
<?php include '../footer.php'; ?>
