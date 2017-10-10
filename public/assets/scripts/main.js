/*подключение плагина модального окна*/

$(function() {

    if ( $(".popUp__message") && ($(".popUp__message-title").text() == "Пользователя не существует") || ($(".popUp__message-title").text() == "Все поля обязательны к заполнению!")) {
        $(".popUp__message").bPopup();
        console.log("i am alive");
        $('.popUp__message-close').on('click', function(e) {
            e.preventDefault();
          var bPopup = $('.popUp__message').bPopup();
          bPopup.close();
          $(".popUp__message").remove();
        });
    }

    $('.login__link').on('click', function(e) {
        e.preventDefault();
        $(".popUp__message").remove();
    });
});