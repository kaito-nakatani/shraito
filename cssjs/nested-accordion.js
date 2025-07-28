// Nested Accordion Functionality
function toggleSection(headerElement, sectionId) {
    const section = document.getElementById(sectionId);
    const icon = headerElement.querySelector('.section-icon');
    
    if (section.classList.contains('active')) {
        // Close section
        section.classList.remove('active');
        section.style.display = 'none';
        icon.textContent = '+';
        headerElement.classList.remove('active');
        
        // Close all subsections when closing main section
        const subsections = section.querySelectorAll('.subsection-content');
        subsections.forEach(sub => {
            sub.classList.remove('active');
            sub.style.display = 'none';
            const subIcon = sub.parentElement.querySelector('.subsection-icon');
            if (subIcon) subIcon.textContent = '▶';
        });
    } else {
        // Close other sections first (optional - remove if you want multiple sections open)
        document.querySelectorAll('.section-content').forEach(otherSection => {
            if (otherSection !== section) {
                otherSection.classList.remove('active');
                otherSection.style.display = 'none';
                const otherIcon = document.querySelector(`[onclick*="${otherSection.id}"] .section-icon`);
                if (otherIcon) {
                    otherIcon.textContent = '+';
                    otherIcon.parentElement.classList.remove('active');
                }
            }
        });
        
        // Open this section
        section.classList.add('active');
        section.style.display = 'block';
        icon.textContent = '−';
        headerElement.classList.add('active');
    }
}

function toggleSubsection(headerElement, subsectionId) {
    const subsection = document.getElementById(subsectionId);
    const icon = headerElement.querySelector('.subsection-icon');
    
    if (subsection.classList.contains('active')) {
        // Close subsection
        subsection.classList.remove('active');
        subsection.style.display = 'none';
        icon.textContent = '▶';
        headerElement.classList.remove('active');
    } else {
        // Open subsection
        subsection.classList.add('active');
        subsection.style.display = 'block';
        icon.textContent = '▼';
        headerElement.classList.add('active');
    }
}

// Initialize nested accordion
document.addEventListener('DOMContentLoaded', function() {
    // Ensure all sections and subsections are closed initially
    document.querySelectorAll('.section-content').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });
    
    document.querySelectorAll('.subsection-content').forEach(subsection => {
        subsection.style.display = 'none';
        subsection.classList.remove('active');
    });
});
