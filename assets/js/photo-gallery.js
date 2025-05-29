// Photo Gallery Functionality
document.addEventListener('DOMContentLoaded', () => {
    initPhotoGallery();
});

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
}

// This function is already defined in photo-modal.js, but we're keeping it here for reference
// The actual implementation will use the existing photo-modal.js file
/*
function openPhotoModal(imageSrc, caption) {
    const modal = document.getElementById('photoModal');
    if (!modal) return;

    const modalImg = document.getElementById('photoModalImage');
    const modalCaption = document.getElementById('photoModalCaption');

    if (modalImg) modalImg.src = imageSrc;
    if (modalCaption) modalCaption.textContent = caption;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}
*/