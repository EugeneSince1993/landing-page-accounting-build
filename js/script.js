// Initialize OwlCarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

// Setup OwlCarousel
$('.owl-carousel').owlCarousel({
  items: 1,
  autoWidth: false,
  center: true,
  loop: true,
  dots: true,
  nav: true,
  navText: ["<i class='fas fa-arrow-circle-left'></i>", 
            "<i class='fas fa-arrow-circle-right'></i>"],
  navSpeed: 800,
  dotsSpeed: 800,
  dotsContainer: '#carousel-custom-dots'
});

// Go to a slide based on the index of the dot that was clicked
$('.owl-dot').click(function () {
  owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});