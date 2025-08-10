// Gallery Carousel System
class GalleryCarousel {
  constructor() {
    this.sections = {
      'engagement': 'assets/engagement/',
      'varsha-wedding': 'assets/varsha-wedding/',
      'family': 'assets/family/',
      'friends': 'assets/friends/',
      'travel': 'assets/travel/'
    };
    this.currentCarousels = {};
    this.init();
  }

  async init() {
    await this.loadImages();
    this.createCarousels();
  }

  async loadImages() {
    // This will need to be populated with your actual image lists
    // You'll need to create a JSON file or update this with actual file names
    this.imageData = {
      'engagement': [
        'assets/engagement/photo1.jpg',
        'assets/engagement/photo2.jpg',
        'assets/engagement/photo3.jpg',
        'assets/engagement/photo4.jpg',
        'assets/engagement/photo5.jpg',
        'assets/engagement/photo6.jpg',
        'assets/engagement/photo7.jpg'
      ]
    };
  }

  createCarousels() {
    Object.keys(this.sections).forEach(sectionId => {
      const sectionElement = document.getElementById(`${sectionId}-section`);
      if (sectionElement && this.imageData[sectionId]) {
        this.createCarouselForSection(sectionId, this.imageData[sectionId]);
      }
    });
  }

  createCarouselForSection(sectionId, images) {
    const container = document.getElementById(`${sectionId}-section`);
    
    const carouselHTML = `
      <div class="gallery-carousel" id="${sectionId}-carousel">
        <div class="carousel-wrapper">
          <div class="carousel-track" id="${sectionId}-track">
            ${images.map((img, index) => `
              <div class="carousel-slide">
                <img src="${img}" alt="Photo ${index + 1}" loading="lazy">
              </div>
            `).join('')}
          </div>
          
          <button class="carousel-btn prev-btn" data-section="${sectionId}" data-action="prev">‹</button>
          <button class="carousel-btn next-btn" data-section="${sectionId}" data-action="next">›</button>
        </div>
        
        <div class="carousel-indicators" id="${sectionId}-indicators">
          ${images.map((_, index) => `
            <button class="indicator ${index === 0 ? 'active' : ''}" data-section="${sectionId}" data-slide="${index}"></button>
          `).join('')}
        </div>
      </div>
    `;
    
    container.innerHTML = carouselHTML;
    
    // Initialize carousel functionality
    this.initializeCarouselEvents(sectionId, images.length);
    this.currentCarousels[sectionId] = { currentIndex: 0, totalSlides: images.length };
  }

  initializeCarouselEvents(sectionId, totalSlides) {
    // Navigation buttons
    const prevBtn = document.querySelector(`[data-section="${sectionId}"][data-action="prev"]`);
    const nextBtn = document.querySelector(`[data-section="${sectionId}"][data-action="next"]`);
    
    if (prevBtn) prevBtn.addEventListener('click', () => this.navigateCarousel(sectionId, -1));
    if (nextBtn) nextBtn.addEventListener('click', () => this.navigateCarousel(sectionId, 1));
    
    // Indicator buttons
    const indicators = document.querySelectorAll(`[data-section="${sectionId}"][data-slide]`);
    indicators.forEach(indicator => {
      indicator.addEventListener('click', (e) => {
        const slideIndex = parseInt(e.target.dataset.slide);
        this.goToSlide(sectionId, slideIndex);
      });
    });
  }

  navigateCarousel(sectionId, direction) {
    const carousel = this.currentCarousels[sectionId];
    if (!carousel) return;
    
    let newIndex = carousel.currentIndex + direction;
    
    if (newIndex < 0) newIndex = carousel.totalSlides - 1;
    if (newIndex >= carousel.totalSlides) newIndex = 0;
    
    this.goToSlide(sectionId, newIndex);
  }

  goToSlide(sectionId, slideIndex) {
    const carousel = this.currentCarousels[sectionId];
    if (!carousel) return;
    
    carousel.currentIndex = slideIndex;
    
    const track = document.getElementById(`${sectionId}-track`);
    const indicators = document.querySelectorAll(`[data-section="${sectionId}"][data-slide]`);
    
    if (track) {
      const translateX = -slideIndex * 100;
      track.style.transform = `translateX(${translateX}%)`;
    }
    
    // Update indicators
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === slideIndex);
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new GalleryCarousel();
});
