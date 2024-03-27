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
  var nav = document.getElementById('navbar');
  if(window.scrollY > 30) {
    nav.classList.add('shrink');
  } 
  else {
    nav.classList.remove('shrink');
  }
});

//GSAP animation on scroll
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    duration: 1,
    x: '-0.5%',
    autoAlpha: 0,
    ease: 'power1.out', // Smooth and gentle easing
    scrollTrigger: {
      trigger: section,
      start: "top 90%",
      end: "top 10%",
      toggleActions: "play none none none"
    }
  });
});



