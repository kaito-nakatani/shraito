// Homepage Carousel Functionality - Fixed Version
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
        
        // Set initial state
        this.updateCarousel();
        
        // Add event listeners
        this.prevBtn?.addEventListener('click', () => this.previousSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());
        
        // Auto-play functionality
        this.startAutoPlay();
        
        // Pause auto-play on hover
        this.track.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.track.addEventListener('mouseleave', () => this.startAutoPlay());
        
        // Handle window resize
        window.addEventListener('resize', () => this.updateCarousel());
        
        // Touch/swipe support for mobile
        this.addTouchSupport();
        
        // Handle image loading errors
        this.handleImageErrors();
    }

    createIndicators() {
        if (!this.indicators) return;
        
        this.indicators.innerHTML = '';
        for (let i = 0; i < this.totalSlides; i++) {
            const indicator = document.createElement('button');
            indicator.classList.add('indicator');
            if (i === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => this.goToSlide(i));
            this.indicators.appendChild(indicator);
        }
    }

    updateCarousel() {
        const containerWidth = this.track.parentElement.clientWidth;
        const translateX = -this.currentIndex * containerWidth;
        this.track.style.transform = `translateX(${translateX}px)`;
        
        // Update indicators
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
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

    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 4000);
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
            const threshold = 50;
            
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

    handleImageErrors() {
        const images = this.track.querySelectorAll('img');
        images.forEach((img, index) => {
            img.addEventListener('error', () => {
                console.warn(`Image failed to load: ${img.src}`);
                // Try alternative path
                if (!img.src.includes('./')) {
                    img.src = './' + img.getAttribute('src');
                }
            });
            
            img.addEventListener('load', () => {
                console.log(`Image loaded successfully: ${img.src}`);
            });
        });
    }
}


