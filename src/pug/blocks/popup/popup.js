$(document).ready(function () {
    $('.card-selector').click(function () {
        $this_btn = $(this)
        $card = $this_btn.parent()
        $checked = $card.find('input:checked')
        if($checked.length == 0){
            return
        }
        option = $checked.next().text()
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
                data:{
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

$('.button-card').click(function() { // Вызываем функцию по нажатию на кнопку
    var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id
    $(popup_id).show(); // Открываем окно
    $('.popup2').show(); // Открываем блок заднего фона
})
$('.close').click(function() { // Обрабатываем клик по заднему фону
    $('.popup2').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
})