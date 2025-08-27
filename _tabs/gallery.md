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
    <div class="section-tab" data-section="proposal">💍 Proposal</div>
    <div class="section-tab" data-section="family">👨‍👩‍👧‍👦 Family</div>
    <div class="section-tab" data-section="postgrad">🏫 postgrad</div>
    <div class="section-tab" data-section="postgrad">💼 Post-Graduation</div>
  </div>

  <!-- ENGAGEMENT SECTION -->
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
      </div>
    </div>
  </div>
  
  <!-- VARSHA WEDDING SECTION -->
  <div id="varsha-wedding-section" class="gallery-section">
    <div class="gallery-carousel" id="varsha-wedding-carousel">
      <div class="carousel-wrapper">
        <div class="carousel-track" id="varsha-wedding-track">
          <div class="carousel-slide">
            <img src="{{ '/assets/varsha-wedding/photo1.jpg' | relative_url }}" alt="Varsha Wedding Photo 1" loading="lazy" onerror="this.src='./assets/varsha-wedding/photo1.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/varsha-wedding/photo2.jpg' | relative_url }}" alt="Varsha Wedding Photo 2" loading="lazy" onerror="this.src='./assets/varsha-wedding/photo2.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/varsha-wedding/photo3.jpg' | relative_url }}" alt="Varsha Wedding Photo 3" loading="lazy" onerror="this.src='./assets/varsha-wedding/photo3.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/varsha-wedding/photo4.jpg' | relative_url }}" alt="Varsha Wedding Photo 4" loading="lazy" onerror="this.src='./assets/varsha-wedding/photo4.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/varsha-wedding/photo5.jpg' | relative_url }}" alt="Varsha Wedding Photo 5" loading="lazy" onerror="this.src='./assets/varsha-wedding/photo5.jpg'">
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
        <button class="indicator" onclick="goToGallerySlide('varsha-wedding', 4)"></button>
      </div>
    </div>
  </div>

  <!-- PROPOSAL SECTION -->
  <div id="proposal-section" class="gallery-section">
    <div class="gallery-carousel" id="proposal-carousel">
      <div class="carousel-wrapper">
        <div class="carousel-track" id="proposal-track">
          <div class="carousel-slide">
            <img src="{{ '/assets/proposal/photo1.jpg' | relative_url }}" alt="Proposal Photo 1" loading="lazy" onerror="this.src='./assets/proposal/photo1.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/proposal/photo2.jpg' | relative_url }}" alt="Proposal Photo 2" loading="lazy" onerror="this.src='./assets/proposal/photo2.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/proposal/photo3.jpg' | relative_url }}" alt="Proposal Photo 3" loading="lazy" onerror="this.src='./assets/proposal/photo3.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/proposal/photo4.jpg' | relative_url }}" alt="Proposal Photo 4" loading="lazy" onerror="this.src='./assets/proposal/photo4.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/proposal/photo5.jpg' | relative_url }}" alt="Proposal Photo 5" loading="lazy" onerror="this.src='./assets/proposal/photo5.jpg'">
          </div>
        </div>
        <button class="carousel-btn prev-btn" onclick="navigateGalleryCarousel('proposal', -1)">‹</button>
        <button class="carousel-btn next-btn" onclick="navigateGalleryCarousel('proposal', 1)">›</button>
      </div>
      <div class="carousel-indicators" id="proposal-indicators">
        <button class="indicator active" onclick="goToGallerySlide('proposal', 0)"></button>
        <button class="indicator" onclick="goToGallerySlide('proposal', 1)"></button>
        <button class="indicator" onclick="goToGallerySlide('proposal', 2)"></button>
        <button class="indicator" onclick="goToGallerySlide('proposal', 3)"></button>
        <button class="indicator" onclick="goToGallerySlide('proposal', 4)"></button>
      </div>
    </div>
  </div>

  <!-- FAMILY SECTION -->
  <div id="family-section" class="gallery-section">
    <div class="gallery-carousel" id="family-carousel">
      <div class="carousel-wrapper">
        <div class="carousel-track" id="family-track">
          <div class="carousel-slide">
            <img src="{{ '/assets/family/photo1.jpg' | relative_url }}" alt="Family Photo 1" loading="lazy" onerror="this.src='./assets/family/photo1.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/family/photo2.jpg' | relative_url }}" alt="Family Photo 2" loading="lazy" onerror="this.src='./assets/family/photo2.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/family/photo3.jpg' | relative_url }}" alt="Family Photo 3" loading="lazy" onerror="this.src='./assets/family/photo3.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/family/photo4.jpg' | relative_url }}" alt="Family Photo 4" loading="lazy" onerror="this.src='./assets/family/photo4.jpg'">
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
      </div>
    </div>
  </div>

  <!-- haverford SECTION -->
  <div id="haverford-section" class="gallery-section">
    <div class="gallery-carousel" id="haverford-carousel">
      <div class="carousel-wrapper">
        <div class="carousel-track" id="haverford-track">
          <div class="carousel-slide">
            <img src="{{ '/assets/haverford/photo1.jpg' | relative_url }}" alt="Haverford Photo 1" loading="lazy" onerror="this.src='./assets/haverford/photo1.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/haverford/photo2.jpg' | relative_url }}" alt="Haverford Photo 2" loading="lazy" onerror="this.src='./assets/haverford/photo2.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/haverford/photo3.jpg' | relative_url }}" alt="Haverford Photo 3" loading="lazy" onerror="this.src='./assets/haverford/photo3.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/haverford/photo4.jpg' | relative_url }}" alt="Haverford Photo 4" loading="lazy" onerror="this.src='./assets/haverford/photo4.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/haverford/photo5.jpg' | relative_url }}" alt="Haverford Photo 5" loading="lazy" onerror="this.src='./assets/haverford/photo5.jpg'">
          </div>
        </div>
        <button class="carousel-btn prev-btn" onclick="navigateGalleryCarousel('haverford', -1)">‹</button>
        <button class="carousel-btn next-btn" onclick="navigateGalleryCarousel('haverford', 1)">›</button>
      </div>
      <div class="carousel-indicators" id="haverford-indicators">
        <button class="indicator active" onclick="goToGallerySlide('haverford', 0)"></button>
        <button class="indicator" onclick="goToGallerySlide('haverford', 1)"></button>
        <button class="indicator" onclick="goToGallerySlide('haverford', 2)"></button>
        <button class="indicator" onclick="goToGallerySlide('haverford', 3)"></button>
        <button class="indicator" onclick="goToGallerySlide('haverford', 4)"></button>
      </div>
    </div>
  </div>

  <!-- Post-grad SECTION -->
  <div id="postgrad-section" class="gallery-section">
    <div class="gallery-carousel" id="postgrad-carousel">
      <div class="carousel-wrapper">
        <div class="carousel-track" id="postgrad-track">
          <div class="carousel-slide">
            <img src="{{ '/assets/postgrad/photo1.jpg' | relative_url }}" alt="Post-grad Photo 1" loading="lazy" onerror="this.src='./assets/postgrad/photo1.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/postgrad/photo2.jpg' | relative_url }}" alt="Post-grad Photo 2" loading="lazy" onerror="this.src='./assets/postgrad/photo2.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/postgrad/photo3.jpg' | relative_url }}" alt="Post-grad Photo 3" loading="lazy" onerror="this.src='./assets/postgrad/photo3.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/postgrad/photo4.jpg' | relative_url }}" alt="Post-grad Photo 4" loading="lazy" onerror="this.src='./assets/postgrad/photo4.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/postgrad/photo5.jpg' | relative_url }}" alt="Post-grad Photo 5" loading="lazy" onerror="this.src='./assets/postgrad/photo5.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/postgrad/photo6.jpg' | relative_url }}" alt="Post-grad Photo 6" loading="lazy" onerror="this.src='./assets/postgrad/photo6.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/postgrad/photo7.jpg' | relative_url }}" alt="Post-grad Photo 7" loading="lazy" onerror="this.src='./assets/postgrad/photo7.jpg'">
          </div>
          <div class="carousel-slide">
            <img src="{{ '/assets/postgrad/photo8.jpg' | relative_url }}" alt="Post-grad Photo 8" loading="lazy" onerror="this.src='./assets/postgrad/photo8.jpg'">
          </div>
        </div>
        <button class="carousel-btn prev-btn" onclick="navigateGalleryCarousel('postgrad', -1)">‹</button>
        <button class="carousel-btn next-btn" onclick="navigateGalleryCarousel('postgrad', 1)">›</button>
      </div>
      <div class="carousel-indicators" id="postgrad-indicators">
        <button class="indicator active" onclick="goToGallerySlide('postgrad', 0)"></button>
        <button class="indicator" onclick="goToGallerySlide('postgrad', 1)"></button>
        <button class="indicator" onclick="goToGallerySlide('postgrad', 2)"></button>
        <button class="indicator" onclick="goToGallerySlide('postgrad', 3)"></button>
        <button class="indicator" onclick="goToGallerySlide('postgrad', 4)"></button>
        <button class="indicator" onclick="goToGallerySlide('postgrad', 5)"></button>
        <button class="indicator" onclick="goToGallerySlide('postgrad', 6)"></button>
        <button class="indicator" onclick="goToGallerySlide('postgrad', 7)"></button>
      </div>
    </div>
  </div>
</div>

<script>
// Gallery carousel functionality
let galleryCarousels = {
  'engagement': { currentIndex: 0, totalSlides: 5 },
  'varsha-wedding': { currentIndex: 0, totalSlides: 5 },
  'family': { currentIndex: 0, totalSlides: 4 },
  'proposal': { currentIndex: 0, totalSlides: 5 },
  'haverford': { currentIndex: 0, totalSlides: 5 }
  'postgrad': { currentIndex: 0, totalSlides: 8 }
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
