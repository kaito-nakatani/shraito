// Optimized Cherry Blossom Storm - Reduced Performance Impact
class CherryStorm {
    constructor() {
        this.container = document.getElementById('cherryStorm');
        this.petals = [];
        this.maxPetals = window.innerWidth < 768 ? 15 : 30; // REDUCED from 30/60
        this.isRunning = false;
        this.init();
    }

    init() {
        if (!this.container) return;
        
        // REDUCED creation frequency
        this.createPetals();
        this.start();
        
        // Throttled resize handler
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.maxPetals = window.innerWidth < 768 ? 15 : 30;
                this.adjustPetals();
            }, 250);
        });
    }

    createPetals() {
        for (let i = 0; i < this.maxPetals; i++) {
            setTimeout(() => {
                this.createPetal();
            }, i * 400); // INCREASED delay from 200ms to 400ms
        }
    }

    createPetal() {
        const petal = document.createElement('div');
        petal.className = 'cherry-petal';
        
        // Simplified size options - REMOVED complex variations
        const sizes = ['size-medium'];
        petal.classList.add(sizes[0]);
        
        // REMOVED float animation - only use basic fall
        
        petal.style.left = Math.random() * 100 + 'vw';
        
        // SIMPLIFIED animation duration
        const duration = 12 + Math.random() * 6; // 12-18 seconds (was 8-18)
        petal.style.animationDuration = duration + 's';
        petal.style.animationDelay = Math.random() * 3 + 's';
        
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
                
                // Create new petal less frequently
                if (this.petals.length < this.maxPetals && Math.random() > 0.3) {
                    this.createPetal();
                }
            }
        }, (duration + 3) * 1000);
    }

    start() {
        this.isRunning = true;
    }

    stop() {
        this.isRunning = false;
    }
}

// Initialize with performance check
document.addEventListener('DOMContentLoaded', function() {
    // Only run cherry storm on desktop and good connections
    if (window.innerWidth > 768 && navigator.connection) {
        const connection = navigator.connection;
        if (connection.effectiveType === '4g' || connection.effectiveType === '3g') {
            new CherryStorm();
        }
    } else if (window.innerWidth > 768) {
        // Fallback for browsers without connection API
        new CherryStorm();
    }
});
