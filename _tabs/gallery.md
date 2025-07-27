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

<div class="modern-gallery-container">
{% include hexphotos.html gridnums="2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3" save_image_names_js="img_names" %}
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Convert hexagon layout to modern grid
    const hexContainer = document.querySelector('.hex-container');
    if (hexContainer) {
        hexContainer.classList.add('modern-gallery-grid');
        hexContainer.classList.remove('hex-container');
        
        // Apply enhanced styling to each image
        const images = hexContainer.querySelectorAll('img');
        images.forEach((img, index) => {
            const wrapper = img.closest('.hex-wrapper') || img.parentElement;
            if (wrapper) {
                wrapper.classList.remove('hex-wrapper', 'hex');
                wrapper.classList.add('gallery-item');
            }
            
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
