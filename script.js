let currentSlide = 0; // Track the current slide index
const slides = document.querySelectorAll('.slide'); // Select all slides

// Show the current slide and hide others
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block'; // Show the active slide
    } else {
      slide.style.display = 'none'; // Hide other slides
    }
  });
}

// Initial display of the first slide
showSlide(currentSlide);

// Move to the previous slide
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1; // Wrap around to the last slide
  }
  showSlide(currentSlide);
}

// Move to the next slide
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0; // Wrap around to the first slide
  }
  showSlide(currentSlide);
}

// Event listeners for manual controls (previous and next buttons)
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);
