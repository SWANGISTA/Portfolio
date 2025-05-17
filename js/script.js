// script.js

// Function to display a welcome message


// Show the welcome message on page load, hide after 4 seconds
window.addEventListener('load', () => {
    const message = document.getElementById('welcome-message');
    message.classList.add('show');
    setTimeout(() => {
        message.classList.remove('show');
    }, 4000);
});