  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
     $('.slider').slider({});
       $('.materialboxed').materialbox();
  });
      

  var instance = M.Carousel.init({
    fullWidth: true,
     indicators: true
  });

  // Or with jQuery

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
     indicators: true
  });
   
