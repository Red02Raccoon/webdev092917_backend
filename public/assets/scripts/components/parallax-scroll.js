var parallaxScroll = (function(){
    var containerBg = document.querySelector(".section-1-bg-box");
    var user = document.querySelector(".avatar");
    var opacityBg = document.querySelector(".about-section-1__container-svg");


    return {
        move: function(block, windowScroll, strafeAmound) {
            var strafe = windowScroll / -strafeAmound + "%";
            var style = block.style;
            var transformString = "translateY(" + strafe + ")";

                style.transform = transformString;
                style.webkitTransform = transformString;
        },

        init: function(wScroll){
            this.move(user, wScroll, 10);
            this.move(opacityBg, wScroll, 20);
        }
    }
})();

window.onscroll =  function() {
    var wScroll = window.pageYOffset;
        parallaxScroll.init(wScroll);
};