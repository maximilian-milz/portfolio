// Core functionality for the website
// Contains initialization code and common utility functions

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize all components
    initializeComponents();
    
    // Set up intersection observer for fade-in animations
    setupFadeInAnimations();
});

/**
 * Initialize all website components
 */
function initializeComponents() {
    // Initialize language - only if the function exists
    if (typeof switchLanguage === 'function') {
        try {
            switchLanguage("de"); // Set default language to German
        } catch (e) {
            console.error("Error switching language:", e);
        }
    }
    
    // Initialize photo gallery if the function exists
    if (typeof initPhotoGallery === 'function') {
        try {
            initPhotoGallery();
        } catch (e) {
            console.error("Error initializing photo gallery:", e);
        }
    }
    
    // Animate section headings
    if (typeof animateHeadings === 'function') {
        try {
            animateHeadings();
        } catch (e) {
            console.error("Error animating headings:", e);
        }
    }
}

/**
 * Set up intersection observer for fade-in animations
 */
function setupFadeInAnimations() {
    // Simple Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});

    // Observe all elements with the fade-in class
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
}