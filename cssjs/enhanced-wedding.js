// Wedding Countdown Timer - CORRECTED DATE
function initializeCountdown() {
    // Set wedding date to February 3rd, 2026 (CORRECTED FROM 2026)
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
            // Change this line:
            document.querySelector('.countdown-container-collapsible-fixed .countdown-title').textContent = '🎉 Wedding Day is Here! 🎉';
            document.querySelector('.countdown-timer').innerHTML = '<div class="wedding-day-message">Congratulations!</div>';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Enhanced Update Notification System with Actual Content
function initializeUpdateNotification() {
    const notification = document.getElementById('updateNotification');
    const updateText = document.getElementById('updateText');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentTime = new Date().getTime();
    
    // Define recent updates with timestamps
    const recentUpdates = [
        {
            date: '2025-08-06',
            content: 'The website is now live! 🎉',
        }
    ];
    
    // Show notification with the latest update
    if (!lastVisit || (currentTime - parseInt(lastVisit)) > 24 * 60 * 60 * 1000) {
        const latestUpdate = recentUpdates[0];
        updateText.textContent = `Update: ${latestUpdate.content}`;
        
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

// Initialize all enhancements when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCountdown();
    initializeUpdateNotification();
    
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

// Collapsible Countdown Functionality with Previous Visual Style
function toggleCountdown() {
  const content = document.getElementById('countdownContent');
  const toggle = document.getElementById('countdownToggle');
  const arrow = toggle.querySelector('.toggle-arrow');
  
  if (content.classList.contains('collapsed')) {
    content.classList.remove('collapsed');
    arrow.textContent = '−';
    arrow.classList.remove('rotated');
  } else {
    content.classList.add('collapsed');
    arrow.textContent = '+';
    arrow.classList.add('rotated');
  }
}

// Auto-collapse on mobile after 5 seconds, but keep expanded on desktop
document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth <= 768) {
    setTimeout(() => {
      const content = document.getElementById('countdownContent');
      if (content && !content.classList.contains('collapsed')) {
        toggleCountdown();
      }
    }, 5000);
  }
});
