/*подключение плагина модального окна*/

$(function() {
    if ( $(".pop-up") && ($(".pop-up__title").text() == "Пользователя не существует") || ($(".pop-up__title").text() == "Все поля обязательны к заполнению!")) {
        $(".pop-up").bPopup();
        $('.btn-admin--close').on('click', function(e) {
            e.preventDefault();
          var bPopup = $('.pop-up').bPopup();
          bPopup.close();
          $(".pop-up").remove();
        });
    }

    $('.login__link').on('click', function(e) {
        e.preventDefault();
        $(".pop-up").remove();
    });
});