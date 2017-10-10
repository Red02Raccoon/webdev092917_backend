(function() {
  var box = document.querySelector(".box-effect.effect__click");

  var btnLogin = document.querySelector(".login__link");
  var btnToMain = document.querySelector(".nav__link--flip");

  var flip = function(btn) {
    var c = box.classList;
    c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
  };

  btnLogin.addEventListener("click", function(e) {
    e.preventDefault;
    flip(this);
    this.classList.add("hidden");
  });

  btnToMain.addEventListener("click", function(e) {
    e.preventDefault;
    flip(this);
    btnLogin.classList.remove("hidden");
  });
})();
