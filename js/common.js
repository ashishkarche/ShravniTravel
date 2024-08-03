document.getElementById('current-year').textContent = new Date().getFullYear();

// JavaScript to hide the loader
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-container');
    const content = document.querySelector('.content');

    if (loader) {
        loader.style.display = 'none';
    }
    if (content) {
        content.style.display = 'block';
    }
});
