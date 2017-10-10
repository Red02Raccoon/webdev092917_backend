var blur = (function(){
  var wrapper = document.querySelector(".works-section-3__main");
  var blurImg = document.querySelector(".blur-form__img");

  return {
     set: function() {
       var imgWidth = document.querySelector(".blur__back").offsetWidth;
       var posLeft = -wrapper.offsetLeft;
       var posTop = -wrapper.offsetTop;
       var blurStyle = blurImg.style;

            blurStyle.backgroundSize = imgWidth + "px" + " auto";
            blurStyle.backgroundPosition = posLeft + "px" + " " + posTop + "px";
     }
  }
})();


window.onload = function() {
  blur.set();
};
window.onresize = function() {
  blur.set();
}