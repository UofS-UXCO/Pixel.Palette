document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.hamburger-menu');
  var mobileMenu = document.querySelector('.mobile-menu');

  hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });
});