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

    tex = '<div class="selector-dropdown"></div>'

    $('.card-selector').click(function (e) {
        e.stopPropagation()
        $('.selector-dropdown').remove()
        $this_btn = $(this)
        $('body').append(tex)
        $dropdown = $('.selector-dropdown')
        $this_options = $this_btn.parent().find('.card-list__option')


        $this_options.each(function () {
            $dropdown.append('<p>' + $(this).text() + '</p>')
        })

        $(window).on('click',function() {
            $('.selector-dropdown').remove()
        });

        $('.main-slider .swiper-wrapper').on('touchstart',function() {
            $('.selector-dropdown').remove()
        });


        btn_left = $this_btn.offset().left
        btn_top = $this_btn.offset().top - $dropdown.outerHeight() + $this_btn.outerHeight()
        b = $this_btn.outerWidth()
        $dropdown.css('display', 'flex')
        $dropdown.css('width', b)
        $dropdown.offset({left: btn_left})
        $dropdown.offset({top: btn_top})

    })


})