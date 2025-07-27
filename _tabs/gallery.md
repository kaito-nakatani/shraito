---
title_short: Gallery
title: Gallery
layout: tab
custom_js: 
  - gallery
  - enhanced-gallery
custom_css: 
  - imghex
  - gallery
  - enhanced-styles
---

<div class="gallery-container enhanced-gallery">
{% include hexphotos.html gridnums="2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3" save_image_names_js="img_names" %}
</div>

<script>
// Initialize enhanced gallery after content loads
document.addEventListener('DOMContentLoaded', function() {
    // Replace hexagon layout with modern grid
    const hexContainer = document.querySelector('.hex-container');
    if (hexContainer) {
        hexContainer.classList.add('modern-gallery-grid');
        
        // Apply enhanced styling to each image
        const images = hexContainer.querySelectorAll('img');
        images.forEach((img, index) => {
            const wrapper = img.closest('.hex-wrapper') || img.parentElement;
            wrapper.classList.add('gallery-item');
            
            // Add loading animation
            img.style.opacity = '0';
            img.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                img.style.transition = 'all 0.3s ease';
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
            }, index * 100);
        });
    }
});
</script>
