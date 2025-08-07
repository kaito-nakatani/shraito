---
title_short: Gallery
title: Gallery
layout: tab
custom_js: 
  - gallery
  - enhanced-gallery
custom_css: 
  - gallery
  - enhanced-styles
---

<div class="carousel-gallery">
    <div class="gallery-sections">
        <div class="section-tabs">
            <button class="section-tab active" onclick="showCarousel('engagement')">💕 Engagement</button>
            <button class="section-tab" onclick="showCarousel('prewedding')">📸 Pre-Wedding</button>
            <button class="section-tab" onclick="showCarousel('family')">👨‍👩‍👧‍👦 Family</button>
            <button class="section-tab" onclick="showCarousel('friends')">👫 Friends</button>
            <button class="section-tab" onclick="showCarousel('travel')">✈️ Travel</button>
        </div>
        
        <!-- Engagement Carousel -->
        <div id="engagement-carousel" class="carousel-section active">
            <h3>💕 Engagement Photos</h3>
            <div class="carousel-container">
                <div class="carousel-wrapper">
                    <div class="carousel-track" id="engagement-track">
                        <div class="carousel-slide"><img src="/assets/engagement/photo1.jpg" alt="Engagement Photo 1"></div>
                        <div class="carousel-slide"><img src="/assets/engagement/photo2.jpg" alt="Engagement Photo 2"></div>
                        <div class="carousel-slide"><img src="/assets/engagement/photo3.jpg" alt="Engagement Photo 3"></div>
                        <div class="carousel-slide"><img src="/assets/engagement/photo4.jpg" alt="Engagement Photo 4"></div>
                        <div class="carousel-slide"><img src="/assets/engagement/photo5.jpg" alt="Engagement Photo 5"></div>
                    </div>
                </div>
                <button class="carousel-btn prev" onclick="moveSlide('engagement', -1)">‹</button>
                <button class="carousel-btn next" onclick="moveSlide('engagement', 1)">›</button>
                <div class="carousel-indicators" id="engagement-indicators">
                    <span class="indicator active" onclick="currentSlide('engagement', 1)"></span>
                    <span class="indicator" onclick="currentSlide('engagement', 2)"></span>
                    <span class="indicator" onclick="currentSlide('engagement', 3)"></span>
                    <span class="indicator" onclick="currentSlide('engagement', 4)"></span>
                    <span class="indicator" onclick="currentSlide('engagement', 5)"></span>
                </div>
            </div>
        </div>
        
        <!-- Other carousels will load on demand -->
        <div id="prewedding-carousel" class="carousel-section">
            <h3>📸 Pre-Wedding Photoshoot</h3>
            <div class="loading-placeholder">Click above to load carousel...</div>
        </div>
        
        <div id="family-carousel" class="carousel-section">
            <h3>👨‍👩‍👧‍👦 Family Photos</h3>
            <div class="loading-placeholder">Click above to load carousel...</div>
        </div>
        
        <div id="friends-carousel" class="carousel-section">
            <h3>👫 With Friends</h3>
            <div class="loading-placeholder">Click above to load carousel...</div>
        </div>
        
        <div id="travel-carousel" class="carousel-section">
            <h3>✈️ Travel Memories</h3>
            <div class="loading-placeholder">Click above to load carousel...</div>
        </div>
    </div>
</div>

<script>
// Carousel functionality
let carouselStates = {
    engagement: { currentSlide: 0, totalSlides: 5 },
    prewedding: { currentSlide: 0, totalSlides: 0 },
    family: { currentSlide: 0, totalSlides: 0 },
    friends: { currentSlide: 0, totalSlides: 0 },
    travel: { currentSlide: 0, totalSlides: 0 }
};

function showCarousel(section) {
    // Hide all carousels
    document.querySelectorAll('.carousel-section').forEach(carousel => {
        carousel.classList.remove('active');
    });
    
    // Remove active from all tabs
    document.querySelectorAll('.section-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected carousel
    document.getElementById(section + '-carousel').classList.add('active');
    event.target.classList.add('active');
    
    // Load carousel if not loaded
    if (section !== 'engagement' && carouselStates[section].totalSlides === 0) {
        loadCarouselSection(section);
    }
}

function loadCarouselSection(section) {
    const carousel = document.getElementById(section + '-carousel');
    const photoCount = getPhotoCount(section);
    
    let carouselHTML = `
        <div class="carousel-container">
            <div class="carousel-wrapper">
                <div class="carousel-track" id="${section}-track">
    `;
    
    for (let i = 1; i <= photoCount; i++) {
        carouselHTML += `<div class="carousel-slide"><img src="/assets/${section}/photo${i}.jpg" alt="${section} Photo ${i}" loading="lazy"></div>`;
    }
    
    carouselHTML += `
                </div>
            </div>
            <button class="carousel-btn prev" onclick="moveSlide('${section}', -1)">‹</button>
            <button class="carousel-btn next" onclick="moveSlide('${section}', 1)">›</button>
            <div class="carousel-indicators" id="${section}-indicators">
    `;
    
    for (let i = 1; i <= photoCount; i++) {
        carouselHTML += `<span class="indicator ${i === 1 ? 'active' : ''}" onclick="currentSlide('${section}', ${i})"></span>`;
    }
    
    carouselHTML += `
            </div>
        </div>
    `;
    
    carousel.innerHTML = '<h3>' + carousel.querySelector('h3').innerHTML + '</h3>' + carouselHTML;
    carouselStates[section].totalSlides = photoCount;
}

function getPhotoCount(section) {
    const counts = {
        prewedding: 6,
        family: 5,
        friends: 7,
        travel: 8
    };
    return counts[section] || 5;
}

function moveSlide(section, direction) {
    const state = carouselStates[section];
    const track = document.getElementById(section + '-track');
    
    state.currentSlide += direction;
    
    if (state.currentSlide >= state.totalSlides) {
        state.currentSlide = 0;
    } else if (state.currentSlide < 0) {
        state.currentSlide = state.totalSlides - 1;
    }
    
    updateCarousel(section);
}

function currentSlide(section, slideIndex) {
    carouselStates[section].currentSlide = slideIndex - 1;
    updateCarousel(section);
}

function updateCarousel(section) {
    const state = carouselStates[section];
    const track = document.getElementById(section + '-track');
    const indicators = document.getElementById(section + '-indicators');
    
    if (track) {
        track.style.transform = `translateX(-${state.currentSlide * 100}%)`;
    }
    
    if (indicators) {
        indicators.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === state.currentSlide);
        });
    }
}

// Auto-play functionality (optional)
function startAutoplay(section, interval = 5000) {
    return setInterval(() => {
        moveSlide(section, 1);
    }, interval);
}
</script>
