$(document).ready(function () {
    const swiper = new Swiper(".card-container", {
        slidesPerView: 1,
        spaceBetween: 20,

        pagination: {
            el: ".pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".nav-next",
            prevEl: ".nav-prev",
        },
        breakpoints: {
            700: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1300: {
                slidesPerView: 3,
                spaceBetween: 40,
                allowTouchMove: false,
            },
            1800: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });



    $('.card-selector').click(function () {
        $this_btn = $(this)
        $card = $this_btn.parent()
        $checked = $card.find('input:checked')
        $cheked_label = $checked.next().text()
    })


})