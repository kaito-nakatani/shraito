// Enhanced Cherry Blossom Storm - FIXED FOR MOBILE
class CherryStorm {
    constructor() {
        this.container = document.getElementById('cherryStorm');
        this.petals = [];
        // ENABLE ON MOBILE with reduced count
        this.maxPetals = window.innerWidth < 768 ? 8 : 25; // Mobile: 8, Desktop: 25
        this.isRunning = false;
        this.init();
    }

    init() {
        if (!this.container) return;
        
        this.createPetals();
        this.start();
        
        // Throttled resize handler
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.maxPetals = window.innerWidth < 768 ? 8 : 25;
                this.adjustPetals();
            }, 250);
        });
    }

    adjustPetals() {
        // Remove excess petals if needed
        while (this.petals.length > this.maxPetals) {
            const petal = this.petals.pop();
            if (petal && petal.parentNode) {
                petal.parentNode.removeChild(petal);
            }
        }
        
        // Add more petals if needed
        while (this.petals.length < this.maxPetals) {
            this.createPetal();
        }
    }

    createPetals() {
        for (let i = 0; i < this.maxPetals; i++) {
            setTimeout(() => {
                this.createPetal();
            }, i * (window.innerWidth < 768 ? 800 : 400)); // Slower on mobile
        }
    }

    createPetal() {
        const petal = document.createElement('div');
        petal.className = 'cherry-petal';
        
        // Add size variation
        const sizes = ['size-small', 'size-medium', 'size-large'];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        petal.classList.add(randomSize);
        
        // Occasionally add float animation
        if (Math.random() > 0.7) {
            petal.classList.add('float');
        }
        
        petal.style.left = Math.random() * 100 + 'vw';
        
        // Adjust duration for mobile performance
        const duration = window.innerWidth < 768 ? 
            (15 + Math.random() * 8) :  // Mobile: 15-23 seconds
            (12 + Math.random() * 6);   // Desktop: 12-18 seconds
            
        petal.style.animationDuration = duration + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';
        
        this.container.appendChild(petal);
        this.petals.push(petal);
        
        // Clean up after animation
        setTimeout(() => {
            if (petal.parentNode && this.isRunning) {
                petal.parentNode.removeChild(petal);
                const index = this.petals.indexOf(petal);
                if (index > -1) {
                    this.petals.splice(index, 1);
                }
                
                // Create new petal
                if (this.petals.length < this.maxPetals && Math.random() > 0.2) {
                    this.createPetal();
                }
            }
        }, (duration + 5) * 1000);
    }

    start() {
        this.isRunning = true;
    }

    stop() {
        this.isRunning = false;
    }
}

// Initialize - REMOVED connection check, ENABLE FOR ALL DEVICES
document.addEventListener('DOMContentLoaded', function() {
    // Always run cherry storm on all devices
    new CherryStorm();
});
