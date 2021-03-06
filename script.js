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

/* document.addEventListener(
  "click",
  function (ev) {
    ball.style.transform = "translateY(" + (window.scrollY + ev.clientY - 100) + "px)";
    ball.style.transform += "translateX(" + (ev.clientX - 25) + "px)";
    
  },
  false
);

window.addEventListener("scroll", () => {
  ball.style.opacity = 1;
  if (window.scrollY > 50 && window.scrollY < 500) {
    ball.style.opacity = 0.7;
  } else if (window.scrollY >= 500) {
    ball.style.opacity = 0.4;
  }
}); */

document.addEventListener(
  "click",
  function (ev) {
    ball.style.transform = "translateY(" + (window.scrollY + ev.clientY - 100) + "px)";
    ball.style.transform += "translateX(" + (ev.clientX - 25) + "px)";
    ball.style.opacity = 0.4;
  },
  false
);

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 50 && window.scrollY < 500) {
    ball.style.opacity = 1;
  } else if (window.scrollY >= 500) {
    ball.style.opacity = 0.8;
  }
});

/* Navigation menu for mobile devices */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navigation__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})