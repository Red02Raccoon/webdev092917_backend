    var parallaxContainer = document.getElementById("parallax");
    var parallaxLayers =  parallaxContainer.children;

    var parallaxMove = function(e) {
        var initialX = (window.innerWidth / 2) - e.pageX;
        var initialY = (window.innerHeight / 2) - e.pageY;

        [].slice.call(parallaxLayers).forEach(function(layer, index) {
            var divider = index / 100;
            var positionX = initialX * divider;
            var positionY = initialY * divider;

            var transformPosition = 'translate(' + positionX + 'px,' + positionY + 'px)';
                layer.style.transform = transformPosition;
            var image = layer.firstElementChild;
            var bottompositionImage = (window.innerHeight / 2) * divider;
                image.style.bottom = '-' + bottompositionImage + 'px';

        });
    }


window.addEventListener("mousemove", parallaxMove);