// ===================================
// AQUASTRUCT CASINO - MAIN SCRIPT
// ===================================

// Virtual Currency Management
class VirtualCurrency {
    constructor() {
        this.storageKey = 'aquastruct_balance';
        this.defaultBalance = 10000;
        this.init();
    }

    init() {
        if (!this.getBalance()) {
            this.setBalance(this.defaultBalance);
        }
        this.updateDisplay();
    }

    getBalance() {
        const balance = localStorage.getItem(this.storageKey);
        return balance ? parseInt(balance) : null;
    }

    setBalance(amount) {
        localStorage.setItem(this.storageKey, amount.toString());
        this.updateDisplay();
    }

    addBalance(amount) {
        const currentBalance = this.getBalance() || 0;
        this.setBalance(currentBalance + amount);
    }

    subtractBalance(amount) {
        const currentBalance = this.getBalance() || 0;
        if (currentBalance >= amount) {
            this.setBalance(currentBalance - amount);
            return true;
        }
        return false;
    }

    updateDisplay() {
        const balance = this.getBalance() || 0;
        const formattedBalance = balance.toLocaleString();
        
        // Update navigation balance
        const navBalance = document.getElementById('navBalance');
        if (navBalance) {
            navBalance.textContent = formattedBalance;
        }

        // Update game page balance
        const gameBalance = document.getElementById('gameBalance');
        if (gameBalance) {
            gameBalance.textContent = formattedBalance;
        }
    }

    reset() {
        this.setBalance(this.defaultBalance);
        this.showNotification('Balance reset to ' + this.defaultBalance.toLocaleString() + ' coins!', 'info');
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'win' ? 'check-circle' : type === 'lose' ? 'times-circle' : 'info-circle'} me-2"></i>
            ${message}
        `;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }
}

// Initialize currency system
const currency = new VirtualCurrency();

// Make currency object globally available
window.currency = currency;

// Update balance display on page load
document.addEventListener('DOMContentLoaded', function() {
    currency.updateDisplay();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to current page nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.php';
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Slideout animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
