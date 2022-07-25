$(document).ready(function(){
   // slider code goes here
   $('#js-hero-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
   //  arrows:false,
    appendArrows:"#hero-nav",
    prevArrow:"<button class='slick-arrow'><i class='fa fa-angle-left'></i></button>",
    nextArrow:"<button class='slick-arrow'><i class='fa fa-angle-right'></i></button>",
   //  speed: 500,
   //  fade: true,
   //  cssEase: 'linear'
 
  });

  // hero--2 carousel code goes here
  $('#js-hero-img-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
   //  arrows:false,
    appendArrows:"#hero-nav2",
    prevArrow:"<button class='slick-arrow'><i class='fa fa-angle-left'></i></button>",
    nextArrow:"<button class='slick-arrow'><i class='fa fa-angle-right'></i></button>",
   //  speed: 500,
    fade: true,
   //  cssEase: 'linear'
 
  });

  //testimonial slider
  $('#js-testnimonial-slider').slick({
   dots: true,
   infinite: false,
   speed: 300,
   slidesToShow: 1,
   slidesToScroll: 1,
   mobileFirst:true,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 4,
         slidesToScroll: 2,
        }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
        
       }
     },
     
     // You can unslick at a given breakpoint now by adding:
     // settings: "unslick"
     // instead of a settings object
   ]
  })
  });

  $(function(){
     // slider code goes here
  })