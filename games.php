<?php 
$pageTitle = "All Games";
include 'header.php'; 
?>

<div class="container my-5">
    <h1 class="section-heading">Explore Our Casino Games</h1>
    <p class="lead text-center mb-5">Discover 11 exciting casino games, each offering unique gameplay, thrilling features, and the chance to win big with virtual coins. From classic slots to strategic card games, there's something for everyone!</p>
    
    <div class="row">
        <div class="col-lg-10 mx-auto">
            
            <!-- Introduction Section -->
            <div class="card p-5 mb-5 bg-light">
                <h2 class="card-title"><i class="fas fa-star me-2"></i>Why Play on AQUASTRUCT Casino?</h2>
                <div class="row mt-4">
                    <div class="col-md-6">
                        <ul class="feature-list">
                            <li><i class="fas fa-check-circle text-success me-2"></i><strong>100% Free:</strong> No deposits, no hidden costs</li>
                            <li><i class="fas fa-check-circle text-success me-2"></i><strong>11 Unique Games:</strong> Variety for every taste</li>
                            <li><i class="fas fa-check-circle text-success me-2"></i><strong>Fair Play:</strong> Random outcomes guaranteed</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <ul class="feature-list">
                            <li><i class="fas fa-check-circle text-success me-2"></i><strong>No Registration:</strong> Play instantly</li>
                            <li><i class="fas fa-check-circle text-success me-2"></i><strong>Responsive Design:</strong> Works on all devices</li>
                            <li><i class="fas fa-check-circle text-success me-2"></i><strong>Authentic Experience:</strong> Real casino feel</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- Card Games Section -->
            <div class="game-category-section mb-5">
                <h2 class="category-heading"><i class="fas fa-spade me-2"></i>Card Games</h2>
                <p class="category-description">Test your skills and strategy with our collection of classic card games. These games reward smart decision-making and understanding of probabilities.</p>
                
                <div class="row g-4 mt-3">
                    <div class="col-md-6">
                        <a href="poker.php" class="text-decoration-none">
                            <div class="game-card-detailed">
                                <div class="game-header">
                                    <div class="game-icon-large">
                                        <i class="fas fa-diamond"></i>
                                    </div>
                                    <div>
                                        <h3 class="game-title-large">Video Poker</h3>
                                        <span class="game-badge">Strategic</span>
                                    </div>
                                </div>
                                <p class="game-desc-detailed">Build the best five-card poker hand! Hold your favorite cards, draw new ones, and aim for the ultimate Royal Flush that pays 250x your bet.</p>
                                <div class="game-stats">
                                    <div class="stat-item">
                                        <i class="fas fa-trophy"></i>
                                        <span>Max Win: 250x</span>
                                    </div>
                                    <div class="stat-item">
                                        <i class="fas fa-chart-bar"></i>
                                        <span>Skill-Based</span>
                                    </div>
                                </div>
                                <div class="game-features">
                                    <h5>Key Features:</h5>
                                    <ul>
                                        <li>Standard poker hand rankings</li>
                                        <li>Hold/Draw mechanics</li>
                                        <li>Royal Flush, Straight Flush, Four of a Kind</li>
                                        <li>Clear payout table displayed</li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="col-md-6">
                        <a href="blackjack.php" class="text-decoration-none">
                            <div class="game-card-detailed">
                                <div class="game-header">
                                    <div class="game-icon-large">
                                        <i class="fas fa-spade"></i>
                                    </div>
                                    <div>
                                        <h3 class="game-title-large">Blackjack</h3>
                                        <span class="game-badge">Classic</span>
                                    </div>
                                </div>
                                <p class="game-desc-detailed">The timeless casino classic! Beat the dealer by getting as close to 21 as possible without going over. Hit, stand, and make strategic decisions.</p>
                                <div class="game-stats">
                                    <div class="stat-item">
                                        <i class="fas fa-trophy"></i>
                                        <span>Blackjack: 3:2</span>
                                    </div>
                                    <div class="stat-item">
                                        <i class="fas fa-brain"></i>
                                        <span>Strategy Game</span>
                                    </div>
                                </div>
                                <div class="game-features">
                                    <h5>Key Features:</h5>
                                    <ul>
                                        <li>Standard blackjack rules</li>
                                        <li>Dealer AI follows casino rules</li>
                                        <li>Hit, Stand, and Double options</li>
                                        <li>Natural blackjack pays 3:2</li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="col-md-6">
                        <a href="baccarat.php" class="text-decoration-none">
                            <div class="game-card-detailed">
                                <div class="game-header">
                                    <div class="game-icon-large">
                                        <i class="fas fa-heart"></i>
                                    </div>
                                    <div>
                                        <h3 class="game-title-large">Baccarat</h3>
                                        <span class="game-badge">Elegant</span>
                                    </div>
                                </div>
                                <p class="game-desc-detailed">Experience the elegance of high-stakes casino gaming! Bet on Player, Banker, or Tie. Simple rules, sophisticated gameplay.</p>
                                <div class="game-stats">
                                    <div class="stat-item">
                                        <i class="fas fa-trophy"></i>
                                        <span>Tie: 8x</span>
                                    </div>
                                    <div class="stat-item">
                                        <i class="fas fa-star"></i>
                                        <span>VIP Favorite</span>
                                    </div>
                                </div>
                                <div class="game-features">
                                    <h5>Key Features:</h5>
                                    <ul>
                                        <li>Player, Banker, and Tie bets</li>
                                        <li>Authentic third-card rules</li>
                                        <li>Classic casino atmosphere</li>
                                        <li>Easy to learn, exciting to play</li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Slot & Wheel Games Section -->
            <div class="game-category-section mb-5">
                <h2 class="category-heading"><i class="fas fa-coins me-2"></i>Slots & Wheel Games</h2>
                <p class="category-description">Spin to win! These games are all about luck and excitement. Watch the reels spin or the wheel turn and hope for the best outcome.</p>
                
                <div class="row g-4 mt-3">
                    <div class="col-md-6">
                        <a href="slots.php" class="text-decoration-none">
                            <div class="game-card-detailed">
                                <div class="game-header">
                                    <div class="game-icon-large">
                                        <i class="fas fa-coins"></i>
                                    </div>
                                    <div>
                                        <h3 class="game-title-large">Slot Machine</h3>
                                        <span class="game-badge">Popular</span>
                                    </div>
                                </div>
                                <p class="game-desc-detailed">The most iconic casino game! Spin the 3 reels and match symbols across the payline. Lucky 7s pay a massive 500x your bet!</p>
                                <div class="game-stats">
                                    <div class="stat-item">
                                        <i class="fas fa-trophy"></i>
                                        <span>Max Win: 500x</span>
                                    </div>
                                    <div class="stat-item">
                                        <i class="fas fa-bolt"></i>
                                        <span>Fast-Paced</span>
                                    </div>
                                </div>
                                <div class="game-features">
                                    <h5>Key Features:</h5>
                                    <ul>
                                        <li>7 colorful symbols</li>
                                        <li>Classic 3-reel design</li>
                                        <li>Spinning animations</li>
                                        <li>Multiple winning combinations</li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="col-md-6">
                        <a href="roulette.php" class="text-decoration-none">
                            <div class="game-card-detailed">
                                <div class="game-header">
                                    <div class="game-icon-large">
                                        <i class="fas fa-circle-notch"></i>
                                    </div>
                                    <div>
                                        <h3 class="game-title-large">Roulette</h3>
                                        <span class="game-badge">Classic</span>
                                    </div>
                                </div>
                                <p class="game-desc-detailed">The wheel of fortune! European-style roulette with 37 numbers. Bet on red/black, odd/even, specific numbers, or ranges.</p>
                                <div class="game-stats">
                                    <div class="stat-item">
                                        <i class="fas fa-trophy"></i>
                                        <span>Max Win: 35x</span>
                                    </div>
                                    <div class="stat-item">
                                        <i class="fas fa-dice"></i>
                                        <span>Multiple Bets</span>
                                    </div>
                                </div>
                                <div class="game-features">
                                    <h5>Key Features:</h5>
                                    <ul>
                                        <li>European wheel (37 numbers)</li>
                                        <li>Red/Black, Odd/Even bets</li>
                                        <li>Single number bets (35x)</li>
                                        <li>Authentic casino experience</li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="col-md-6">
                        <a href="wheel.php" class="text-decoration-none">
                            <div class="game-card-detailed">
                                <div class="game-header">
                                    <div class="game-icon-large">
                                        <i class="fas fa-dharmachakra"></i>
                                    </div>
                                    <div>
                                        <h3 class="game-title-large">Wheel of Fortune</h3>
                                        <span class="game-badge">Colorful</span>
                                    </div>
                                </div>
                                <p class="game-desc-detailed">Spin the big colorful wheel and watch where it stops! Multiple prize segments with different multipliers.</p>
                                <div class="game-stats">
                                    <div class="stat-item">
                                        <i class="fas fa-trophy"></i>
                                        <span>Variable Prizes</span>
                                    </div>
                                    <div class="stat-item">
                                        <i class="fas fa-palette"></i>
                                        <span>Visual Fun</span>
                                    </div>
                                </div>
                                <div class="game-features">
                                    <h5>Key Features:</h5>
                                    <ul>
                                        <li>Colorful spinning wheel</li>
                                        <li>Multiple prize segments</li>
                                        <li>Easy to understand</li>
                                        <li>Exciting animations</li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Dice & Simple Games Section -->
            <div class="game-category-section mb-5">
                <h2 class="category-heading"><i class="fas fa-dice me-2"></i>Dice & Quick Games</h2>
                <p class="category-description">Fast, fun, and easy to play! Perfect for quick gaming sessions or when you want simple, straightforward entertainment.</p>
                
                <div class="row g-4 mt-3">
                    <div class="col-md-6">
                        <a href="dice.php" class="text-decoration-none">
                            <div class="game-card-detailed">
                                <div class="game-header">
                                    <div class="game-icon-large">
                                        <i class="fas fa-dice"></i>
                                    </div>
                                    <div>
                                        <h3 class="game-title-large">Dice Game</h3>
                                        <span class="game-badge">Simple</span>
                                    </div>
                                </div>
                                <p class="game-desc-detailed">Roll two dice and predict the outcome! Lucky 7 is the most common result and pays 5x. Other combinations offer different payouts.</p>
                                <div class="game-stats">
                                    <div class="stat-item">
                                        <i class="fas fa-trophy"></i>
                                        <span>Lucky 7: 5x</span>
                                    </div>
                                    <div class="stat-item">
                                        <i class="fas fa-bolt"></i>
                                        <span>Quick Play</span>
                                    </div>
                                </div>
                                <div class="game-features">
                                    <h5>Key Features:</h5>
                                    <ul>
                                        <li>Two standard dice</li>
                                        <li>Multiple betting options</li>
                                        <li>Lucky 7 special payout</li>
                                        <li>Fast-paced action</li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="col-md-6">
                        <a href="coinflip.php" class="text-decoration-none">
                            <div class="game-card-detailed">
                                <div class="game-header">
                                    <div class="game-icon-large">
                                        <i class="fas fa-coins"></i>
                                    </div>
                                    <div>
                                        <h3 class="game-title-large">Coin Flip</h3>
                                        <span class="game-badge">Fastest</span>
                                    </div>
                                </div>
                                <p class="game-desc-detailed">The simplest game of chance! Choose Heads or Tails, flip the coin, and double your bet if you guess correctly. 50/50 odds!</p>
                                <div class="game-stats">
                                    <div class="stat-item">
                                        <i class="fas fa-trophy"></i>
                                        <span>Win: 2x</span>
                                    </div>
                                    <div class="stat-item">
                                        <i class="fas fa-tachometer-alt"></i>
                                        <span>Instant</span>
                                    </div>
                                </div>
                                <div class="game-features">
                                    <h5>Key Features:</h5>
                                    <ul>
                                        <li>Heads or Tails choice</li>
                                        <li>50/50 probability</li>
                                        <li>Flip animation</li>
                                        <li>Fastest game available</li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Modern Games Section -->
            <div class="game-category-section mb-5">
                <h2 class="category-heading"><i class="fas fa-gamepad me-2"></i>Modern Casino Games</h2>
                <p class="category-description">Innovative games that bring fresh mechanics and exciting new ways to win. These games offer unique experiences you won't find in traditional casinos.</p>
                
                <div class="row g-4 mt-3">
                    <div class="col-md-6">
                        <a href="crash.php" class="text-decoration-none">
                            <div class="game-card-detailed">
                                <div class="game-header">
                                    <div class="game-icon-large">
                                        <i class="fas fa-chart-line"></i>
                                    </div>
                                    <div>
                                        <h3 class="game-title-large">Crash</h3>
                                        <span class="game-badge">Thrilling</span>
                                    </div>
                                </div>
                                <p class="game-desc-detailed">Watch the multiplier climb higher and higher! Cash out before it crashes to secure your winnings. High risk, high reward!</p>
                                <div class="game-stats">
                                    <div class="stat-item">
                                        <i class="fas fa-trophy"></i>
                                        <span>Unlimited Potential</span>
                                    </div>
                                    <div class="stat-item">
                                        <i class="fas fa-fire"></i>
                                        <span>High Risk</span>
                                    </div>
                                </div>
                                <div class="game-features">
                                    <h5>Key Features:</h5>
                                    <ul>
                                        <li>Rising multiplier</li>
                                        <li>Cash out anytime</li>
                                        <li>Unpredictable crash point</li>
                                        <li>Adrenaline-pumping action</li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="col-md-6">
                        <a href="mines.php" class="text-decoration-none">
                            <div class="game-card-detailed">
                                <div class="game-header">
                                    <div class="game-icon-large">
                                        <i class="fas fa-bomb"></i>
                                    </div>
                                    <div>
                                        <h3 class="game-title-large">Mines</h3>
                                        <span class="game-badge">Strategic</span>
                                    </div>
                                </div>
                                <p class="game-desc-detailed">Minesweeper meets casino! Reveal gems to increase your winnings, but hit a mine and you lose everything. Cash out anytime!</p>
                                <div class="game-stats">
                                    <div class="stat-item">
                                        <i class="fas fa-trophy"></i>
                                        <span>Progressive Wins</span>
                                    </div>
                                    <div class="stat-item">
                                        <i class="fas fa-brain"></i>
                                        <span>Risk Management</span>
                                    </div>
                                </div>
                                <div class="game-features">
                                    <h5>Key Features:</h5>
                                    <ul>
                                        <li>Grid-based gameplay</li>
                                        <li>Reveal gems or mines</li>
                                        <li>Increasing multipliers</li>
                                        <li>Cash out option</li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="col-md-6">
                        <a href="plinko.php" class="text-decoration-none">
                            <div class="game-card-detailed">
                                <div class="game-header">
                                    <div class="game-icon-large">
                                        <i class="fas fa-circle"></i>
                                    </div>
                                    <div>
                                        <h3 class="game-title-large">Plinko</h3>
                                        <span class="game-badge">Fun</span>
                                    </div>
                                </div>
                                <p class="game-desc-detailed">Drop the ball and watch it bounce through pegs! Where it lands determines your prize. Mesmerizing physics-based gameplay.</p>
                                <div class="game-stats">
                                    <div class="stat-item">
                                        <i class="fas fa-trophy"></i>
                                        <span>Variable Prizes</span>
                                    </div>
                                    <div class="stat-item">
                                        <i class="fas fa-eye"></i>
                                        <span>Satisfying</span>
                                    </div>
                                </div>
                                <div class="game-features">
                                    <h5>Key Features:</h5>
                                    <ul>
                                        <li>Physics-based ball drop</li>
                                        <li>Multiple prize slots</li>
                                        <li>Unpredictable bouncing</li>
                                        <li>Visual entertainment</li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="col-md-6">
                        <a href="keno.php" class="text-decoration-none">
                            <div class="game-card-detailed">
                                <div class="game-header">
                                    <div class="game-icon-large">
                                        <i class="fas fa-th"></i>
                                    </div>
                                    <div>
                                        <h3 class="game-title-large">Keno</h3>
                                        <span class="game-badge">Lottery-Style</span>
                                    </div>
                                </div>
                                <p class="game-desc-detailed">Pick your lucky numbers from 1-80, then watch the draw! Match more numbers to win bigger prizes. Like a lottery you can play anytime!</p>
                                <div class="game-stats">
                                    <div class="stat-item">
                                        <i class="fas fa-trophy"></i>
                                        <span>Big Payouts</span>
                                    </div>
                                    <div class="stat-item">
                                        <i class="fas fa-list-ol"></i>
                                        <span>Number Game</span>
                                    </div>
                                </div>
                                <div class="game-features">
                                    <h5>Key Features:</h5>
                                    <ul>
                                        <li>Pick up to 10 numbers</li>
                                        <li>80-number grid</li>
                                        <li>20 numbers drawn</li>
                                        <li>Match more, win more</li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Game Comparison Table -->
            <div class="card p-5 mb-5">
                <h2 class="card-title"><i class="fas fa-table me-2"></i>Quick Game Comparison</h2>
                <p>Not sure which game to try first? Here's a quick comparison to help you choose:</p>
                
                <div class="table-responsive mt-4">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Game</th>
                                <th>Difficulty</th>
                                <th>Max Payout</th>
                                <th>Play Style</th>
                                <th>Best For</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Slot Machine</strong></td>
                                <td><span class="badge bg-success">Easy</span></td>
                                <td>500x</td>
                                <td>Luck-based</td>
                                <td>Quick fun, big wins</td>
                            </tr>
                            <tr>
                                <td><strong>Video Poker</strong></td>
                                <td><span class="badge bg-warning">Medium</span></td>
                                <td>250x</td>
                                <td>Strategic</td>
                                <td>Skill + luck balance</td>
                            </tr>
                            <tr>
                                <td><strong>Blackjack</strong></td>
                                <td><span class="badge bg-warning">Medium</span></td>
                                <td>3:2</td>
                                <td>Strategic</td>
                                <td>Classic casino feel</td>
                            </tr>
                            <tr>
                                <td><strong>Roulette</strong></td>
                                <td><span class="badge bg-success">Easy</span></td>
                                <td>35x</td>
                                <td>Luck-based</td>
                                <td>Multiple bet options</td>
                            </tr>
                            <tr>
                                <td><strong>Dice Game</strong></td>
                                <td><span class="badge bg-success">Easy</span></td>
                                <td>5x</td>
                                <td>Luck-based</td>
                                <td>Fast-paced action</td>
                            </tr>
                            <tr>
                                <td><strong>Baccarat</strong></td>
                                <td><span class="badge bg-success">Easy</span></td>
                                <td>8x</td>
                                <td>Luck-based</td>
                                <td>Elegant simplicity</td>
                            </tr>
                            <tr>
                                <td><strong>Coin Flip</strong></td>
                                <td><span class="badge bg-success">Very Easy</span></td>
                                <td>2x</td>
                                <td>Pure luck</td>
                                <td>Instant results</td>
                            </tr>
                            <tr>
                                <td><strong>Crash</strong></td>
                                <td><span class="badge bg-danger">Hard</span></td>
                                <td>Unlimited</td>
                                <td>Risk management</td>
                                <td>Thrill-seekers</td>
                            </tr>
                            <tr>
                                <td><strong>Mines</strong></td>
                                <td><span class="badge bg-warning">Medium</span></td>
                                <td>Progressive</td>
                                <td>Risk management</td>
                                <td>Strategic players</td>
                            </tr>
                            <tr>
                                <td><strong>Plinko</strong></td>
                                <td><span class="badge bg-success">Easy</span></td>
                                <td>Variable</td>
                                <td>Luck-based</td>
                                <td>Visual fun</td>
                            </tr>
                            <tr>
                                <td><strong>Keno</strong></td>
                                <td><span class="badge bg-success">Easy</span></td>
                                <td>High</td>
                                <td>Luck-based</td>
                                <td>Lottery fans</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <!-- Tips Section -->
            <div class="card p-5 bg-light">
                <h2 class="card-title"><i class="fas fa-lightbulb me-2"></i>Tips for Choosing Your Game</h2>
                <div class="row mt-4">
                    <div class="col-md-6">
                        <h4><i class="fas fa-user-graduate me-2 text-primary"></i>For Beginners:</h4>
                        <p>Start with simple games like <strong>Coin Flip</strong>, <strong>Dice</strong>, or <strong>Slots</strong>. These are easy to understand and don't require strategy.</p>
                    </div>
                    <div class="col-md-6">
                        <h4><i class="fas fa-brain me-2 text-success"></i>For Strategic Players:</h4>
                        <p>Try <strong>Video Poker</strong>, <strong>Blackjack</strong>, or <strong>Mines</strong>. These reward smart decision-making and understanding of probabilities.</p>
                    </div>
                    <div class="col-md-6">
                        <h4><i class="fas fa-bolt me-2 text-warning"></i>For Quick Sessions:</h4>
                        <p><strong>Coin Flip</strong> and <strong>Dice</strong> offer the fastest gameplay. Perfect when you only have a few minutes.</p>
                    </div>
                    <div class="col-md-6">
                        <h4><i class="fas fa-trophy me-2 text-danger"></i>For Big Win Potential:</h4>
                        <p><strong>Slots</strong> (500x), <strong>Video Poker</strong> (250x), and <strong>Crash</strong> (unlimited) offer the highest potential payouts.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>

<style>
.feature-list {
    list-style: none;
    padding: 0;
}

.feature-list li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
}

.game-category-section {
    background: white;
    padding: 3rem;
    border-radius: 12px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
}

.category-heading {
    color: var(--primary-purple);
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 1rem;
}

.category-description {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.8;
}

.game-card-detailed {
    background: white;
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s ease;
    height: 100%;
}

.game-card-detailed:hover {
    border-color: var(--accent-gold);
    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2);
    transform: translateY(-5px);
}

.game-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.game-icon-large {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--primary-purple) 0%, var(--accent-gold) 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
    flex-shrink: 0;
}

.game-title-large {
    color: var(--primary-purple);
    font-weight: 700;
    font-size: 1.5rem;
    margin: 0;
}

.game-badge {
    display: inline-block;
    background: var(--accent-gold);
    color: var(--primary-purple);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-top: 0.25rem;
}

.game-desc-detailed {
    color: #666;
    line-height: 1.8;
    margin-bottom: 1.5rem;
}

.game-stats {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: rgba(26, 11, 46, 0.03);
    border-radius: 8px;
}

.stat-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-purple);
    font-weight: 600;
}

.stat-item i {
    color: var(--accent-gold);
}

.game-features {
    border-top: 2px solid #f0f0f0;
    padding-top: 1.5rem;
}

.game-features h5 {
    color: var(--primary-purple);
    font-weight: 600;
    margin-bottom: 1rem;
}

.game-features ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.game-features li {
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.5rem;
    color: #666;
}

.game-features li:before {
    content: "▸";
    position: absolute;
    left: 0;
    color: var(--accent-gold);
    font-weight: bold;
}
</style>

<?php include 'footer.php'; ?>

            <!-- New Exchange Games Section -->
            <div class="game-category-section mb-5">
                <h2 class="category-heading"><i class="fas fa-exchange-alt me-2"></i>Exchange & Betting Games</h2>
                <p class="category-description">Experience premium betting exchange platforms with massive multipliers and instant payouts!</p>
                
                <div class="row g-4 mt-3">
                    <div class="col-md-6">
                        <a href="winadda.php" class="text-decoration-none">
                            <div class="game-card-detailed">
                                <div class="game-header">
                                    <div class="game-icon-large">
                                        <i class="fas fa-trophy"></i>
                                    </div>
                                    <div>
                                        <h3 class="game-title-large">Winadda</h3>
                                        <span class="game-badge">10,000x Max</span>
                                    </div>
                                </div>
                                <p class="game-description">Premium betting exchange platform with live odds and massive payouts!</p>
                                <div class="game-stats">
                                    <span><i class="fas fa-coins"></i> 10-5,000</span>
                                    <span><i class="fas fa-star"></i> 10,000x</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="col-md-6">
                        <a href="fairdeal.php" class="text-decoration-none">
                            <div class="game-card-detailed">
                                <div class="game-header">
                                    <div class="game-icon-large">
                                        <i class="fas fa-shield-alt"></i>
                                    </div>
                                    <div>
                                        <h3 class="game-title-large">Fairdeal</h3>
                                        <span class="game-badge">Fair Play</span>
                                    </div>
                                </div>
                                <p class="game-description">Transparent betting with guaranteed fair play and honest odds!</p>
                                <div class="game-stats">
                                    <span><i class="fas fa-coins"></i> 5-2,500</span>
                                    <span><i class="fas fa-star"></i> 5,000x</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="col-md-6">
                        <a href="99exch.php" class="text-decoration-none">
                            <div class="game-card-detailed">
                                <div class="game-header">
                                    <div class="game-icon-large">
                                        <i class="fas fa-crown"></i>
                                    </div>
                                    <div>
                                        <h3 class="game-title-large">99exch</h3>
                                        <span class="game-badge">VIP</span>
                                    </div>
                                </div>
                                <p class="game-description">High-stakes exchange with VIP features and premium rewards!</p>
                                <div class="game-stats">
                                    <span><i class="fas fa-coins"></i> 50-10,000</span>
                                    <span><i class="fas fa-star"></i> 20,000x</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="col-md-6">
                        <a href="laser247.php" class="text-decoration-none">
                            <div class="game-card-detailed">
                                <div class="game-header">
                                    <div class="game-icon-large">
                                        <i class="fas fa-bolt"></i>
                                    </div>
                                    <div>
                                        <h3 class="game-title-large">Laser 247</h3>
                                        <span class="game-badge">24/7</span>
                                    </div>
                                </div>
                                <p class="game-description">24/7 instant betting with lightning-fast payouts anytime!</p>
                                <div class="game-stats">
                                    <span><i class="fas fa-coins"></i> 1-1,000</span>
                                    <span><i class="fas fa-star"></i> 2,470x</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="col-md-6">
                        <a href="11xplay.php" class="text-decoration-none">
                            <div class="game-card-detailed">
                                <div class="game-header">
                                    <div class="game-icon-large">
                                        <i class="fas fa-users"></i>
                                    </div>
                                    <div>
                                        <h3 class="game-title-large">11xplay</h3>
                                        <span class="game-badge">Multiplayer</span>
                                    </div>
                                </div>
                                <p class="game-description">Multiplayer betting with 11x multiplier potential and social features!</p>
                                <div class="game-stats">
                                    <span><i class="fas fa-coins"></i> 10-1,000</span>
                                    <span><i class="fas fa-star"></i> 11x</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
