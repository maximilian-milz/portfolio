// Photo Slideshow Functionality
document.addEventListener('DOMContentLoaded', () => {
    initSlideshow();
});

function initSlideshow() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (!slideshowContainer) return;

    const slides = document.querySelectorAll('.slideshow-slide');
    const dots = document.querySelectorAll('.slideshow-dot');
    const prevButton = document.querySelector('.slideshow-prev');
    const nextButton = document.querySelector('.slideshow-next');
    const progressBar = document.querySelector('.slideshow-progress-bar');

    let currentSlide = 0;
    const totalSlides = slides.length;
    const slideInterval = 5000; // 5 seconds per slide
    let autoPlayTimer = null;
    let progressTimer = null;
    let progressValue = 0;

    // Initialize first slide
    updateSlideState();
    startAutoPlay();

    // Event listeners for navigation
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            goToSlide(currentSlide - 1);
            resetAutoPlay();
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            goToSlide(currentSlide + 1);
            resetAutoPlay();
        });
    }

    // Event listeners for pagination dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetAutoPlay();
        });
    });

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    slideshowContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        pauseAutoPlay();
    }, false);

    slideshowContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoPlay();
    }, false);

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - go to next slide
            goToSlide(currentSlide + 1);
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - go to previous slide
            goToSlide(currentSlide - 1);
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToSlide(currentSlide - 1);
            resetAutoPlay();
        } else if (e.key === 'ArrowRight') {
            goToSlide(currentSlide + 1);
            resetAutoPlay();
        }
    });

    // Pause auto-advance on hover
    slideshowContainer.addEventListener('mouseenter', () => {
        pauseAutoPlay();
    });

    slideshowContainer.addEventListener('mouseleave', () => {
        startAutoPlay();
    });

    // Function to start auto play
    function startAutoPlay() {
        if (autoPlayTimer) clearInterval(autoPlayTimer);
        if (progressTimer) clearInterval(progressTimer);

        // Reset progress
        progressValue = 0;
        updateProgressBar();

        // Start progress animation
        const progressStep = 100 / (slideInterval / 100); // Update every 100ms
        progressTimer = setInterval(() => {
            progressValue += progressStep;
            if (progressValue >= 100) {
                progressValue = 100;
                clearInterval(progressTimer);
            }
            updateProgressBar();
        }, 100);

        // Set timer for next slide
        autoPlayTimer = setTimeout(() => {
            goToSlide(currentSlide + 1);
            startAutoPlay();
        }, slideInterval);
    }

    // Function to pause auto play
    function pauseAutoPlay() {
        if (autoPlayTimer) clearTimeout(autoPlayTimer);
        if (progressTimer) clearInterval(progressTimer);
    }

    // Function to reset and restart auto play
    function resetAutoPlay() {
        pauseAutoPlay();
        startAutoPlay();
    }

    // Update progress bar
    function updateProgressBar() {
        if (progressBar) {
            progressBar.style.width = `${progressValue}%`;
        }
    }

    // Function to go to a specific slide
    function goToSlide(index) {
        // Get the previous slide for transition direction
        const prevSlide = currentSlide;

        // Handle wrapping around
        if (index < 0) {
            currentSlide = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        updateSlideState(prevSlide);
    }

    // Update slide and dot states
    function updateSlideState(prevSlide) {
        // Update slides with direction-aware transitions
        slides.forEach((slide, index) => {
            // Remove active class from all slides
            slide.classList.remove('active');

            // Add active class to current slide
            if (index === currentSlide) {
                slide.classList.add('active');
            }
        });

        // Update pagination dots
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentSlide) {
                dot.classList.add('active');
            }
        });
    }
}
