// Mobile Navigation Scroll Indicators
class MobileNavScroll {
  constructor() {
    this.navTabs = document.querySelector('.nav-tabs.single-row');
    if (this.navTabs && window.innerWidth <= 768) {
      this.init();
    }
  }

  init() {
    this.updateScrollIndicators();
    
    this.navTabs.addEventListener('scroll', () => {
      this.updateScrollIndicators();
    });
    
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        this.updateScrollIndicators();
      }
    });
  }

  updateScrollIndicators() {
    const scrollLeft = this.navTabs.scrollLeft;
    const maxScroll = this.navTabs.scrollWidth - this.navTabs.clientWidth;
    
    if (scrollLeft <= 5) {
      this.navTabs.classList.add('at-start');
    } else {
      this.navTabs.classList.remove('at-start');
    }
    
    if (scrollLeft >= maxScroll - 5) {
      this.navTabs.classList.add('at-end');
    } else {
      this.navTabs.classList.remove('at-end');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MobileNavScroll();
});
