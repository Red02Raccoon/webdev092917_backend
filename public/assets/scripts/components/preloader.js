var preloader = document.querySelector(".preloader");
var images = document.images;
var imagesTotal = images.length;
var imagesLoadedCount = 0;
var percBox = document.querySelector(".preloader__text");

for (var i=0; i < imagesTotal; i++) {
    imagesClone = new Image();
    imagesClone.src = images[i].src;

    imagesClone.onload = imageLoaded;
    imagesClone.onerror = imageLoaded;
}
function imageLoaded() {
    imagesLoadedCount++;

    percBox.innerHTML = (((100 / imagesTotal) * imagesLoadedCount) << 0);
    if (imagesLoadedCount >= imagesTotal) {
        setTimeout(function(){
            if(!preloader.classList.contains("done")) {
                preloader.classList.add("done");
            }
        }, 500);
    }
}
