
document.addEventListener("DOMContentLoaded", function(event) {

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: '<span class="arrow arrow-left"></span>',
        prevArrow: '<span class="arrow arrow-right"></span>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                arrows: false,
                dots:true
              }
            }
          ]
    });
});