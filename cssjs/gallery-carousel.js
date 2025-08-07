// Gallery Carousel Functionality
class GalleryCarousel {
    constructor() {
        this.carousels = [];
        this.init();
    }

    init() {
        // Initialize tab switching
        this.initTabSwitching();
        
        // Initialize all carousel instances
        this.initCarousels();
        
        // Add error handling for missing images
        this.handleImageErrors();
    }

    initTabSwitching() {
        const tabs = document.querySelectorAll('.section-tab');
        const sections = document.querySelectorAll('.gallery-section');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and sections
                tabs.forEach(t => t.classList.remove('active'));
                sections.forEach(s => s.classList.remove('active'));

                // Add active class to clicked tab
                tab.classList.add('active');

                // Show corresponding section
                const sectionName = tab.dataset.section;
                const targetSection = document.getElementById(sectionName + '-section');
                if (targetSection) {
                    targetSection.classList.add('active');
                    
                    // Initialize carousel for this section if not already done
                    this.initCarouselForSection(sectionName);
                }
            });
        });
    }

    initCarousels() {
        const containers = document.querySelectorAll('.gallery-carousel-container');
        containers.forEach(container => {
            const sectionName = container.dataset.section;
            this.initCarouselForSection(sectionName);
        });
    }

    initCarouselForSection(sectionName) {
        if (this.carousels[sectionName]) return; // Already initialized

        const container = document.querySelector(`[data-section="${sectionName}"]`);
        if (!container) return;

        const track = container.querySelector('.gallery-carousel-track');
        const slides = container.querySelectorAll('.gallery-carousel-slide');
        const prevBtn = container.querySelector('.gallery-carousel-btn.prev');
        const nextBtn = container.querySelector('.gallery-carousel-btn.next');
        const indicators = container.querySelector('.gallery-carousel-indicators');

        if (!track || slides.length === 0) return;

        const carousel = {
            container,
            track,
            slides,
            prevBtn,
            nextBtn,
            indicators,
            currentIndex: 0,
            totalSlides: slides.length
        };

        // Create indicators
        this.createIndicators(carousel);

        // Set initial state
        this.updateCarousel(carousel);

        // Add event listeners
        prevBtn?.addEventListener('click', () => this.previousSlide(carousel));
        nextBtn?.addEventListener('click', () => this.nextSlide(carousel));

        // Add touch support
        this.addTouchSupport(carousel);

        // Add keyboard navigation
        this.addKeyboardNavigation(carousel);

        this.carousels[sectionName] = carousel;
    }

    createIndicators(carousel) {
        if (!carousel.indicators) return;

        carousel.indicators.innerHTML = '';
        
        for (let i = 0; i < carousel.totalSlides; i++) {
            const indicator = document.createElement('button');
            indicator.classList.add('gallery-indicator');
            if (i === 0) indicator.classList.add('active');
            indicator.setAttribute('aria-label', `Go to slide ${i + 1}`);
            indicator.addEventListener('click', () => this.goToSlide(carousel, i));
            carousel.indicators.appendChild(indicator);
        }
    }

    updateCarousel(carousel) {
        const slideWidth = carousel.container.clientWidth;
        const translateX = -carousel.currentIndex * slideWidth;
        
        carousel.track.style.transform = `translateX(${translateX}px)`;

        // Update indicators
        const indicators = carousel.indicators?.querySelectorAll('.gallery-indicator');
        indicators?.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === carousel.currentIndex);
        });

        // Update slides visibility for screen readers
        carousel.slides.forEach((slide, index) => {
            slide.setAttribute('aria-hidden', index !== carousel.currentIndex);
        });
    }

    nextSlide(carousel) {
        carousel.currentIndex = (carousel.currentIndex + 1) % carousel.totalSlides;
        this.updateCarousel(carousel);
    }

    previousSlide(carousel) {
        carousel.currentIndex = (carousel.currentIndex - 1 + carousel.totalSlides) % carousel.totalSlides;
        this.updateCarousel(carousel);
    }

    goToSlide(carousel, index) {
        carousel.currentIndex = index;
        this.updateCarousel(carousel);
    }

    addTouchSupport(carousel) {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        carousel.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        carousel.track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
            e.preventDefault();
        });

        carousel.track.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;

            const deltaX = startX - currentX;
            const threshold = 50;

            if (Math.abs(deltaX) > threshold) {
                if (deltaX > 0) {
                    this.nextSlide(carousel);
                } else {
                    this.previousSlide(carousel);
                }
            }
        });
    }

    addKeyboardNavigation(carousel) {
        carousel.container.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.previousSlide(carousel);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.nextSlide(carousel);
            }
        });
    }

    handleImageErrors() {
        // Add fallback for missing images
        const images = document.querySelectorAll('.gallery-carousel-slide img, .carousel-slide img');
        images.forEach(img => {
            img.addEventListener('error', () => {
                // Try alternative path or show placeholder
                const originalSrc = img.src;
                if (!originalSrc.includes('./')) {
                    img.src = './' + img.src.split('/').slice(-3).join('/');
                } else {
                    // Show placeholder or hide slide
                    img.style.display = 'none';
                    const slide = img.closest('.gallery-carousel-slide, .carousel-slide');
                    if (slide) {
                        slide.style.background = 'linear-gradient(45deg, #ffb3d9, #e3aab5)';
                        slide.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:white;font-size:1.2em;">📸 Photo Loading...</div>';
                    }
                }
            });
        });
    }
}

// Tab switching functionality
class GalleryTabs {
    constructor() {
        this.tabs = document.querySelectorAll('.section-tab');
        this.sections = document.querySelectorAll('.gallery-section');
        
        if (this.tabs.length > 0 && this.sections.length > 0) {
            this.init();
        }
    }

    init() {
        // Tab switching is handled in GalleryCarousel class
        // This is kept for compatibility
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new GalleryCarousel();
    new GalleryTabs(); // For compatibility
});
