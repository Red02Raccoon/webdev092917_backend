//change preserveAspectRatio for triangle (screen = 320px)

function size(){
    var a = $(window).width();
        if (a <= '320'){
        $(".traingle-box__item").removeAttr("preserveAspectRatio");
    } else {
        $(".traingle-box__item").attr("preserveAspectRatio", 'none');
    }
};
$(window).on('load resize', size);

//show fullScreen

    $(".menu-hamb").on("click", function(){
        $(this).toggleClass("menu-hamb--click");
        if ($(".fullscreen").is(":hidden")) {
      $(".fullscreen").slideDown("slow");
    } else {
      $(".fullscreen").hide("slow");
    }
});

//toTop, toDown
function a(heightScroll) {
    $('body,html').animate({
        scrollTop: heightScroll
        }, 800);
        return false;      
}

$(".arrow--toDown").click(function(e) {
    e.preventDefault();
    var heightScroll = $(this).closest("section").innerHeight();
    a(heightScroll);
});

$(".arrow--toUp").click(function(e) {
    e.preventDefault();
    var heightScroll = 0;
    a(heightScroll);
});


