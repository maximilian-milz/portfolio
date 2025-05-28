document.addEventListener("DOMContentLoaded", () => {
    // Initialize language
    switchLanguage("de");

    // Simple Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    // Animate section headings
    animateHeadings();

    // Parallax effect for stars background
    const starsContainer = document.querySelector('.stars-container');
    if (starsContainer) {
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            // Calculate movement amount (subtle effect)
            const moveX = (mouseX - 0.5) * 20; // -10px to +10px
            const moveY = (mouseY - 0.5) * 20; // -10px to +10px

            // Apply transform with requestAnimationFrame for better performance
            requestAnimationFrame(() => {
                starsContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });
    }
});

// Function to animate headings
function animateHeadings() {
    document.querySelectorAll('.animated-heading').forEach(heading => {
        // Get the text content
        const text = heading.textContent;
        // Clear the heading
        heading.innerHTML = '';

        // Create a wrapper for the text
        const textWrapper = document.createElement('span');
        textWrapper.className = 'text-wrapper';
        heading.appendChild(textWrapper);

        // Split text into letters and add them to the wrapper
        text.split('').forEach(letter => {
            const letterSpan = document.createElement('span');
            letterSpan.className = 'letter';
            letterSpan.textContent = letter === ' ' ? '\u00A0' : letter; // Use non-breaking space for spaces
            textWrapper.appendChild(letterSpan);
        });
    });
}