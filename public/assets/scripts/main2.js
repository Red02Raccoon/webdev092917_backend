/*подключение плагина модального окна*/

$(function() {
    if ( $(".pop-up") && $(".pop-up__title").text()) {
        $(".pop-up").bPopup();
        $('.btn-admin--close').on('click', function(e) {
            e.preventDefault();
          var bPopup = $('.pop-up').bPopup();
          bPopup.close();
          $(".pop-up").remove();
        });
    }

    $('.btn-admin--close').on('click', function(e) {
        e.preventDefault();
        $(".pop-up").remove();
    });
});