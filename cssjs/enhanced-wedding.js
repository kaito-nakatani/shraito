// Wedding Countdown Timer
function initializeCountdown() {
    // Set wedding date to February 3rd, 2026 (CORRECTED DATE)
    const weddingDate = new Date('2026-02-03T10:00:00+05:30').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            // Wedding day has arrived!
            document.querySelector('.countdown-container h3').textContent = '🎉 Wedding Day is Here! 🎉';
            document.querySelector('.countdown-timer').innerHTML = '<div class="wedding-day-message">Congratulations!</div>';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Update Notification System
function initializeUpdateNotification() {
    const notification = document.getElementById('updateNotification');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentTime = new Date().getTime();
    
    // Show notification if it's been more than 24 hours since last visit
    if (!lastVisit || (currentTime - parseInt(lastVisit)) > 24 * 60 * 60 * 1000) {
        setTimeout(() => {
            notification.style.display = 'flex';
        }, 2000);
    }
    
    // Update last visit time
    localStorage.setItem('lastVisit', currentTime.toString());
}

function dismissNotification() {
    const notification = document.getElementById('updateNotification');
    notification.style.animation = 'slideOut 0.5s ease-in';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 500);
}

// Enhanced Gallery Functions (for hex to grid conversion)
function initializeEnhancedGallery() {
    const hexContainer = document.querySelector('.hex-container');
    if (hexContainer) {
        // Apply modern grid styling
        hexContainer.classList.add('modern-gallery-grid');
        
        // Add loading animation to images
        const images = hexContainer.querySelectorAll('img');
        images.forEach((img, index) => {
            img.style.opacity = '0';
            img.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                img.style.transition = 'all 0.3s ease';
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
            }, index * 100);
        });
    }
}

// Initialize all enhancements when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCountdown();
    initializeUpdateNotification();
    initializeEnhancedGallery();
    
    // Add CSS animation for slideOut
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
