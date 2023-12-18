function highlightImage(clickedImage) {
    // Get all movie images
    const images = document.querySelectorAll('.movie-image');

    // Fade out all images
    images.forEach(img => {
        if (img !== clickedImage) {
            img.classList.add('fade-out');
        }
    });

    // Highlight the clicked image
    clickedImage.classList.add('highlight');

    // Remove the highlight after 0.5 seconds
    setTimeout(() => {
        clickedImage.classList.remove('highlight');
        // Also, remove fade-out from all images
        images.forEach(img => img.classList.remove('fade-out'));
    }, 500); // 0.5 seconds
}
// Existing JavaScript...

function respin() {
    // Get all movie images
    const images = document.querySelectorAll('.movie-image');

    // Fade out all images
    images.forEach(img => img.classList.add('fade-out'));

    // Optional: Reset the fade-out after some time, e.g., 0.5 seconds
    setTimeout(() => {
        images.forEach(img => img.classList.remove('fade-out'));
    }, 500); // 0.5 seconds
}
