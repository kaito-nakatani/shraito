---
layout: default
custom_css: ["main", "enhanced-styles", "cherry-storm"]
custom_js: ["enhanced-styles", "cherry-storm", "homepage-carousel"]
rain: false
---

{% include navbar.html %}

# <span class="shreya">Dr. Shreya Kishore</span> & <span class="kaito">Mr. Kaito Nakatani</span>

<div class="center-content">
  <div class="wedding-announcement">
    <h2>We're Getting Married!</h2>
    <h3><strong>February 3rd - 6th, 2026</strong></h3>
    <h3><strong><a href="https://www.mirayagreens.com/" target="_blank"> Miraya Greens </a>, Bangalore, India</strong></h3>
  </div>

  <!-- Homepage Carousel with Correct Image Paths -->
  <div class="homepage-carousel">
    <div class="carousel-container">
      <div class="carousel-wrapper">
        <div class="carousel-track" id="carouselTrack">
          <div class="carousel-slide active">
            <img src="./assets/select_photos/photo1.jpg" alt="Wedding Photo 1" loading="eager">
          </div>
          <div class="carousel-slide">
            <img src="./assets/select_photos/photo2.jpg" alt="Wedding Photo 2" loading="lazy">
          </div>
          <div class="carousel-slide">
            <img src="./assets/select_photos/photo3.jpg" alt="Wedding Photo 3" loading="lazy">
          </div>
          <div class="carousel-slide">
            <img src="./assets/select_photos/photo4.jpg" alt="Wedding Photo 4" loading="lazy">
          </div>
          <div class="carousel-slide">
            <img src="./assets/select_photos/photo5.jpg" alt="Wedding Photo 5" loading="lazy">
          </div>
          <div class="carousel-slide">
            <img src="./assets/select_photos/photo6.jpg" alt="Wedding Photo 6" loading="lazy">
          </div>
          <div class="carousel-slide">
            <img src="./assets/select_photos/photo7.jpg" alt="Wedding Photo 7" loading="lazy">
          </div>
        </div>
        <button class="carousel-btn prev" id="prevBtn" aria-label="Previous photo">‹</button>
        <button class="carousel-btn next" id="nextBtn" aria-label="Next photo">›</button>
      </div>
      <div class="carousel-indicators" id="carouselIndicators"></div>
    </div>
  </div>
</div>
