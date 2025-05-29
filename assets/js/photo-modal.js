// Photo Modal Functions
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

function closePhotoModal() {
    const modal = document.getElementById('photoModal');
    if (!modal) return;

    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close modal when clicking outside the image
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('photoModal');
    if (!modal) return; // Exit if modal doesn't exist

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
});
