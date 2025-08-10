---
layout: default
custom_css:
  - main
  - enhanced-styles
  - gallery-carousel
  - cherry-storm
custom_js:
  - main
  - enhanced-styles
  - enhanced-gallery
  - gallery-carousel
  - cherry-storm
---


{% include navbar.html %}

# <span class="shreya"> Shreya </span> & <span class="kaito"> Kaito </span>

<div class="center-content">
  <div class="wedding-announcement">
    <h2>We are Getting Married!</h2>
    <h3><strong>February 3rd - 6th, 2026</strong></h3>
    <h3><strong><a href="https://www.mirayagreens.com/" target="_blank">Miraya Greens</a>, Bangalore, India</strong></h3>
  </div>

  <div class="gallery-counsel">
    <div class="carousel-wrapper">
      <div class="carousel-track" id="carouselTrack">
        <div class="carousel-slide">
          <img src="{{ '/assets/select_photos/photo1.jpg' | relative_url }}" alt="Shreya & Kaito" onerror="this.src='./assets/select_photos/photo1.jpg'">
        </div>
        <div class="carousel-slide">
          <img src="{{ '/assets/select_photos/photo2.jpg' | relative_url }}" alt="Shreya & Kaito" onerror="this.src='./assets/select_photos/photo2.jpg'">
        </div>
        <div class="carousel-slide">
          <img src="{{ '/assets/select_photos/photo3.jpg' | relative_url }}" alt="Shreya & Kaito" onerror="this.src='./assets/select_photos/photo3.jpg'">
        </div>
        <div class="carousel-slide">
          <img src="{{ '/assets/select_photos/photo4.jpg' | relative_url }}" alt="Shreya & Kaito" onerror="this.src='./assets/select_photos/photo4.jpg'">
        </div>
        <div class="carousel-slide">
          <img src="{{ '/assets/select_photos/photo5.jpg' | relative_url }}" alt="Shreya & Kaito" onerror="this.src='./assets/select_photos/photo5.jpg'">
        </div>
        <div class="carousel-slide">
          <img src="{{ '/assets/select_photos/photo6.jpg' | relative_url }}" alt="Shreya & Kaito" onerror="this.src='./assets/select_photos/photo6.jpg'">
        </div>
        <div class="carousel-slide">
          <img src="{{ '/assets/select_photos/photo7.jpg' | relative_url }}" alt="Shreya & Kaito" onerror="this.src='./assets/select_photos/photo7.jpg'">
        </div>
      </div>
      <button class="carousel-btn prev-btn" onclick="navigateGalleryCarousel('select_photos', -1)">‹</button>
      <button class="carousel-btn next-btn" onclick="navigateGalleryCarousel('select_photos', 1)">›</button>
      <div class="carousel-indicators" id="select_photos-indicators">
        <button class="indicator active" onclick="goToGallerySlide('select_photos', 0)"></button>
        <button class="indicator" onclick="goToGallerySlide('select_photos', 1)"></button>
        <button class="indicator" onclick="goToGallerySlide('select_photos', 2)"></button>
        <button class="indicator" onclick="goToGallerySlide('select_photos', 3)"></button>
        <button class="indicator" onclick="goToGallerySlide('select_photos', 4)"></button>
        <button class="indicator" onclick="goToGallerySlide('select_photos', 5)"></button>
        <button class="indicator" onclick="goToGallerySlide('select_photos', 6)"></button>
      </div>
    </div>
  </div>
</div>

<script>
// Gallery carousel functionality
let galleryCarousels = {
  'engagement': { currentIndex: 0, totalSlides: 7 },
  'varsha-wedding': { currentIndex: 0, totalSlides: 4 },
  'family': { currentIndex: 0, totalSlides: 7 }
};

// Section tab functionality - FIXED VERSION
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.section-tab');
  const sections = document.querySelectorAll('.gallery-section');
  
  console.log('Found tabs:', tabs.length);
  console.log('Found sections:', sections.length);
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const sectionId = this.dataset.section;
      console.log('Clicked tab for section:', sectionId);
      
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Update active section
      sections.forEach(s => s.classList.remove('active'));
      const targetSection = document.getElementById(sectionId + '-section');
      console.log('Target section:', targetSection);
      
      if (targetSection) {
        targetSection.classList.add('active');
      } else {
        console.error('Section not found:', sectionId + '-section');
      }
    });
  });
});

function navigateGalleryCarousel(sectionId, direction) {
  const carousel = galleryCarousels[sectionId];
  if (!carousel) {
    console.error('Carousel not found for section:', sectionId);
    return;
  }
  
  let newIndex = carousel.currentIndex + direction;
  
  if (newIndex < 0) newIndex = carousel.totalSlides - 1;
  if (newIndex >= carousel.totalSlides) newIndex = 0;
  
  goToGallerySlide(sectionId, newIndex);
}

function goToGallerySlide(sectionId, slideIndex) {
  const carousel = galleryCarousels[sectionId];
  if (!carousel) {
    console.error('Carousel not found for section:', sectionId);
    return;
  }
  
  carousel.currentIndex = slideIndex;
  
  const track = document.getElementById(sectionId + '-track');
  const indicators = document.querySelectorAll(`#${sectionId}-indicators .indicator`);
  
  if (track) {
    const translateX = -slideIndex * 100;
    track.style.transform = `translateX(${translateX}%)`;
  } else {
    console.error('Track not found:', sectionId + '-track');
  }
  
  // Update indicators
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === slideIndex);
  });
}
</script>