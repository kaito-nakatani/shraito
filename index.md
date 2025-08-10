---
layout: default
custom_css: ["main", "enhanced-styles", "cherry-storm"]
custom_js: ["enhanced-styles", "cherry-storm", "homepage-carousel"]
---

{% include navbar.html %}

# <span class="shreya"> Shreya </span> & <span class="kaito"> Kaito </span>

<div class="center-content">
  <div class="wedding-announcement">
    <h2>We are Getting Married!</h2>
    <h3><strong>February 3rd - 6th, 2026</strong></h3>
    <h3><strong><a href="https://www.mirayagreens.com/" target="_blank">Miraya Greens</a>, Bangalore, India</strong></h3>
  </div>

  <div class="homepage-carousel">
    <div class="carousel-container">
      <div class="carousel-wrapper">
        <div class="carousel-track" id="carouselTrack">
          <div class="carousel-slide">
            <img src="{{ site.baseurl }}/assets/select_photos/1.jpg" alt="Photo 1" loading="eager">
          </div>
          <div class="carousel-slide">
            <img src="{{ site.baseurl }}/assets/select_photos/2.jpg" alt="Photo 2" loading="lazy">
          </div>
          <div class="carousel-slide">
            <img src="{{ site.baseurl }}/assets/select_photos/3.jpg" alt="Photo 3" loading="lazy">
          </div>
          <div class="carousel-slide">
            <img src="{{ site.baseurl }}/assets/select_photos/4.jpg" alt="Photo 4" loading="lazy">
          </div>
          <div class="carousel-slide">
            <img src="{{ site.baseurl }}/assets/select_photos/5.jpg" alt="Photo 5" loading="lazy">
          </div>
          <div class="carousel-slide">
            <img src="{{ site.baseurl }}/assets/select_photos/6.jpg" alt="Photo 6" loading="lazy">
          </div>
          <div class="carousel-slide">
            <img src="{{ site.baseurl }}/assets/select_photos/7.jpg" alt="Photo 7" loading="lazy">
          </div>
        </div>
        <button class="carousel-btn prev" id="prevBtn">‹</button>
        <button class="carousel-btn next" id="nextBtn">›</button>
      </div>
      <div class="carousel-indicators" id="carouselIndicators"></div>
    </div>
  </div>
</div>
