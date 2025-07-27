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
        
        <div id="engagement" class="gallery-section active">
            <h3>Engagement Photos</h3>
            <div class="section-gallery">
                {% include hexphotos.html gridnums="2,3,2,3" section="engagement" %}
            </div>
        </div>
        
        <div id="prewedding" class="gallery-section">
            <h3>Pre-Wedding Photoshoot</h3>
            <div class="section-gallery">
                {% include hexphotos.html gridnums="3,2,3,2" section="prewedding" %}
            </div>
        </div>
        
        <div id="family" class="gallery-section">
            <h3>Family Photos</h3>
            <div class="section-gallery">
                {% include hexphotos.html gridnums="2,2,3,2" section="family" %}
            </div>
        </div>
        
        <div id="friends" class="gallery-section">
            <h3>With Friends</h3>
            <div class="section-gallery">
                {% include hexphotos.html gridnums="3,3,2,2" section="friends" %}
            </div>
        </div>
        
        <div id="travel" class="gallery-section">
            <h3>Travel Memories</h3>
            <div class="section-gallery">
                {% include hexphotos.html gridnums="2,3,3,2" section="travel" %}
            </div>
        </div>
    </div>
</div>

<script>
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.gallery-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.section-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionName).classList.add('active');
    
    // Add active class to clicked tab
    event.target.classList.add('active');
    
    // Apply enhanced gallery styling to new section
    setTimeout(() => {
        initializeSectionGallery(sectionName);
    }, 100);
}

function initializeSectionGallery(sectionName) {
    const sectionContainer = document.querySelector(`#${sectionName} .section-gallery`);
    if (sectionContainer) {
        const hexContainer = sectionContainer.querySelector('.hex-container');
        if (hexContainer) {
            hexContainer.classList.add('modern-gallery-grid');
            
            const images = hexContainer.querySelectorAll('img');
            images.forEach((img, index) => {
                const wrapper = img.closest('.hex-wrapper') || img.parentElement;
                wrapper.classList.add('gallery-item');
                
                img.style.opacity = '0';
                img.style.transform = 'scale(0.9)';
                
                setTimeout(() => {
                    img.style.transition = 'all 0.3s ease';
                    img.style.opacity = '1';
                    img.style.transform = 'scale(1)';
                }, index * 100);
            });
        }
    }
}

// Initialize default section on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeSectionGallery('engagement');
});
</script>
