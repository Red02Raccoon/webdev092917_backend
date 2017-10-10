$( window ).resize(function() {
    var a = $(window).width();
    if (a <= '768'){

$(".trigger-mobilemenu").on("click", function() {
    console.log(a);
    $(".blog").toggleClass("mobilemenu");
});

$(".article-list__item").on("click", function() {
    $(".blog").toggleClass("mobilemenu");
});

    } 

});