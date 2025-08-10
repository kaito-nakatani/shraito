// Mobile Slider Indicator for Tab Navigation
class MobileSliderIndicator {
  constructor() {
    this.navTabs = document.querySelector('.nav-tabs.single-row');
    if (this.navTabs && window.innerWidth <= 768) {
      this.init();
    }
  }

  init() {
    this.updateSliderPosition();
    
    this.navTabs.addEventListener('scroll', () => {
      this.updateSliderPosition();
    });
    
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        this.updateSliderPosition();
      }
    });
  }

  updateSliderPosition() {
    const scrollLeft = this.navTabs.scrollLeft;
    const maxScroll = this.navTabs.scrollWidth - this.navTabs.clientWidth;
    const scrollPercent = scrollLeft / maxScroll;
    
    // Update slider position based on scroll
    const slider = this.navTabs.querySelector('::after');
    if (slider) {
      const newPosition = 20 + (60 * scrollPercent); // Move between 20% and 80% of container width
      this.navTabs.style.setProperty('--slider-position', newPosition + '%');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MobileSliderIndicator();
});
