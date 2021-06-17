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

    // background images
    const backgroundImages = [
      './assets/images/background-2.jpeg',
      './assets/images/background-3.jpeg',
      './assets/images/background-4.jpeg',
      './assets/images/background-5.jpeg',
      './assets/images/card-background-1.jpeg'
    ]

    const body = document.querySelector( 'body' )

    let imageIndex = 0
    setInterval( () => {
      console.log( 'called' )
      if ( imageIndex >= backgroundImages.length ) {
        imageIndex = 0
      }
      body.style.backgroundImage = `url(${ backgroundImages[imageIndex] })`
      imageIndex += 1
    }, 6000 )


  } )

} )()
