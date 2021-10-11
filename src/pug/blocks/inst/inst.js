$(document).ready(function (){
    const swiper2 = new Swiper(".inst-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,

        navigation: {
            nextEl: ".nav-next",
            prevEl: ".nav-prev",
        },
        speed: 400,
        autoplay: {
            delay: 800,
          },
        pagination: {
            el: ".pagination",
            clickable: true,
        },
        breakpoints: {
            700: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
    });
})