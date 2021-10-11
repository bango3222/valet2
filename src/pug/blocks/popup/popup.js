$(document).ready(function () {
    $('body').on('click', '.selector-dropdown p', function () {
        option = $(this).text()
        $('.popup h3').text(option)
        $('body').css('overflow', 'hidden')
        $('.popup').fadeIn()
    })

    $('.popup .close').click(function () {
        $('body').css('overflow', 'auto')
        $('.popup').fadeOut()
    })

    $('.popup button').click(function (e) {
        e.preventDefault()
        if ($('.accept-wrap .checkbox').is(':checked')) {
            $.ajax({
                url: 'url', // сюда адрес api куда шлем
                data: {
                  phone: $('.popup .text-input').val(),
                  service: $('.popup h3').text()
                },
                success: function (){
                    window.location.replace() //сюда url страницы успеха
                },
                error: function (){
                    alert('Что-то пошло не так')
                }
            })
        }
        else {
            $('.popup .accept-wrap').after('<p style="color: #8F2426">Примите условия</p>')
        }
    })
})