let currentIndex = 0;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const visibleItems = 3; // Show 3 items at a time
    const maxIndex = totalItems - visibleItems; // Calculate maximum index for sliding

    if (index > maxIndex) {
        currentIndex = 0; // Loop back to the beginning
    } else if (index < 0) {
        currentIndex = maxIndex; // Loop back to the end
    } else {
        currentIndex = index;
    }
    
    const offset = -currentIndex * (100 / visibleItems);
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

showSlide(2); // Initialize the first slide
