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

<div class="sectional-gallery">
    <div class="gallery-sections">
        <div class="section-tabs">
            <button class="section-tab active" onclick="showSection('engagement')">💕 Engagement</button>
            <button class="section-tab" onclick="showSection('prewedding')">📸 Pre-Wedding</button>
            <button class="section-tab" onclick="showSection('family')">👨‍👩‍👧‍👦 Family</button>
            <button class="section-tab" onclick="showSection('friends')">👫 Friends</button>
            <button class="section-tab" onclick="showSection('travel')">✈️ Travel</button>
        </div>
        
        <!-- PERFORMANCE OPTIMIZED: Only load 6 photos initially, rest on demand -->
        <div id="engagement" class="gallery-section active">
            <h3>💕 Engagement Photos</h3>
            <div class="lazy-gallery-container">
                {% include hexphotos.html gridnums="2,2" section="engagement" %}
                <button class="load-more-btn" onclick="loadMorePhotos('engagement', 6)">Load More Photos</button>
            </div>
        </div>
        
        <div id="prewedding" class="gallery-section">
            <h3>📸 Pre-Wedding Photoshoot</h3>
            <div class="lazy-gallery-container">
                <!-- Load on demand -->
                <div class="loading-placeholder">Click to load photos...</div>
                <button class="load-section-btn" onclick="loadSectionPhotos('prewedding', '3,2')">Load Pre-Wedding Photos</button>
            </div>
        </div>
        
        <div id="family" class="gallery-section">
            <h3>👨‍👩‍👧‍👦 Family Photos</h3>
            <div class="lazy-gallery-container">
                <div class="loading-placeholder">Click to load photos...</div>
                <button class="load-section-btn" onclick="loadSectionPhotos('family', '2,2')">Load Family Photos</button>
            </div>
        </div>
        
        <div id="friends" class="gallery-section">
            <h3>👫 With Friends</h3>
            <div class="lazy-gallery-container">
                <div class="loading-placeholder">Click to load photos...</div>
                <button class="load-section-btn" onclick="loadSectionPhotos('friends', '3,2')">Load Friends Photos</button>
            </div>
        </div>
        
        <div id="travel" class="gallery-section">
            <h3>✈️ Travel Memories</h3>
            <div class="lazy-gallery-container">
                <div class="loading-placeholder">Click to load photos...</div>
                <button class="load-section-btn" onclick="loadSectionPhotos('travel', '2,3')">Load Travel Photos</button>
            </div>
        </div>
    </div>
</div>

<script>
// PERFORMANCE OPTIMIZATION: Lazy Loading Gallery
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.gallery-section');
    const tabs = document.querySelectorAll('.section-tab');
    
    sections.forEach(section => section.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('active');
}

function loadSectionPhotos(section, gridnums) {
    const container = document.querySelector(`#${section} .lazy-gallery-container`);
    container.innerHTML = '<div class="loading">Loading photos...</div>';
    
    // Simulate loading with delay for better UX
    setTimeout(() => {
        const photoCount = gridnums.split(',').reduce((sum, num) => sum + parseInt(num), 0);
        let photosHTML = '<div class="hex-container modern-gallery-grid">';
        
        for (let i = 1; i <= photoCount; i++) {
            photosHTML += `
                <div class="hex-wrapper gallery-item">
                    <div class="hex">
                        <img src="/assets/${section}/photo${i}.jpg" 
                             alt="Photo ${i}"
                             loading="lazy"
                             onerror="this.style.display='none';">
                    </div>
                </div>
            `;
        }
        photosHTML += '</div>';
        container.innerHTML = photosHTML;
    }, 500);
}

function loadMorePhotos(section, startIndex) {
    const button = event.target;
    button.innerHTML = 'Loading...';
    button.disabled = true;
    
    setTimeout(() => {
        const container = document.querySelector(`#${section} .hex-container`);
        
        // Add more photos (example: photos 5-8)
        for (let i = startIndex; i <= startIndex + 3; i++) {
            const photoDiv = document.createElement('div');
            photoDiv.className = 'hex-wrapper gallery-item';
            photoDiv.innerHTML = `
                <div class="hex">
                    <img src="/assets/${section}/photo${i}.jpg" 
                         alt="Photo ${i}"
                         loading="lazy"
                         onerror="this.style.display='none';">
                </div>
            `;
            container.appendChild(photoDiv);
        }
        
        button.style.display = 'none'; // Hide load more button
    }, 300);
}
</script>
