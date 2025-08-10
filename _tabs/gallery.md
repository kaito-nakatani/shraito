---
title_short: Gallery
title: Gallery
layout: tab
custom_js:
  - gallery-carousel
custom_css:
  - enhanced-gallery
  - gallery-carousel
  - enhanced-styles
---

<div class="sectional-gallery">
  <div class="section-tabs">
    <div class="section-tab active" data-section="engagement">💕 Engagement</div>
    <div class="section-tab" data-section="varsha-wedding">📸 Varsha Wedding</div>
    <div class="section-tab" data-section="family">👨‍👩‍👧‍👦 Family</div>
  </div>

  <div id="engagement-section" class="gallery-section active">
    <div class="gallery-carousel" id="engagement-carousel">
      <div class="carousel-wrapper">
        <div class="carousel-track" id="engagement-track">
          <div class="carousel-slide">
            <img src="{{ '/assets/engagement/photo1.jpg' | relative_url }}" alt="Engagement Photo 1" loading="lazy" onerror="this.src='./assets/engagement/photo1.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/engagement/photo2.jpg' | relative_url }}" alt="Engagement Photo 2" loading="lazy" onerror="this.src='./assets/engagement/photo2.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/engagement/photo3.jpg' | relative_url }}" alt="Engagement Photo 3" loading="lazy" onerror="this.src='./assets/engagement/photo3.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/engagement/photo4.jpg' | relative_url }}" alt="Engagement Photo 4" loading="lazy" onerror="this.src='./assets/engagement/photo4.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/engagement/photo5.jpg' | relative_url }}" alt="Engagement Photo 5" loading="lazy" onerror="this.src='./assets/engagement/photo5.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/engagement/photo6.jpg' | relative_url }}" alt="Engagement Photo 6" loading="lazy" onerror="this.src='./assets/engagement/photo6.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/engagement/photo7.jpg' | relative_url }}" alt="Engagement Photo 7" loading="lazy" onerror="this.src='./assets/engagement/photo7.jpg'">
          </div>
        </div>
        <button class="carousel-btn prev-btn" onclick="navigateGalleryCarousel('engagement', -1)">‹</button>
        <button class="carousel-btn next-btn" onclick="navigateGalleryCarousel('engagement', 1)">›</button>
      </div>
      <div class="carousel-indicators" id="engagement-indicators">
        <button class="indicator active" onclick="goToGallerySlide('engagement', 0)"></button>
        <button class="indicator" onclick="goToGallerySlide('engagement', 1)"></button>
        <button class="indicator" onclick="goToGallerySlide('engagement', 2)"></button>
        <button class="indicator" onclick="goToGallerySlide('engagement', 3)"></button>
        <button class="indicator" onclick="goToGallerySlide('engagement', 4)"></button>
        <button class="indicator" onclick="goToGallerySlide('engagement', 5)"></button>
        <button class="indicator" onclick="goToGallerySlide('engagement', 6)"></button>
      </div>
    </div>
  </div>
  <div id="varsha-wedding-section" class="gallery-section">
    <div class="gallery-carousel" id="varsha-wedding-carousel">
      <div class="carousel-wrapper">
        <div class="carousel-track" id="varsha-wedding-track">
          <div class="carousel-slide">
            <img src="{{ '/assets/_varsha-wedding/DCK09975.jpg' | relative_url }}" alt="Varsha Wedding Photo 1" loading="lazy" onerror="this.src='./assets/_varsha-wedding/DCK09975.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/_varsha-wedding/DSC03620.jpg' | relative_url }}" alt="Varsha Wedding Photo 2" loading="lazy" onerror="this.src='./assets/_varsha-wedding/DSC03620.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/_varsha-wedding/DSC03703.jpg' | relative_url }}" alt="Varsha Wedding Photo 3" loading="lazy" onerror="this.src='./assets/_varsha-wedding/DSC03703.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/_varsha-wedding/DSC04137.jpg' | relative_url }}" alt="Varsha Wedding Photo 4" loading="lazy" onerror="this.src='./assets/_varsha-wedding/DSC04137.jpg'">
          </div>
        </div>
        <button class="carousel-btn prev-btn" onclick="navigateGalleryCarousel('varsha-wedding', -1)">‹</button>
        <button class="carousel-btn next-btn" onclick="navigateGalleryCarousel('varsha-wedding', 1)">›</button>
      </div>
      <div class="carousel-indicators" id="varsha-wedding-indicators">
        <button class="indicator active" onclick="goToGallerySlide('varsha-wedding', 0)"></button>
        <button class="indicator" onclick="goToGallerySlide('varsha-wedding', 1)"></button>
        <button class="indicator" onclick="goToGallerySlide('varsha-wedding', 2)"></button>
        <button class="indicator" onclick="goToGallerySlide('varsha-wedding', 3)"></button>
      </div>
    </div>
  </div>
  <div id="family-section" class="gallery-section">
    <div class="gallery-carousel" id="family-carousel">
      <div class="carousel-wrapper">
        <div class="carousel-track" id="family-track">
          <div class="carousel-slide">
            <img src="{{ '/assets/family/DCK02961.jpg' | relative_url }}" alt="Family Photo 1" loading="lazy" onerror="this.src='./assets/family/DCK02961.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/family/DCK03123.jpg' | relative_url }}" alt="Family Photo 2" loading="lazy" onerror="this.src='./assets/family/DCK03123.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/family/DCK03150.jpg' | relative_url }}" alt="Family Photo 3" loading="lazy" onerror="this.src='./assets/family/DCK03150.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/family/DCK04077.jpg' | relative_url }}" alt="Family Photo 4" loading="lazy" onerror="this.src='./assets/family/DCK04077.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/family/DSCF6319.jpg' | relative_url }}" alt="Family Photo 5" loading="lazy" onerror="this.src='./assets/family/DSCF6319.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/family/DSCF6989.jpg' | relative_url }}" alt="Family Photo 6" loading="lazy" onerror="this.src='./assets/family/DSCF6989.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/family/DSCF7075.jpg' | relative_url }}" alt="Family Photo 7" loading="lazy" onerror="this.src='./assets/family/DSCF7075.jpg'">
          </div>
        </div>
        <button class="carousel-btn prev-btn" onclick="navigateGalleryCarousel('family', -1)">‹</button>
        <button class="carousel-btn next-btn" onclick="navigateGalleryCarousel('family', 1)">›</button>
      </div>
      <div class="carousel-indicators" id="family-indicators">
        <button class="indicator active" onclick="goToGallerySlide('family', 0)"></button>
        <button class="indicator" onclick="goToGallerySlide('family', 1)"></button>
        <button class="indicator" onclick="goToGallerySlide('family', 2)"></button>
        <button class="indicator" onclick="goToGallerySlide('family', 3)"></button>
        <button class="indicator" onclick="goToGallerySlide('family', 4)"></button>
        <button class="indicator" onclick="goToGallerySlide('family', 5)"></button>
        <button class="indicator" onclick="goToGallerySlide('family', 6)"></button>
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

// Section tab functionality
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.section-tab');
  const sections = document.querySelectorAll('.gallery-section');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const sectionId = this.dataset.section;
      
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Update active section
      sections.forEach(s => s.classList.remove('active'));
      document.getElementById(sectionId + '-section').classList.add('active');
    });
  });
});

function navigateGalleryCarousel(sectionId, direction) {
  const carousel = galleryCarousels[sectionId];
  if (!carousel) return;
  
  let newIndex = carousel.currentIndex + direction;
  
  if (newIndex < 0) newIndex = carousel.totalSlides - 1;
  if (newIndex >= carousel.totalSlides) newIndex = 0;
  
  goToGallerySlide(sectionId, newIndex);
}

function goToGallerySlide(sectionId, slideIndex) {
  const carousel = galleryCarousels[sectionId];
  if (!carousel) return;
  
  carousel.currentIndex = slideIndex;
  
  const track = document.getElementById(sectionId + '-track');
  const indicators = document.querySelectorAll(`#${sectionId}-indicators .indicator`);
  
  if (track) {
    const translateX = -slideIndex * 100;
    track.style.transform = `translateX(${translateX}%)`;
  }
  
  // Update indicators
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === slideIndex);
  });
}
</script>
