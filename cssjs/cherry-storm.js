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
        
        // ENHANCED: More drift variations for realistic movement
        const driftTypes = ['', 'float']; // Empty string = default driftFall, 'float' = floatDriftFall
        const randomDrift = driftTypes[Math.floor(Math.random() * driftTypes.length)];
        if (randomDrift) {
            petal.classList.add(randomDrift);
        }
        
        petal.style.left = Math.random() * 100 + 'vw';
        
        // Random duration for more natural variation
        const baseDuration = window.innerWidth < 768 ? 12 : 10;
        const duration = baseDuration + Math.random() * 8; // 10-18 seconds variation
        petal.style.animationDuration = duration + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';
        
        this.container.appendChild(petal);
        this.petals.push(petal);
        
        // Clean up after animation completes
        setTimeout(() => {
            if (petal.parentNode && this.isRunning) {
                petal.parentNode.removeChild(petal);
                const index = this.petals.indexOf(petal);
                if (index > -1) {
                    this.petals.splice(index, 1);
                }
                
                // Create replacement petal
                if (this.petals.length < this.maxPetals && Math.random() > 0.2) {
                    this.createPetal();
                }
            }
        }, (duration + 5) * 1000);
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
