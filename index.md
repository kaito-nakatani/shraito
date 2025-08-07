---
layout: default
custom_css: ["main", "enhanced-styles", "cherry-storm"]
custom_js: ["enhanced-styles", "cherry-storm", "homepage-carousel"]
rain: false
---

{% include navbar.html %}

# <span class="shreya">Shreya</span> & <span class="kaito">Kaito</span>

<div class="center-content">
  <div class="wedding-announcement">
    <h2>We're Getting Married!</h2>
    <h3><strong>February 3rd, 2026</strong></h3>
    <h3><strong>Bangalore, India</strong></h3>
    <p>Join us as we celebrate our love story and the beginning of our journey together.</p>
  </div>

  <!-- Homepage Carousel - REPLACES ALL HEX GRIDS -->
  <div class="homepage-carousel">
    <div class="carousel-container">
      <div class="carousel-wrapper">
        <div class="carousel-track" id="carouselTrack">
          <div class="carousel-slide">
            <img src="assets/select_photos/photo1.jpg" alt="Wedding Photo 1" loading="lazy">
          </div>
          <div class="carousel-slide">
            <img src="assets/select_photos/photo2.jpg" alt="Wedding Photo 2" loading="lazy">
          </div>
          <div class="carousel-slide">
            <img src="assets/select_photos/photo3.jpg" alt="Wedding Photo 3" loading="lazy">
          </div>
          <div class="carousel-slide">
            <img src="assets/select_photos/photo4.jpg" alt="Wedding Photo 4" loading="lazy">
          </div>
          <div class="carousel-slide">
            <img src="assets/select_photos/photo5.jpg" alt="Wedding Photo 5" loading="lazy">
          </div>
          <div class="carousel-slide">
            <img src="assets/select_photos/photo6.jpg" alt="Wedding Photo 6" loading="lazy">
          </div>
          <div class="carousel-slide">
            <img src="assets/select_photos/photo7.jpg" alt="Wedding Photo 7" loading="lazy">
          </div>
        </div>
        <button class="carousel-btn prev" id="prevBtn" aria-label="Previous photo">&#8249;</button>
        <button class="carousel-btn next" id="nextBtn" aria-label="Next photo">&#8250;</button>
      </div>
      <div class="carousel-indicators" id="carouselIndicators"></div>
    </div>
  </div>

  <div class="couple-description">
    <p><strong>Two hearts, two cultures, one beautiful love story.</strong> We met during our graduate studies and knew we had found something special. Now, we're excited to share our joy with family and friends from around the world.</p>
  </div>
</div>
