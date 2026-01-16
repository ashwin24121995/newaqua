<?php 
$pageTitle = "11xplay - Premium Betting Exchange";
include 'header.php'; 
?>

<link rel="stylesheet" href="animations.css">
<script src="sounds.js"></script>

<div class="container my-5">
    <div class="game-header text-center mb-5 fade-in-up">
        <h1 class="game-title">🎰 11xplay 🎰</h1>
        <p class="game-subtitle">Premium Betting Exchange Platform</p>
        <p class="game-description">Experience the thrill of live betting with real-time odds and massive payouts up to 11x!</p>
        <div class="game-stats-row">
            <div class="stat-card">
                <i class="fas fa-coins stat-icon"></i>
                <div class="stat-label">Min Bet</div>
                <div class="stat-value">10 Coins</div>
            </div>
            <div class="stat-card">
                <i class="fas fa-trophy stat-icon"></i>
                <div class="stat-label">Max Bet</div>
                <div class="stat-value">5,000 Coins</div>
            </div>
            <div class="stat-card">
                <i class="fas fa-star stat-icon"></i>
                <div class="stat-label">Max Payout</div>
                <div class="stat-value">11x</div>
            </div>
        </div>
    </div>
    
    <div class="row">
        <div class="col-lg-10 mx-auto">
            
            <!-- Game Visual Banner -->
            <div class="game-banner-container mb-5">
                <img src="assets/11xplay-game.webp" alt="11xplay Game" class="game-banner-image">
                <div class="game-banner-overlay">
                    <button class="btn-start-game" onclick="initializeGame()">
                        <i class="fas fa-play-circle me-2"></i>Start Playing
                    </button>
                </div>
            </div>
            
            <!-- Balance Card -->
            <div class="balance-display-card mb-4">
                <div class="balance-icon"><i class="fas fa-wallet"></i></div>
                <div class="balance-info">
                    <div class="balance-label">Your Balance</div>
                    <div class="balance-amount" id="playerBalance">10,000</div>
                    <div class="balance-currency">COINS</div>
                </div>
            </div>
            
            <!-- Main Game Interface -->
            <div class="game-play-area" id="gamePlayArea" style="display: none;">
                <div class="card game-card">
                    <div class="card-header game-card-header">
                        <h3><i class="fas fa-gamepad me-2"></i>Place Your Bet</h3>
                    </div>
                    <div class="card-body p-4">
                        
                        <!-- Bet Amount Section -->
                        <div class="bet-section mb-4">
                            <label class="bet-label">Select Bet Amount</label>
                            <div class="bet-controls-row">
                                <button class="btn-bet-adjust" onclick="adjustBet(-10)">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <input type="number" id="betInput" class="bet-input-field" value="10" min="10" max="1000" step="10">
                                <button class="btn-bet-adjust" onclick="adjustBet(10)">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="quick-bets mt-3">
                                <button class="btn-quick" onclick="setQuickBet(10)">10</button>
                                <button class="btn-quick" onclick="setQuickBet(50)">50</button>
                                <button class="btn-quick" onclick="setQuickBet(100)">100</button>
                                <button class="btn-quick" onclick="setQuickBet(500)">500</button>
                                <button class="btn-quick" onclick="setQuickBet(1000)">1,000</button>
                                <button class="btn-quick" onclick="setMaxBet()">MAX</button>
                            </div>
                        </div>
                        
                        <!-- Game Result Display -->
                        <div class="result-display" id="resultDisplay" style="display: none;">
                            <div class="result-icon-large" id="resultIcon"></div>
                            <div class="result-message" id="resultMessage"></div>
                            <div class="result-payout" id="resultPayout"></div>
                        </div>
                        
                        <!-- Action Buttons -->
                        <div class="action-buttons-row">
                            <button class="btn-play-main" id="playBtn" onclick="play11xplay()">
                                <i class="fas fa-play-circle me-2"></i>PLAY NOW
                            </button>
                            <button class="btn-reset" onclick="resetGame()">
                                <i class="fas fa-redo-alt me-2"></i>Reset
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <!-- Game Information Section -->
            <div class="game-info-container mt-5">
                <div class="card info-card">
                    <div class="card-body p-5">
                        
                        <h2 class="info-title"><i class="fas fa-info-circle me-3"></i>How to Play 11xplay</h2>
                        
                        <div class="info-section">
                            <h4>🎮 Game Overview</h4>
                            <p>11xplay is a premium betting exchange game that combines the excitement of live betting with the potential for massive wins. With a maximum payout of 11x your bet, every spin could change your fortune! Our advanced algorithm ensures fair play while delivering an authentic casino experience.</p>
                        </div>
                        
                        <div class="info-section">
                            <h4>📋 How It Works</h4>
                            <ol class="info-list">
                                <li><strong>Choose Your Bet:</strong> Select an amount between 10 and 5,000 coins using the bet controls or quick bet buttons.</li>
                                <li><strong>Click Play:</strong> Hit the "PLAY NOW" button to start the game. Your bet will be deducted from your balance.</li>
                                <li><strong>Watch the Action:</strong> The game will process your bet with realistic animations and sound effects.</li>
                                <li><strong>Collect Winnings:</strong> If you win, your payout is automatically added to your balance with celebratory animations!</li>
                            </ol>
                        </div>
                        
                        <div class="info-section">
                            <h4>💰 Payout Structure</h4>
                            <div class="payout-grid">
                                <div class="payout-item">
                                    <div class="payout-multiplier">2x</div>
                                    <div class="payout-desc">Small Win</div>
                                    <div class="payout-odds">30% Chance</div>
                                </div>
                                <div class="payout-item">
                                    <div class="payout-multiplier">5x</div>
                                    <div class="payout-desc">Medium Win</div>
                                    <div class="payout-odds">15% Chance</div>
                                </div>
                                <div class="payout-item">
                                    <div class="payout-multiplier">10x</div>
                                    <div class="payout-desc">Big Win</div>
                                    <div class="payout-odds">5% Chance</div>
                                </div>
                                <div class="payout-item payout-jackpot">
                                    <div class="payout-multiplier">11x</div>
                                    <div class="payout-desc">JACKPOT!</div>
                                    <div class="payout-odds">0.1% Chance</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="info-section">
                            <h4>🎯 Pro Tips & Strategies</h4>
                            <ul class="tips-list">
                                <li><i class="fas fa-check-circle"></i> Start with smaller bets to understand the game mechanics</li>
                                <li><i class="fas fa-check-circle"></i> Use the quick bet buttons for faster gameplay</li>
                                <li><i class="fas fa-check-circle"></i> Set a budget before you start and stick to it</li>
                                <li><i class="fas fa-check-circle"></i> Don't chase losses - know when to take a break</li>
                                <li><i class="fas fa-check-circle"></i> Remember that each spin is independent - past results don't affect future outcomes</li>
                                <li><i class="fas fa-check-circle"></i> Play for entertainment, not as a way to make money</li>
                            </ul>
                        </div>
                        
                        <div class="info-section">
                            <h4>🔊 Sound & Visual Effects</h4>
                            <p>11xplay features immersive audio and visual effects to enhance your gaming experience:</p>
                            <ul class="features-list">
                                <li><strong>Win Sounds:</strong> Celebratory audio plays when you win</li>
                                <li><strong>Jackpot Animation:</strong> Spectacular confetti and popup for massive wins</li>
                                <li><strong>Spin Effects:</strong> Realistic spinning sounds during gameplay</li>
                                <li><strong>Button Feedback:</strong> Click sounds for all interactions</li>
                            </ul>
                            <p class="mt-3">Use the sound toggle button (bottom right) to control audio.</p>
                        </div>
                        
                        <div class="alert alert-warning-custom mt-4">
                            <h5><i class="fas fa-exclamation-triangle me-2"></i>Important Reminder</h5>
                            <p>This is a social casino game using virtual currency for entertainment purposes only. Virtual coins have no real-world monetary value and cannot be exchanged for cash or prizes. All outcomes are determined by a random number generator to ensure fair play. Please play responsibly and within your means.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>

<style>
:root {
    --game-primary: #1a0b2e;
    --game-gold: #ffd700;
    --game-purple: #6a0dad;
    --game-green: #28a745;
    --game-red: #dc3545;
}

.game-header {
    padding: 2rem 0;
}

.game-title {
    font-size: 4rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--game-gold) 0%, #ffed4e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 3px 3px 6px rgba(0,0,0,0.3);
    margin-bottom: 1rem;
    animation: pulse 2s infinite;
}

.game-subtitle {
    font-size: 1.5rem;
    color: var(--game-purple);
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.game-description {
    font-size: 1.1rem;
    color: #666;
    max-width: 700px;
    margin: 0 auto 2rem;
}

.game-stats-row {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.stat-card {
    background: linear-gradient(135deg, var(--game-primary) 0%, var(--game-purple) 100%);
    padding: 1.5rem 2rem;
    border-radius: 15px;
    text-align: center;
    min-width: 150px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-5px);
}

.stat-icon {
    font-size: 2rem;
    color: var(--game-gold);
    margin-bottom: 0.5rem;
}

.stat-label {
    color: rgba(255,255,255,0.8);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.stat-value {
    color: white;
    font-size: 1.5rem;
    font-weight: 800;
    margin-top: 0.5rem;
}

.game-banner-container {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 50px rgba(0,0,0,0.3);
}

.game-banner-image {
    width: 100%;
    height: auto;
    display: block;
}

.game-banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(26,11,46,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.4s ease;
}

.game-banner-container:hover .game-banner-overlay {
    opacity: 1;
}

.btn-start-game {
    background: linear-gradient(135deg, var(--game-gold) 0%, #ffed4e 100%);
    color: var(--game-primary);
    border: none;
    padding: 1.5rem 4rem;
    font-size: 1.8rem;
    font-weight: 800;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(255,215,0,0.5);
    transition: all 0.3s ease;
    text-transform: uppercase;
}

.btn-start-game:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 40px rgba(255,215,0,0.7);
}

.balance-display-card {
    background: linear-gradient(135deg, var(--game-primary) 0%, #2d1b4e 100%);
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    box-shadow: 0 5px 30px rgba(0,0,0,0.3);
}

.balance-icon {
    font-size: 3rem;
    color: var(--game-gold);
}

.balance-info {
    flex: 1;
}

.balance-label {
    color: rgba(255,255,255,0.7);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.balance-amount {
    font-size: 3.5rem;
    font-weight: 900;
    color: var(--game-gold);
    line-height: 1;
    margin: 0.5rem 0;
}

.balance-currency {
    color: rgba(255,255,255,0.7);
    font-size: 1.2rem;
    font-weight: 600;
}

.game-play-area {
    animation: fadeInUp 0.6s ease;
}

.game-card {
    border: none;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
}

.game-card-header {
    background: linear-gradient(135deg, var(--game-purple) 0%, var(--game-primary) 100%);
    color: white;
    padding: 1.5rem;
    border-radius: 20px 20px 0 0;
}

.game-card-header h3 {
    margin: 0;
    font-weight: 700;
}

.bet-section {
    background: rgba(106,13,173,0.05);
    padding: 2rem;
    border-radius: 15px;
}

.bet-label {
    display: block;
    font-weight: 700;
    color: var(--game-primary);
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.bet-controls-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.btn-bet-adjust {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--game-purple);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-bet-adjust:hover {
    background: var(--game-gold);
    color: var(--game-primary);
    transform: scale(1.1);
}

.bet-input-field {
    flex: 1;
    padding: 1.2rem;
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
    border: 4px solid var(--game-purple);
    border-radius: 15px;
    color: var(--game-primary);
}

.quick-bets {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
}

.btn-quick {
    padding: 0.75rem 1.5rem;
    background: white;
    border: 3px solid var(--game-purple);
    border-radius: 10px;
    color: var(--game-purple);
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-quick:hover {
    background: var(--game-purple);
    color: white;
    transform: translateY(-2px);
}

.result-display {
    background: linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(106,13,173,0.1) 100%);
    padding: 3rem;
    border-radius: 15px;
    text-align: center;
    margin-bottom: 2rem;
    animation: fadeInUp 0.5s ease;
}

.result-icon-large {
    font-size: 5rem;
    margin-bottom: 1rem;
}

.result-message {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
}

.result-payout {
    font-size: 3rem;
    font-weight: 900;
}

.action-buttons-row {
    display: flex;
    gap: 1rem;
}

.btn-play-main {
    flex: 2;
    background: linear-gradient(135deg, var(--game-gold) 0%, #ffed4e 100%);
    color: var(--game-primary);
    border: none;
    padding: 1.5rem 3rem;
    font-size: 1.5rem;
    font-weight: 800;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
}

.btn-play-main:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255,215,0,0.5);
}

.btn-play-main:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.btn-reset {
    flex: 1;
    background: white;
    color: var(--game-purple);
    border: 3px solid var(--game-purple);
    padding: 1.5rem 2rem;
    font-size: 1.3rem;
    font-weight: 700;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
}

.btn-reset:hover {
    background: var(--game-purple);
    color: white;
}

.game-info-container {
    margin-top: 4rem;
}

.info-card {
    border: none;
    border-radius: 20px;
    box-shadow: 0 5px 30px rgba(0,0,0,0.1);
}

.info-title {
    color: var(--game-primary);
    font-weight: 800;
    margin-bottom: 2rem;
    font-size: 2.5rem;
}

.info-section {
    margin-bottom: 3rem;
}

.info-section h4 {
    color: var(--game-purple);
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.info-section p {
    color: #555;
    line-height: 1.8;
    font-size: 1.05rem;
}

.info-list {
    padding-left: 1.5rem;
}

.info-list li {
    color: #555;
    line-height: 2;
    margin-bottom: 1rem;
    font-size: 1.05rem;
}

.payout-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.payout-item {
    background: rgba(106,13,173,0.05);
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    border: 3px solid transparent;
    transition: all 0.3s ease;
}

.payout-item:hover {
    border-color: var(--game-purple);
    transform: translateY(-5px);
}

.payout-jackpot {
    background: linear-gradient(135deg, rgba(255,215,0,0.2) 0%, rgba(255,237,78,0.2) 100%);
    border-color: var(--game-gold);
}

.payout-multiplier {
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--game-purple);
    margin-bottom: 0.5rem;
}

.payout-jackpot .payout-multiplier {
    color: var(--game-gold);
}

.payout-desc {
    font-weight: 700;
    color: #333;
    margin-bottom: 0.5rem;
}

.payout-odds {
    color: #666;
    font-weight: 600;
}

.tips-list, .features-list {
    list-style: none;
    padding: 0;
}

.tips-list li, .features-list li {
    padding: 0.75rem 0;
    color: #555;
    font-size: 1.05rem;
}

.tips-list li i {
    color: var(--game-green);
    margin-right: 0.75rem;
}

.alert-warning-custom {
    background: linear-gradient(135deg, #fff3cd 0%, #ffe8a1 100%);
    border: 3px solid #ffc107;
    border-radius: 15px;
    padding: 2rem;
}

.alert-warning-custom h5 {
    color: #856404;
    font-weight: 700;
    margin-bottom: 1rem;
}

.alert-warning-custom p {
    color: #856404;
    margin: 0;
    line-height: 1.8;
}

@media (max-width: 768px) {
    .game-title {
        font-size: 2.5rem;
    }
    
    .game-stats-row {
        flex-direction: column;
        gap: 1rem;
    }
    
    .stat-card {
        width: 100%;
    }
    
    .balance-display-card {
        flex-direction: column;
        text-align: center;
    }
    
    .balance-amount {
        font-size: 2.5rem;
    }
    
    .action-buttons-row {
        flex-direction: column;
    }
    
    .payout-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<script>
let playerBalance = parseInt(localStorage.getItem('balance')) || 10000;
let isGameActive = false;

function updateBalanceDisplay() {
    document.getElementById('playerBalance').textContent = playerBalance.toLocaleString();
    localStorage.setItem('balance', playerBalance);
}

function initializeGame() {
    document.getElementById('gamePlayArea').style.display = 'block';
    document.querySelector('.game-banner-overlay').style.display = 'none';
    casinoSounds.playClick();
    updateBalanceDisplay();
    window.scrollTo({top: document.getElementById('gamePlayArea').offsetTop - 100, behavior: 'smooth'});
}

function adjustBet(amount) {
    const input = document.getElementById('betInput');
    let current = parseInt(input.value) || 10;
    let newValue = current + amount;
    newValue = Math.max(10, Math.min(newValue, 5000, playerBalance));
    input.value = newValue;
    casinoSounds.playClick();
}

function setQuickBet(amount) {
    const input = document.getElementById('betInput');
    input.value = Math.min(amount, playerBalance);
    casinoSounds.playClick();
}

function setMaxBet() {
    const input = document.getElementById('betInput');
    input.value = Math.min(5000, playerBalance);
    casinoSounds.playClick();
}

function play11xplay() {
    if (isGameActive) return;
    
    const betAmount = parseInt(document.getElementById('betInput').value);
    
    if (betAmount < 10 || betAmount > 5000) {
        alert('Bet must be between 10 and 5,000 coins!');
        return;
    }
    
    if (betAmount > playerBalance) {
        alert('Insufficient balance!');
        return;
    }
    
    isGameActive = true;
    document.getElementById('playBtn').disabled = true;
    document.getElementById('resultDisplay').style.display = 'none';
    
    playerBalance -= betAmount;
    updateBalanceDisplay();
    
    casinoSounds.playSpin();
    
    setTimeout(() => {
        const random = Math.random();
        let multiplier = 0;
        let message = '';
        let icon = '';
        let color = '';
        
        if (random < 0.001) {
            multiplier = 11;
            message = '🎰 JACKPOT! 🎰';
            icon = '💰💎💰';
            color = '#FFD700';
            casinoSounds.playJackpot();
            const winAmount = betAmount * multiplier;
            playerBalance += winAmount;
            setTimeout(() => jackpotAnimation.show(winAmount), 500);
        } else if (random < 0.05) {
            multiplier = 10;
            message = 'BIG WIN!';
            icon = '🎉🏆🎉';
            color = '#28a745';
            casinoSounds.playWin();
            const winAmount = betAmount * multiplier;
            playerBalance += winAmount;
            setTimeout(() => winAnimation.show(winAmount), 500);
        } else if (random < 0.15) {
            multiplier = 5;
            message = 'Nice Win!';
            icon = '✨💫✨';
            color = '#20c997';
            casinoSounds.playWin();
            playerBalance += betAmount * multiplier;
        } else if (random < 0.30) {
            multiplier = 2;
            message = 'You Won!';
            icon = '🎊🎈🎊';
            color = '#17a2b8';
            casinoSounds.playWin();
            playerBalance += betAmount * multiplier;
        } else {
            multiplier = 0;
            message = 'Try Again';
            icon = '😔';
            color = '#dc3545';
            casinoSounds.playLoss();
        }
        
        document.getElementById('resultIcon').textContent = icon;
        document.getElementById('resultMessage').textContent = message;
        document.getElementById('resultMessage').style.color = color;
        
        if (multiplier > 0) {
            const winAmount = betAmount * multiplier;
            document.getElementById('resultPayout').textContent = '+' + winAmount.toLocaleString() + ' COINS';
            document.getElementById('resultPayout').style.color = color;
        } else {
            document.getElementById('resultPayout').textContent = '-' + betAmount.toLocaleString() + ' COINS';
            document.getElementById('resultPayout').style.color = color;
        }
        
        document.getElementById('resultDisplay').style.display = 'block';
        updateBalanceDisplay();
        
        isGameActive = false;
        document.getElementById('playBtn').disabled = false;
    }, 2500);
}

function resetGame() {
    document.getElementById('betInput').value = 10;
    document.getElementById('resultDisplay').style.display = 'none';
    casinoSounds.playClick();
}

updateBalanceDisplay();
</script>

<?php include 'footer.php'; ?>
