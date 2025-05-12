// Get the loader element
const loader = document.querySelector('.loader');

// Function to hide loader
const hideLoader = () => {
    loader.classList.add('hidden');
    // Remove loader from DOM after animation completes
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
};

// Hide loader when page is fully loaded
window.addEventListener('load', () => {
    // Add a small delay to show the animation
    setTimeout(hideLoader, 1500);
});

// Hide loader if it's still visible after 3 seconds (fallback)
setTimeout(hideLoader, 3000); 