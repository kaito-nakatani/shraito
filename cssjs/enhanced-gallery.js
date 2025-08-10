// Enhanced Gallery Tab Switching
class GalleryTabs {
    constructor() {
        this.tabs = document.querySelectorAll('.section-tab');
        this.sections = document.querySelectorAll('.gallery-section');
        
        if (this.tabs.length > 0 && this.sections.length > 0) {
            this.init();
        }
    }

    init() {
        // Add click listeners to tabs
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const sectionName = tab.dataset.section;
                this.switchToSection(sectionName, tab);
            });
        });
        
        // Initialize image lazy loading
        this.initializeLazyLoading();
        
        // Add lightbox functionality
        this.initializeLightbox();
    }

    switchToSection(sectionName, activeTab) {
    // Remove active class from all tabs and sections
    this.tabs.forEach(tab => tab.classList.remove('active'));
    this.sections.forEach(section => section.classList.remove('active'));
    
    // Add active class to clicked tab
    activeTab.classList.add('active');
    
    // Show corresponding section
    const targetSection = document.getElementById(sectionName + '-section');
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Fix image loading issues
        this.fixImagePaths(targetSection);
    }
    }

    // Add this new method to the GalleryTabs class:
    fixImagePaths(section) {
    const images = section.querySelectorAll('img');
    images.forEach(img => {
        // Handle image loading errors
        img.addEventListener('error', function() {
        // Try different path variations
        const currentSrc = this.src;
        if (!currentSrc.includes('./assets/')) {
            this.src = currentSrc.replace('/assets/', './assets/');
        }
        });
        
        // Ensure proper loading
        if (img.complete && img.naturalHeight === 0) {
        img.src = img.src; // Trigger reload
        }
    });
    }


    initializeLazyLoading() {
        // Simple lazy loading for better performance
        const images = document.querySelectorAll('.gallery-item img');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.getAttribute('src');
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }
    }

    initializeLightbox() {
        const galleryItems = document.querySelectorAll('.gallery-item img');
        
        galleryItems.forEach(img => {
            img.addEventListener('click', () => {
                this.openLightbox(img.src, img.alt);
            });
        });
    }

    openLightbox(src, alt) {
        // Create lightbox overlay
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-overlay';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${src}" alt="${alt}">
                <button class="lightbox-close">&times;</button>
            </div>
        `;
        
        // Add to body
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Add close functionality
        const closeBtn = lightbox.querySelector('.lightbox-close');
        const closeHandler = () => {
            document.body.removeChild(lightbox);
            document.body.style.overflow = '';
        };
        
        closeBtn.addEventListener('click', closeHandler);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeHandler();
            }
        });
        
        // ESC key to close
        document.addEventListener('keydown', function escHandler(e) {
            if (e.key === 'Escape') {
                closeHandler();
                document.removeEventListener('keydown', escHandler);
            }
        });
    }
}

// Initialize gallery tabs when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new GalleryTabs();
});