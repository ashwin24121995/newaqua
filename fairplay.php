<?php 
$pageTitle = "Fair Play";
include 'header.php'; 
?>

<div class="container my-5">
    <h1 class="section-heading">Fair Play Policy</h1>
    <p class="lead text-center mb-5">At AQUASTRUCT Casino, fairness and transparency are at the heart of everything we do. Learn about our commitment to providing a fair gaming experience for all players.</p>
    
    <div class="row">
        <div class="col-lg-10 mx-auto">
            
            <div class="card p-5 mb-4">
                <h2 class="card-title"><i class="fas fa-balance-scale me-2"></i>Our Fair Play Commitment</h2>
                <p>AQUASTRUCT Casino is dedicated to providing a fair, transparent, and enjoyable gaming experience for all our players. While our platform uses virtual currency with no real-world value, we believe that maintaining the same standards of fairness found in real casinos is essential to delivering authentic entertainment.</p>
                <p>Every game on our platform is designed to operate with genuine randomness and unpredictability, ensuring that all players have an equal opportunity to win based purely on chance and, where applicable, skill.</p>
                <p>We understand that trust is the foundation of any gaming platform. That's why we've built AQUASTRUCT Casino with transparency and integrity as core principles. This Fair Play Policy outlines exactly how we ensure fairness across all our games.</p>
            </div>
            
            <div class="card p-5 mb-4">
                <h2 class="card-title"><i class="fas fa-random me-2"></i>Random Number Generation</h2>
                <p>All games on AQUASTRUCT Casino use Random Number Generation (RNG) technology to ensure fair and unpredictable outcomes. Here's what this means:</p>
                
                <div class="feature-list mt-4">
                    <div class="feature-item">
                        <div class="feature-icon"><i class="fas fa-check-circle"></i></div>
                        <div class="feature-content">
                            <h4>True Randomness</h4>
                            <p>Every spin, deal, roll, or draw is generated using JavaScript's built-in random number generator, ensuring outcomes are genuinely random and not predetermined. The Math.random() function provides cryptographically secure randomness that cannot be predicted or manipulated.</p>
                        </div>
                    </div>
                    
                    <div class="feature-item">
                        <div class="feature-icon"><i class="fas fa-check-circle"></i></div>
                        <div class="feature-content">
                            <h4>Independent Results</h4>
                            <p>Each game round is completely independent of previous results. Past wins or losses do not influence future outcomes in any way. This is known as the "independence of events" principle - the slot machine doesn't "remember" that you just won, and the roulette wheel doesn't "owe" you a win after several losses.</p>
                        </div>
                    </div>
                    
                    <div class="feature-item">
                        <div class="feature-icon"><i class="fas fa-check-circle"></i></div>
                        <div class="feature-content">
                            <h4>No Manipulation</h4>
                            <p>Game outcomes cannot be manipulated or predicted by us or anyone else. The results are determined by chance alone. We don't have any "back door" to control results, and we don't adjust odds based on player behavior, bet size, or win/loss history.</p>
                        </div>
                    </div>
                    
                    <div class="feature-item">
                        <div class="feature-icon"><i class="fas fa-check-circle"></i></div>
                        <div class="feature-content">
                            <h4>Equal Opportunity</h4>
                            <p>All players have exactly the same odds of winning. There are no hidden advantages or disadvantages based on player status, bet size, or history. A player betting 10 coins has the same probability of winning as someone betting 1,000 coins (though the payout amounts differ proportionally).</p>
                        </div>
                    </div>
                </div>
                
                <div class="alert alert-info mt-4">
                    <h5><i class="fas fa-info-circle me-2"></i>Technical Details</h5>
                    <p>For those interested in the technical implementation: Our games use the JavaScript Math.random() function, which generates pseudo-random numbers with a period long enough to ensure unpredictability for gaming purposes. Each game initializes its own random seed, and outcomes are calculated client-side in your browser, meaning even we cannot see or influence the results before they happen.</p>
                </div>
            </div>
            
            <div class="card p-5 mb-4">
                <h2 class="card-title"><i class="fas fa-chart-bar me-2"></i>Game Odds & Payouts</h2>
                <p>Each game on AQUASTRUCT Casino has clearly defined odds and payout structures. We believe in complete transparency about your chances of winning:</p>
                
                <table class="table table-striped table-hover mt-4">
                    <thead class="table-dark">
                        <tr>
                            <th>Game</th>
                            <th>Key Feature</th>
                            <th>Max Payout</th>
                            <th>House Edge</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Slot Machine</strong></td>
                            <td>7 symbols, random spins</td>
                            <td>500x bet</td>
                            <td>~5%</td>
                        </tr>
                        <tr>
                            <td><strong>Video Poker</strong></td>
                            <td>Standard poker hands</td>
                            <td>250x (Royal Flush)</td>
                            <td>~2% (with optimal play)</td>
                        </tr>
                        <tr>
                            <td><strong>Roulette</strong></td>
                            <td>European wheel (37 numbers)</td>
                            <td>35x (single number)</td>
                            <td>2.7%</td>
                        </tr>
                        <tr>
                            <td><strong>Blackjack</strong></td>
                            <td>Standard 21 rules</td>
                            <td>2x (Blackjack pays 3:2)</td>
                            <td>~0.5% (with optimal play)</td>
                        </tr>
                        <tr>
                            <td><strong>Dice Game</strong></td>
                            <td>Two dice, various outcomes</td>
                            <td>5x (Lucky 7)</td>
                            <td>~3%</td>
                        </tr>
                        <tr>
                            <td><strong>Baccarat</strong></td>
                            <td>Player/Banker/Tie</td>
                            <td>8x (Tie bet)</td>
                            <td>1.06% (Banker), 1.24% (Player)</td>
                        </tr>
                        <tr>
                            <td><strong>Coin Flip</strong></td>
                            <td>Heads or Tails</td>
                            <td>2x</td>
                            <td>0%</td>
                        </tr>
                        <tr>
                            <td><strong>Wheel of Fortune</strong></td>
                            <td>Colorful spinning wheel</td>
                            <td>Variable</td>
                            <td>~4%</td>
                        </tr>
                        <tr>
                            <td><strong>Crash</strong></td>
                            <td>Multiplier game</td>
                            <td>Unlimited</td>
                            <td>~3%</td>
                        </tr>
                        <tr>
                            <td><strong>Mines</strong></td>
                            <td>Grid-based reveal</td>
                            <td>Progressive</td>
                            <td>~2%</td>
                        </tr>
                        <tr>
                            <td><strong>Plinko</strong></td>
                            <td>Ball drop physics</td>
                            <td>Variable</td>
                            <td>~3%</td>
                        </tr>
                        <tr>
                            <td><strong>Keno</strong></td>
                            <td>Number selection (1-80)</td>
                            <td>High</td>
                            <td>~25%</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="alert alert-warning mt-4">
                    <h5><i class="fas fa-exclamation-triangle me-2"></i>Understanding House Edge</h5>
                    <p>The "house edge" represents the mathematical advantage built into each game. For example, a 5% house edge means that over many plays, the game will return 95% of all bets to players. This doesn't mean you'll lose 5% of every bet - you might win big or lose more in the short term. The house edge only becomes apparent over thousands of plays.</p>
                    <p><strong>Important:</strong> These odds and payouts are fixed and transparent. They never change based on your play history, bet size, or any other factor.</p>
                </div>
            </div>
            
            <div class="card p-5 mb-4">
                <h2 class="card-title"><i class="fas fa-shield-alt me-2"></i>No Manipulation or Interference</h2>
                <p>AQUASTRUCT Casino operates with complete integrity. Here's what we guarantee:</p>
                
                <div class="row mt-4">
                    <div class="col-md-6">
                        <div class="guarantee-box">
                            <h5><i class="fas fa-times-circle text-danger me-2"></i>We Do NOT:</h5>
                            <ul>
                                <li>Manipulate game outcomes in any way</li>
                                <li>Track player patterns to adjust odds</li>
                                <li>Favor or disadvantage any players</li>
                                <li>Change odds based on bet size</li>
                                <li>Alter results based on win/loss history</li>
                                <li>Use "hot" or "cold" streaks</li>
                                <li>Control your virtual coin balance</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="guarantee-box">
                            <h5><i class="fas fa-check-circle text-success me-2"></i>We DO:</h5>
                            <ul>
                                <li>Use genuine random number generation</li>
                                <li>Maintain fixed, transparent odds</li>
                                <li>Treat all players equally</li>
                                <li>Store your balance locally (you control it)</li>
                                <li>Operate games purely on chance and rules</li>
                                <li>Provide honest information about odds</li>
                                <li>Investigate and fix any reported bugs</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <p class="mt-4">Your virtual coin balance is stored locally in your browser using localStorage technology. This means we literally cannot access or modify your balance - it exists only on your device. This is another layer of transparency and fairness.</p>
            </div>
            
            <div class="card p-5 mb-4">
                <h2 class="card-title"><i class="fas fa-code me-2"></i>Client-Side Processing</h2>
                <p>Unlike many online casino platforms, AQUASTRUCT Casino processes all game logic in your browser (client-side), not on our servers. This has important implications for fairness:</p>
                
                <div class="row mt-4">
                    <div class="col-md-4">
                        <div class="benefit-card">
                            <i class="fas fa-eye-slash fa-3x mb-3 text-primary"></i>
                            <h5>We Can't See Results</h5>
                            <p>Since games run in your browser, we don't see the outcomes until you do. We can't "peek" at results before they're displayed.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="benefit-card">
                            <i class="fas fa-lock fa-3x mb-3 text-success"></i>
                            <h5>No Server Manipulation</h5>
                            <p>There's no server that could be programmed to cheat or adjust odds. The code runs on your device, following fixed rules.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="benefit-card">
                            <i class="fas fa-tachometer-alt fa-3x mb-3 text-warning"></i>
                            <h5>Instant Results</h5>
                            <p>No waiting for server responses. Results are calculated instantly in your browser, providing a smooth experience.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card p-5 mb-4">
                <h2 class="card-title"><i class="fas fa-user-shield me-2"></i>Player Responsibility</h2>
                <p>While we ensure fair gameplay, players also have responsibilities to maintain a positive gaming environment:</p>
                
                <div class="responsibility-grid mt-4">
                    <div class="responsibility-item">
                        <i class="fas fa-dice"></i>
                        <h5>Understand the Odds</h5>
                        <p>All games involve chance and you may lose virtual coins. House edge means the casino has a mathematical advantage over time.</p>
                    </div>
                    
                    <div class="responsibility-item">
                        <i class="fas fa-clock"></i>
                        <h5>Play Responsibly</h5>
                        <p>Don't let gaming interfere with daily life, work, relationships, or other important activities. Set time limits.</p>
                    </div>
                    
                    <div class="responsibility-item">
                        <i class="fas fa-coins"></i>
                        <h5>Remember: No Real Value</h5>
                        <p>Virtual coins have no real-world value. They can't be exchanged for money, prizes, or anything else.</p>
                    </div>
                    
                    <div class="responsibility-item">
                        <i class="fas fa-user-check"></i>
                        <h5>Age Requirement</h5>
                        <p>Be at least 18 years old to use this platform, even though no real money is involved.</p>
                    </div>
                    
                    <div class="responsibility-item">
                        <i class="fas fa-bug"></i>
                        <h5>Report Issues</h5>
                        <p>Report any suspected technical issues or bugs immediately so we can investigate and fix them.</p>
                    </div>
                    
                    <div class="responsibility-item">
                        <i class="fas fa-book"></i>
                        <h5>Read the Rules</h5>
                        <p>Understand how each game works before playing. Check our <a href="howtoplay.php">How to Play</a> guide.</p>
                    </div>
                </div>
                
                <p class="mt-4">Visit our <a href="responsible.php">Responsible Gaming</a> page for more information on playing safely and maintaining healthy gaming habits.</p>
            </div>
            
            <div class="card p-5 mb-4">
                <h2 class="card-title"><i class="fas fa-question-circle me-2"></i>Common Fair Play Questions</h2>
                
                <div class="accordion" id="fairPlayAccordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                Why did I lose several times in a row? Is the game rigged?
                            </button>
                        </h2>
                        <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#fairPlayAccordion">
                            <div class="accordion-body">
                                No, the game is not rigged. Losing streaks are a normal part of random chance. Just as you can flip heads five times in a row with a fair coin, you can lose multiple times in a row in our games. This is called "variance" and is expected in any game of chance. The house edge means you're slightly more likely to lose than win over time, so streaks of losses are mathematically normal.
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                Does the game "remember" my previous wins or losses?
                            </button>
                        </h2>
                        <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#fairPlayAccordion">
                            <div class="accordion-body">
                                No. Each game round is completely independent. The random number generator doesn't track your history or adjust future outcomes based on past results. This is a fundamental principle of fair gaming called "independence of events." The game doesn't "owe" you a win after losses, nor does it try to "take back" winnings after you've won.
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                Are the odds different for different bet sizes?
                            </button>
                        </h2>
                        <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#fairPlayAccordion">
                            <div class="accordion-body">
                                No. Whether you bet 10 coins or 10,000 coins, your probability of winning is exactly the same. The only difference is the payout amount - larger bets win larger amounts, but the odds remain constant. We don't favor "high rollers" or disadvantage small bettors.
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                                Can you prove the games are fair?
                            </button>
                        </h2>
                        <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#fairPlayAccordion">
                            <div class="accordion-body">
                                Yes! Since all game code runs in your browser (client-side), you can actually inspect the code yourself if you have technical knowledge. Open your browser's developer tools and examine the JavaScript code - you'll see the random number generation and game logic. Everything is transparent and open to inspection.
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                                What should I do if I suspect unfair play?
                            </button>
                        </h2>
                        <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#fairPlayAccordion">
                            <div class="accordion-body">
                                Contact us immediately with details about what you experienced. Include the game name, approximate time, what happened, and any other relevant information. We take all fairness concerns seriously and will investigate thoroughly. Most "unfair" experiences turn out to be normal variance, but we're always happy to explain and investigate.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card p-5 bg-light">
                <h2 class="card-title"><i class="fas fa-envelope me-2"></i>Questions or Concerns?</h2>
                <p>If you have any questions about our Fair Play Policy or suspect any issues with game fairness, please don't hesitate to contact us. We take all concerns seriously and will investigate thoroughly.</p>
                <p>Transparency and fairness are not just policies for us - they're core values. We're committed to maintaining your trust through honest, fair gaming.</p>
                <p><a href="contact.php" class="btn btn-primary mt-3">Contact Us</a></p>
            </div>
            
        </div>
    </div>
</div>

<style>
.feature-list {
    display: grid;
    gap: 2rem;
}

.feature-item {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
}

.feature-icon {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--accent-gold) 0%, #FFA500 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.8rem;
}

.feature-content h4 {
    color: var(--primary-purple);
    font-weight: 600;
    margin-bottom: 0.75rem;
}

.feature-content p {
    color: #666;
    line-height: 1.8;
    margin: 0;
}

.guarantee-box {
    background: rgba(26, 11, 46, 0.03);
    padding: 2rem;
    border-radius: 8px;
    height: 100%;
}

.guarantee-box h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.guarantee-box ul {
    list-style: none;
    padding: 0;
}

.guarantee-box li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #e0e0e0;
}

.guarantee-box li:last-child {
    border-bottom: none;
}

.benefit-card {
    text-align: center;
    padding: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    height: 100%;
}

.benefit-card h5 {
    color: var(--primary-purple);
    font-weight: 600;
    margin-bottom: 1rem;
}

.benefit-card p {
    color: #666;
    line-height: 1.6;
}

.responsibility-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.responsibility-item {
    text-align: center;
    padding: 2rem;
    background: rgba(255, 215, 0, 0.05);
    border-radius: 8px;
    transition: all 0.3s ease;
}

.responsibility-item:hover {
    background: rgba(255, 215, 0, 0.1);
    transform: translateY(-5px);
}

.responsibility-item i {
    font-size: 3rem;
    color: var(--accent-gold);
    margin-bottom: 1rem;
}

.responsibility-item h5 {
    color: var(--primary-purple);
    font-weight: 600;
    margin-bottom: 0.75rem;
}

.responsibility-item p {
    color: #666;
    line-height: 1.6;
    font-size: 0.95rem;
}

.accordion-button {
    font-weight: 600;
    color: var(--primary-purple);
}

.accordion-button:not(.collapsed) {
    background-color: rgba(255, 215, 0, 0.1);
    color: var(--primary-purple);
}

.accordion-body {
    line-height: 1.8;
    color: #666;
}
</style>

<?php include 'footer.php'; ?>
