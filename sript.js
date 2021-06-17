( () => {
  const start = () => {
    const swiper = new Swiper( '.swiper-container', {
      // Optional parameters
      speed: 600,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',

    } )
  }

  window.addEventListener( 'load', () => {
    start()
  } )
} )()
