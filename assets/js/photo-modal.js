// Photo Modal Functions
function openPhotoModal(imageSrc, caption) {
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('photoModalImage');
    const modalCaption = document.getElementById('photoModalCaption');

    modalImg.src = imageSrc;
    modalCaption.textContent = caption;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closePhotoModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close modal when clicking outside the image
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('photoModal');
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
});