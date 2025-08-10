---
title_short: Gallery  
title: Gallery
layout: tab
custom_js:
  - enhanced-gallery
  - gallery-carousel
custom_css:
  - gallery
  - enhanced-gallery
  - enhanced-styles
---

<div class="sectional-gallery">
  <div class="section-tabs">
    <div class="section-tab active" data-section="engagement">💕 Engagement</div>
    <div class="section-tab" data-section="varsha-wedding">📸 Varsha Wedding</div>
    <div class="section-tab" data-section="family">👨‍👩‍👧‍👦 Family</div>
    <div class="section-tab" data-section="friends">👫 Friends</div>
    <div class="section-tab" data-section="travel">✈️ Travel</div>
  </div>
  
  <div class="gallery-section active" id="engagement-section">
    <h3>💕 Engagement Photos</h3>
    <div class="modern-gallery-grid">
      {% for image in site.static_files %}
        {% if image.path contains 'assets/engagement' and image.extname == '.jpg' or image.extname == '.jpeg' or image.extname == '.png' %}
        <div class="gallery-item">
          <img src="{{ site.baseurl }}{{ image.path }}" alt="Engagement Photo" loading="lazy">
        </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>

  <div class="gallery-section" id="varsha-wedding-section">
    <h3>📸 Varsha Wedding</h3>
    <div class="modern-gallery-grid">
      {% for image in site.static_files %}
        {% if image.path contains 'assets/varsha-wedding' and image.extname == '.jpg' or image.extname == '.jpeg' or image.extname == '.png' %}
        <div class="gallery-item">
          <img src="{{ site.baseurl }}{{ image.path }}" alt="Varsha Wedding Photo" loading="lazy">
        </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>

  <div class="gallery-section" id="family-section">
    <h3>👨‍👩‍👧‍👦 Family Photos</h3>
    <div class="modern-gallery-grid">
      {% for image in site.static_files %}
        {% if image.path contains 'assets/family' and image.extname == '.jpg' or image.extname == '.jpeg' or image.extname == '.png' %}
        <div class="gallery-item">
          <img src="{{ site.baseurl }}{{ image.path }}" alt="Family Photo" loading="lazy">
        </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>

  <div class="gallery-section" id="friends-section">
    <h3>👫 With Friends</h3>
    <div class="modern-gallery-grid">
      {% for image in site.static_files %}
        {% if image.path contains 'assets/friends' and image.extname == '.jpg' or image.extname == '.jpeg' or image.extname == '.png' %}
        <div class="gallery-item">
          <img src="{{ site.baseurl }}{{ image.path }}" alt="Friends Photo" loading="lazy">
        </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>

  <div class="gallery-section" id="travel-section">
    <h3>✈️ Travel Memories</h3>
    <div class="modern-gallery-grid">
      {% for image in site.static_files %}
        {% if image.path contains 'assets/travel' and image.extname == '.jpg' or image.extname == '.jpeg' or image.extname == '.png' %}
        <div class="gallery-item">
          <img src="{{ site.baseurl }}{{ image.path }}" alt="Travel Photo" loading="lazy">
        </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
</div>
