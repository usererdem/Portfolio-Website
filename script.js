"use strict";

/* ---- Navigation Bar Scroll Animation ---- */
const navigation = document.querySelector(".navigation");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY && window.scrollY > 200) {
    navigation.classList.add("navigation--hidden");
  } else if (window.scrollY > 200 && window.scrollY < 680) {
    navigation.classList.add("navigation--hidden");
  } else {
    navigation.classList.remove("navigation--hidden");
  }

  lastScrollY = window.scrollY;
});

/* ---- Chasing Ball ---- */
const ball = document.getElementById("chasing");

document.addEventListener(
  "click",
  function (ev) {
    ball.style.transform = "translateY(" + (window.scrollY + ev.clientY - 25) + "px)";
    ball.style.transform += "translateX(" + (ev.clientX - 25) + "px)";
  },
  false
);
