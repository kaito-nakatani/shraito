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
  - homepage-carousel 
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
      <button class="carousel-btn prev-btn" id="prevBtn" aria-label="Previous photo">‹</button>
      <button class="carousel-btn next-btn" id="nextBtn" aria-label="Next photo">›</button>
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
</div>
