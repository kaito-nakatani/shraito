---
layout: default
custom_css:
  - main
  - enhanced-styles
  - cherry-storm
custom_js:
  - main
  - enhanced-styles
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

  <div class="homepage-carousel-container">
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
      <div class="carousel-indicators" id="carouselIndicators"></div>
    </div>
  </div>
  <script>
  document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for all scripts to load, then initialize
    setTimeout(function() {
      if (typeof HomepageCarousel !== 'undefined') {
        new HomepageCarousel();
      } else {
        console.error('HomepageCarousel class not found. Make sure homepage-carousel.js is loaded.');
      }
    }, 100);
  });
  </script>
</div>
