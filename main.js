(function () {
  "use strict";

  const btn = document.querySelector(".button");

  const displayImg = function () {
    document.getElementById("add-grug").innerHTML =
      //   '<marquee direction="up" behavior="alternate"><img src="images/caveppl_fire.png"><caption>Grug family photo</caption></marquee>';
      '<img src="images/caveppl_fire.png">'; //<caption>Grug family photo</caption>';
  };

  btn.addEventListener("click", displayImg);
})();
