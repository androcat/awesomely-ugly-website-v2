(function () {
  "use strict";

  let img = document.querySelector(".changeable-img");
  let cap = document.querySelector(".appearing-caption");

  const btn = document.querySelector(".button");

  //   const displayImg = function () {
  //     document.getElementById("add-grug").innerHTML =
  //       //   '<marquee direction="up" behavior="alternate"><img src="images/caveppl_fire.png"><caption>Grug family photo</caption></marquee>';
  //       '<img src="images/caveppl_fire.png">'; //<caption>Grug family photo</caption>';
  //   };

  const changeImg = function () {
    img.src = "images/caveppl_fire.png";
  };

  // Doesn't work yet
  //   const addCaption = function () {
  //     cap.innerHTML = "TEXT HERE"
  //   }

  btn.addEventListener("click", changeImg);
})();
