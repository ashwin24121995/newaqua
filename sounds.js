// AQUASTRUCT Casino - Complete Sound System
// Web Audio API based sound generation (no external files needed)

class CasinoSounds {
    constructor() {
        this.audioContext = null;
        this.soundEnabled = true;
        this.volume = 0.5;
        this.init();
    }

    init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API not supported');
            this.soundEnabled = false;
        }
    }

    // Play win sound (cheerful ascending tones)
    playWin() {
        if (!this.soundEnabled) return;
        
        const now = this.audioContext.currentTime;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        // Ascending melody
        oscillator.frequency.setValueAtTime(523.25, now); // C5
        oscillator.frequency.setValueAtTime(659.25, now + 0.1); // E5
        oscillator.frequency.setValueAtTime(783.99, now + 0.2); // G5
        oscillator.frequency.setValueAtTime(1046.50, now + 0.3); // C6
        
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(this.volume * 0.3, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        
        oscillator.start(now);
        oscillator.stop(now + 0.5);
    }

    // Play loss sound (descending tone)
    playLoss() {
        if (!this.soundEnabled) return;
        
        const now = this.audioContext.currentTime;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        // Descending tone
        oscillator.frequency.setValueAtTime(400, now);
        oscillator.frequency.exponentialRampToValueAtTime(200, now + 0.3);
        
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(this.volume * 0.2, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        
        oscillator.start(now);
        oscillator.stop(now + 0.3);
    }

    // Play jackpot sound (exciting fanfare)
    playJackpot() {
        if (!this.soundEnabled) return;
        
        const now = this.audioContext.currentTime;
        
        // Multiple oscillators for rich sound
        for (let i = 0; i < 3; i++) {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            const frequencies = [
                [523.25, 659.25, 783.99, 1046.50, 1318.51], // C major arpeggio
                [659.25, 783.99, 987.77, 1318.51, 1567.98], // E major arpeggio
                [392.00, 493.88, 587.33, 783.99, 987.77]    // G major arpeggio
            ];
            
            const freq = frequencies[i];
            oscillator.frequency.setValueAtTime(freq[0], now);
            oscillator.frequency.setValueAtTime(freq[1], now + 0.1);
            oscillator.frequency.setValueAtTime(freq[2], now + 0.2);
            oscillator.frequency.setValueAtTime(freq[3], now + 0.3);
            oscillator.frequency.setValueAtTime(freq[4], now + 0.4);
            
            oscillator.type = i === 0 ? 'sine' : (i === 1 ? 'triangle' : 'square');
            gainNode.gain.setValueAtTime(this.volume * 0.2, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 1.0);
            
            oscillator.start(now + i * 0.05);
            oscillator.stop(now + 1.0);
        }
    }

    // Play button click sound
    playClick() {
        if (!this.soundEnabled) return;
        
        const now = this.audioContext.currentTime;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, now);
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(this.volume * 0.1, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
        
        oscillator.start(now);
        oscillator.stop(now + 0.05);
    }

    // Play spin sound (for slots/roulette)
    playSpin() {
        if (!this.soundEnabled) return;
        
        const now = this.audioContext.currentTime;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        // Rapid frequency changes for spinning effect
        oscillator.frequency.setValueAtTime(200, now);
        oscillator.frequency.linearRampToValueAtTime(100, now + 0.5);
        
        oscillator.type = 'sawtooth';
        gainNode.gain.setValueAtTime(this.volume * 0.15, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        
        oscillator.start(now);
        oscillator.stop(now + 0.5);
    }

    // Play card flip sound
    playCardFlip() {
        if (!this.soundEnabled) return;
        
        const now = this.audioContext.currentTime;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(600, now);
        oscillator.frequency.setValueAtTime(400, now + 0.05);
        
        oscillator.type = 'square';
        gainNode.gain.setValueAtTime(this.volume * 0.08, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        
        oscillator.start(now);
        oscillator.stop(now + 0.1);
    }

    // Play coin sound
    playCoin() {
        if (!this.soundEnabled) return;
        
        const now = this.audioContext.currentTime;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(1000, now);
        oscillator.frequency.exponentialRampToValueAtTime(800, now + 0.1);
        
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(this.volume * 0.2, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        
        oscillator.start(now);
        oscillator.stop(now + 0.15);
    }

    // Toggle sound on/off
    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        return this.soundEnabled;
    }

    // Set volume (0 to 1)
    setVolume(vol) {
        this.volume = Math.max(0, Math.min(1, vol));
    }
}

// Jackpot Animation System
class JackpotAnimation {
    constructor() {
        this.isAnimating = false;
    }

    // Show jackpot popup with confetti
    show(amount) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        // Create popup overlay
        const overlay = document.createElement('div');
        overlay.className = 'jackpot-overlay';
        overlay.innerHTML = `
            <div class="jackpot-popup">
                <div class="jackpot-stars">✨ ⭐ ✨</div>
                <h1 class="jackpot-title">🎰 JACKPOT! 🎰</h1>
                <div class="jackpot-amount">${amount} COINS!</div>
                <div class="jackpot-message">Congratulations! You hit the jackpot!</div>
                <button class="jackpot-close-btn" onclick="closeJackpot()">Collect Winnings</button>
            </div>
            <canvas id="confetti-canvas"></canvas>
        `;
        document.body.appendChild(overlay);

        // Animate popup
        setTimeout(() => {
            overlay.querySelector('.jackpot-popup').classList.add('show');
        }, 100);

        // Start confetti animation
        this.startConfetti();

        // Auto close after 5 seconds
        setTimeout(() => {
            this.close();
        }, 5000);
    }

    // Start confetti animation
    startConfetti() {
        const canvas = document.getElementById('confetti-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const confetti = [];
        const confettiCount = 150;
        const colors = ['#FFD700', '#FFA500', '#FF69B4', '#00CED1', '#9370DB', '#32CD32'];

        // Create confetti particles
        for (let i = 0; i < confettiCount; i++) {
            confetti.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                r: Math.random() * 6 + 2,
                d: Math.random() * confettiCount,
                color: colors[Math.floor(Math.random() * colors.length)],
                tilt: Math.random() * 10 - 10,
                tiltAngleIncremental: Math.random() * 0.07 + 0.05,
                tiltAngle: 0
            });
        }

        let animationId;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            confetti.forEach((p, i) => {
                p.tiltAngle += p.tiltAngleIncremental;
                p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
                p.x += Math.sin(p.tiltAngle) * 2;
                p.tilt = Math.sin(p.tiltAngle) * 15;

                if (p.y > canvas.height) {
                    confetti[i] = {
                        x: Math.random() * canvas.width,
                        y: -20,
                        r: p.r,
                        d: p.d,
                        color: p.color,
                        tilt: p.tilt,
                        tiltAngleIncremental: p.tiltAngleIncremental,
                        tiltAngle: p.tiltAngle
                    };
                }

                ctx.beginPath();
                ctx.lineWidth = p.r / 2;
                ctx.strokeStyle = p.color;
                ctx.moveTo(p.x + p.tilt + p.r, p.y);
                ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
                ctx.stroke();
            });

            animationId = requestAnimationFrame(draw);
        };

        draw();

        // Stop animation after 5 seconds
        setTimeout(() => {
            cancelAnimationFrame(animationId);
        }, 5000);
    }

    // Close jackpot popup
    close() {
        const overlay = document.querySelector('.jackpot-overlay');
        if (overlay) {
            overlay.querySelector('.jackpot-popup').classList.remove('show');
            setTimeout(() => {
                overlay.remove();
                this.isAnimating = false;
            }, 300);
        }
    }
}

// Win Animation (smaller wins)
class WinAnimation {
    show(amount) {
        const popup = document.createElement('div');
        popup.className = 'win-popup';
        popup.innerHTML = `
            <div class="win-content">
                <div class="win-icon">🎉</div>
                <div class="win-text">YOU WON!</div>
                <div class="win-amount">+${amount} COINS</div>
            </div>
        `;
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.classList.add('show');
        }, 10);

        setTimeout(() => {
            popup.classList.remove('show');
            setTimeout(() => popup.remove(), 300);
        }, 2000);
    }
}

// Global instances
const casinoSounds = new CasinoSounds();
const jackpotAnimation = new JackpotAnimation();
const winAnimation = new WinAnimation();

// Global functions
function closeJackpot() {
    jackpotAnimation.close();
}

function toggleSound() {
    const enabled = casinoSounds.toggleSound();
    const btn = document.getElementById('sound-toggle');
    if (btn) {
        btn.innerHTML = enabled ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-mute"></i>';
    }
    return enabled;
}

// Add sound toggle button to page
document.addEventListener('DOMContentLoaded', () => {
    // Add sound toggle button if not exists
    if (!document.getElementById('sound-toggle')) {
        const soundBtn = document.createElement('button');
        soundBtn.id = 'sound-toggle';
        soundBtn.className = 'sound-toggle-btn';
        soundBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        soundBtn.onclick = toggleSound;
        soundBtn.title = 'Toggle Sound';
        document.body.appendChild(soundBtn);
    }
});
