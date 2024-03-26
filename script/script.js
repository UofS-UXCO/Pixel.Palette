// X-axis scroll-able slider.
// document.addEventListener("wheel", function(e) {
//   const deltaX = e.deltaY;
//   const slider = document.querySelector('.img-slider-wrapper');
//   slider.scrollLeft += deltaX;
// });

//Auto Gallery Slider.
// document.addEventListener('DOMContentLoaded', (event) => {
//   let slideIndex = 0; // Start with the first image
//   showSlides();

//   function showSlides() {
//       let i;
//       let slides = document.getElementsByClassName("slide");
//       for (i = 0; i < slides.length; i++) {
//           slides[i].style.display = "none";  
//       }
//       slideIndex++;
//       if (slideIndex > slides.length) {slideIndex = 1}    
//       slides[slideIndex-1].style.display = "block";  
//       setTimeout(showSlides, 5000); // Change image every 5 seconds
//   }
// });

// Listen for the scroll event on the window object
window.addEventListener('scroll', function() {
  // Select the nav element
  var nav = document.getElementById('navbar');

  // Check if the page is scrolled more than 50 pixels vertically
  if(window.scrollY > 30) {
    // If yes, add the "shrink" class to the nav
    nav.classList.add('shrink');
  } else {
    // Otherwise, remove the "shrink" class from the nav
    nav.classList.remove('shrink');
  }
});