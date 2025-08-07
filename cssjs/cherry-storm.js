// Enhanced Cherry Blossom Storm - MORE MOBILE PETALS
class CherryStorm {
    constructor() {
        this.container = document.getElementById('cherryStorm');
        this.petals = [];
        // INCREASED MOBILE COUNT: 8 -> 15, Desktop: 25 -> 30
        this.maxPetals = window.innerWidth < 768 ? 15 : 30;
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
                this.maxPetals = window.innerWidth < 768 ? 15 : 30; // UPDATED
                this.adjustPetals();
            }, 250);
        });
    }

    createPetals() {
        for (let i = 0; i < this.maxPetals; i++) {
            setTimeout(() => {
                this.createPetal();
            }, i * (window.innerWidth < 768 ? 400 : 300)); // FASTER creation on mobile
        }
    }

    createPetal() {
        const petal = document.createElement('div');
        petal.className = 'cherry-petal';
        
        // Add size variation
        const sizes = ['size-small', 'size-medium', 'size-large'];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        petal.classList.add(randomSize);
        
        // More float animation on mobile for visual richness
        if (window.innerWidth < 768 && Math.random() > 0.5) {
            petal.classList.add('float');
        } else if (window.innerWidth >= 768 && Math.random() > 0.7) {
            petal.classList.add('float');
        }
        
        petal.style.left = Math.random() * 100 + 'vw';
        
        // Mobile optimized duration
        const duration = window.innerWidth < 768 ? 
            (10 + Math.random() * 8) :  // Mobile: 10-18 seconds (faster)
            (12 + Math.random() * 6);   // Desktop: 12-18 seconds
            
        petal.style.animationDuration = duration + 's';
        petal.style.animationDelay = Math.random() * 3 + 's';
        
        this.container.appendChild(petal);
        this.petals.push(petal);
        
        // Clean up and regenerate
        setTimeout(() => {
            if (petal.parentNode && this.isRunning) {
                petal.parentNode.removeChild(petal);
                const index = this.petals.indexOf(petal);
                if (index > -1) {
                    this.petals.splice(index, 1);
                }
                
                // Regenerate more frequently on mobile
                const regenerateChance = window.innerWidth < 768 ? 0.8 : 0.7;
                if (this.petals.length < this.maxPetals && Math.random() > (1 - regenerateChance)) {
                    this.createPetal();
                }
            }
        }, (duration + 3) * 1000);
    }

    // ... rest of the methods remain the same
    adjustPetals() {
        while (this.petals.length > this.maxPetals) {
            const petal = this.petals.pop();
            if (petal && petal.parentNode) {
                petal.parentNode.removeChild(petal);
            }
        }
        
        while (this.petals.length < this.maxPetals) {
            this.createPetal();
        }
    }

    start() {
        this.isRunning = true;
    }

    stop() {
        this.isRunning = false;
    }
}

// Initialize - same as before
document.addEventListener('DOMContentLoaded', function() {
    new CherryStorm();
});
