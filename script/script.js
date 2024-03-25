// X-axis scroll-able slider.
// document.addEventListener("wheel", function(e) {
//   const deltaX = e.deltaY;
//   const slider = document.querySelector('.img-slider-wrapper');
//   slider.scrollLeft += deltaX;
// });

//Auto Gallery Slider.
document.addEventListener('DOMContentLoaded', (event) => {
  let slideIndex = 0; // Start with the first image
  showSlides();

  function showSlides() {
      let i;
      let slides = document.getElementsByClassName("slide");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      slides[slideIndex-1].style.display = "block";  
      setTimeout(showSlides, 5000); // Change image every 5 seconds
  }
});