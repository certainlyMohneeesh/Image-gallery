let slideIndex = 1;

function showEvent(eventName) {
    // Hide all thumbnails
    const thumbnails = document.querySelectorAll('.thumbnails');
    thumbnails.forEach(thumbnail => {
        thumbnail.style.display = 'none';
    });

    // Show the selected event
    const event = document.getElementById(eventName);
    event.style.display = 'flex';

    // Apply blur effect to the tabs
    const tabs = document.querySelector('.tabs');
    tabs.classList.add('blur');
    setTimeout(() => {
        tabs.classList.remove('blur');
    }, 300); // Remove blur after animation
}

function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    currentSlide(slideIndex);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling when lightbox is closed
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName('lightbox-slide');
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    slides[slideIndex - 1].style.display = 'block';
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Initialize with the first event visible
showEvent('event1');
