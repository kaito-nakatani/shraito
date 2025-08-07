// DISABLE ALL HEX FUNCTIONALITY FIRST
document.addEventListener('DOMContentLoaded', function() {
    // Remove any hex elements that might exist
    const hexElements = document.querySelectorAll('[class*="hex"]');
    hexElements.forEach(element => {
        if (!element.classList.contains('homepage-carousel') && 
            !element.classList.contains('carousel-wrapper') && 
            !element.classList.contains('carousel-track')) {
            element.style.display = 'none';
            element.style.visibility = 'hidden';
        }
    });
    
    // Initialize carousel
    new HomepageCarousel();
});

// Homepage Carousel Functionality
class HomepageCarousel {
    constructor() {
        this.track = document.getElementById('carouselTrack');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.indicators = document.getElementById('carouselIndicators');
        this.slides = document.querySelectorAll('.carousel-slide');
        this.currentIndex = 0;
        this.totalSlides = this.slides.length;
        
        if (this.track && this.slides.length > 0) {
            this.init();
        }
    }

    init() {
        // Create indicators
        this.createIndicators();
        
        // Set initial slide width
        this.updateSlideWidth();
        
        // Add event listeners
        this.prevBtn?.addEventListener('click', () => this.previousSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());
        
        // Auto-play functionality
        this.startAutoPlay();
        
        // Pause auto-play on hover
        this.track.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.track.addEventListener('mouseleave', () => this.startAutoPlay());
        
        // Handle window resize
        window.addEventListener('resize', () => this.updateSlideWidth());
        
        // Touch/swipe support for mobile
        this.addTouchSupport();
    }

    createIndicators() {
        for (let i = 0; i < this.totalSlides; i++) {
            const indicator = document.createElement('button');
            indicator.classList.add('indicator');
            if (i === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => this.goToSlide(i));
            this.indicators.appendChild(indicator);
        }
    }

    updateSlideWidth() {
        const slideWidth = this.track.clientWidth;
        this.slides.forEach(slide => {
            slide.style.width = slideWidth + 'px';
        });
        this.track.style.width = (slideWidth * this.totalSlides) + 'px';
        this.updateCarousel();
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.updateCarousel();
    }

    previousSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.updateCarousel();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }

    updateCarousel() {
        const slideWidth = this.track.clientWidth / this.totalSlides;
        const translateX = -this.currentIndex * slideWidth;
        this.track.style.transform = `translateX(${translateX}px)`;
        
        // Update indicators
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }

    startAutoPlay() {
        this.stopAutoPlay(); // Clear existing interval
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 4000); // Change slide every 4 seconds
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }

    addTouchSupport() {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            this.stopAutoPlay();
        });

        this.track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
            e.preventDefault();
        });

        this.track.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            
            const deltaX = startX - currentX;
            const threshold = 50; // Minimum swipe distance
            
            if (Math.abs(deltaX) > threshold) {
                if (deltaX > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
            }
            
            this.startAutoPlay();
        });
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new HomepageCarousel();
});
