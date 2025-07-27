// Cherry Blossom Storm Animation
class CherryStorm {
    constructor() {
        this.container = document.getElementById('cherryStorm');
        this.petals = [];
        this.maxPetals = window.innerWidth < 768 ? 30 : 60; // Fewer petals on mobile
        this.isRunning = false;
        this.init();
    }

    init() {
        if (!this.container) return;
        
        this.createPetals();
        this.start();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            this.maxPetals = window.innerWidth < 768 ? 30 : 60;
            this.adjustPetals();
        });
    }

    createPetals() {
        for (let i = 0; i < this.maxPetals; i++) {
            setTimeout(() => {
                this.createPetal();
            }, i * 200); // Stagger creation
        }
    }

    createPetal() {
        const petal = document.createElement('div');
        petal.className = 'cherry-petal';
        
        // Random size
        const sizes = ['size-small', 'size-medium', 'size-large'];
        petal.classList.add(sizes[Math.floor(Math.random() * sizes.length)]);
        
        // Random animation type
        if (Math.random() > 0.6) {
            petal.classList.add('float');
        }
        
        // Random starting position
        petal.style.left = Math.random() * 100 + 'vw';
        
        // Random animation duration
        const duration = 8 + Math.random() * 10; // 8-18 seconds
        petal.style.animationDuration = duration + 's';
        
        // Random delay
        petal.style.animationDelay = Math.random() * 5 + 's';
        
        this.container.appendChild(petal);
        this.petals.push(petal);
        
        // Remove petal after animation completes
        setTimeout(() => {
            if (petal.parentNode) {
                petal.parentNode.removeChild(petal);
                const index = this.petals.indexOf(petal);
                if (index > -1) {
                    this.petals.splice(index, 1);
                }
                
                // Create new petal if still running
                if (this.isRunning && this.petals.length < this.maxPetals) {
                    this.createPetal();
                }
            }
        }, (duration + 5) * 1000);
    }

    adjustPetals() {
        const currentCount = this.petals.length;
        if (currentCount > this.maxPetals) {
            // Remove excess petals
            for (let i = this.maxPetals; i < currentCount; i++) {
                const petal = this.petals[i];
                if (petal && petal.parentNode) {
                    petal.parentNode.removeChild(petal);
                }
            }
            this.petals = this.petals.slice(0, this.maxPetals);
        } else if (currentCount < this.maxPetals) {
            // Add more petals
            for (let i = currentCount; i < this.maxPetals; i++) {
                setTimeout(() => {
                    this.createPetal();
                }, (i - currentCount) * 200);
            }
        }
    }

    start() {
        this.isRunning = true;
    }

    stop() {
        this.isRunning = false;
    }
}

// Initialize cherry storm when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const cherryStorm = new CherryStorm();
    
    // Store reference globally for debugging
    window.cherryStorm = cherryStorm;
});
