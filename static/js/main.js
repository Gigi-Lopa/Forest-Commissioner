/* Mobile nav toggle */
let mobileTaggle = document.querySelector(".mobile-nav-toggle");
mobileTaggle.addEventListener("click", ()=>{
    document.querySelector('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
})
/* INIT AOS */ 
window.addEventListener("load", ()=>{
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        disable:"mobile",
        once: true,
        mirror: false,
        
    })
})

/* INIT CAROUSEL*/
/*
* OWL CAROUSEL
*/
$('.owl-carousel').owlCarousel({
  loop:true,
  owlDots:true,
  autoplay:true,
  margin:15,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:2,
          nav:false
      },
      900:{
        items:3,
        nav:false,
        loop:false
      },
      1000:{
          items:3,
          nav:false,
          loop:false
    },
    1080:{
      items: 4,
      nav:false,
      loop:true
    }

  }
})