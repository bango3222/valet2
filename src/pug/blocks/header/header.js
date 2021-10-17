$(document).ready(function (){
    $('header .desktop .msg').mouseenter(function (){
        $this_nav = $(this)
        $this_dropdown = $('header .desktop .msg-links')
        a = $this_nav.offset().left
        b = $this_nav.outerWidth()
        c = $this_dropdown.outerWidth()

        $this_dropdown.fadeIn()

        x = a + ((b-c) / 2)

        $this_dropdown.css('display', 'flex')
        $this_dropdown.offset({left : x})
    })

    $('header').mouseleave(function (){
        $('.desktop .msg-links').fadeOut()
    })

    $('.burger, .mobile .links a').click(function (){
        $('body, .burger, .bg').toggleClass('active')
    })


    $('header .mobile .msg').click(function (){
        $this_nav = $(this).parent()
        $this_dropdown = $('header .mobile .msg-links')
        a = $this_nav.offset().left
        b = $this_nav.outerWidth()
        c = $this_dropdown.outerWidth()

        $this_dropdown.fadeIn()

        x1 = a + ((b-c) / 2)

        $this_dropdown.css('display', 'flex')
        $this_dropdown.offset({left : x1})
    })

    $('header').mouseenter(function (){
        $('.header-wrap').removeClass('hidden')
    })
    oldOffset = 0
    $(document).scroll(function (){
        $('.header-wrap').addClass('hidden')
        if($('header').offset().top < 84 || oldOffset > $('header').offset().top) {
            $('.header-wrap').removeClass('hidden')
        }

        if($('header').offset().top < $('.hero').outerHeight()) {
            $('.header-wrap').removeClass('tan')
        } else {
            $('.header-wrap').addClass('tan')
        }
        oldOffset = $('header').offset().top
    })
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});