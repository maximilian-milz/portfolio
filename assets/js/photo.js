/**
 * Initialize the photo gallery
 */
function initPhotoGallery() {
    // Get all photo items
    const photoItems = document.querySelectorAll('.photo-item');
    const featuredPhoto = document.querySelector('.featured-photo-container');

    // Add click event to featured photo
    if (featuredPhoto) {
        featuredPhoto.addEventListener('click', () => {
            const imgSrc = featuredPhoto.querySelector('img').src;
            const caption = featuredPhoto.querySelector('.featured-photo-caption span').textContent;
            openPhotoModal(imgSrc, caption);
        });
    }

    // Add click events to all photo items
    photoItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const caption = item.querySelector('.photo-grid-caption span').textContent;
            openPhotoModal(imgSrc, caption);
        });
    });

    // Set up photo modal event listeners
    setupPhotoModal();
}

/**
 * Set up the photo modal event listeners
 */
function setupPhotoModal() {
    const modal = document.getElementById('photoModal');
    if (!modal) return; // Exit if modal doesn't exist

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closePhotoModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closePhotoModal();
        }
    });

    // Add touch swipe support for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    modal.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
    }, false);

    modal.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, false);

    function handleSwipe() {
        // If swiped down more than 50px, close the modal
        if (touchEndY - touchStartY > 50 && modal.classList.contains('show')) {
            closePhotoModal();
        }
    }
}

/**
 * Open the photo modal
 * @param {string} imageSrc - Source URL of the image
 * @param {string} caption - Caption text for the image
 */
function openPhotoModal(imageSrc, caption) {
    const modal = document.getElementById('photoModal');
    if (!modal) return;

    const modalImg = document.getElementById('photoModalImage');
    const modalCaption = document.getElementById('photoModalCaption');

    if (modalImg) modalImg.src = imageSrc;
    if (modalCaption) modalCaption.textContent = caption;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open

    // For mobile: scroll to top of modal to ensure visibility
    if (window.innerWidth <= 480) {
        setTimeout(() => {
            modal.scrollTop = 0;
        }, 100);
    }
}

/**
 * Close the photo modal
 */
function closePhotoModal() {
    const modal = document.getElementById('photoModal');
    if (!modal) return;

    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
}