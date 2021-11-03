window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dragVelocity: 1.0,
    draggable: true,
    dots: ".dots",
    scrollLock: true,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        },
        arrows: {
          prev: ".glider-prev",
          next: ".glider-next",
        },
      }
    ]
  })
})