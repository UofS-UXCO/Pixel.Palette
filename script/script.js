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

//Modal Image function
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  const captionText = document.querySelector(".caption");
  const imgs = document.querySelectorAll('.img-container img');
  const closeBtn = document.querySelector(".close");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0; // Track the current index of the displayed image

  // Function to open modal at a specific image index
  function openModal(index) {
    modal.style.display = "block";
    modalImg.src = imgs[index].src;
    captionText.innerHTML = imgs[index].alt;
    currentIndex = index; // Update current index
  }

  // Adding event listeners to images to open modal
  imgs.forEach((img, index) => {
    img.addEventListener('click', () => openModal(index));
  });

  // Close button event listener
  closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
  });

  // Navigate to the previous image
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      openModal(currentIndex - 1);
    } else {
      openModal(imgs.length - 1); // Loop back to the last image
    }
  });

  // Navigate to the next image
  nextButton.addEventListener('click', () => {
    if (currentIndex < imgs.length - 1) {
      openModal(currentIndex + 1);
    } else {
      openModal(0); // Loop back to the first image
    }
  });

  // Optional: Close modal on click outside of the image
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});






