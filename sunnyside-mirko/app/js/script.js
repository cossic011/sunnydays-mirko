"use strict";

const hamburger = document.querySelector(".hero__hamburger");
const hamburgerMenu = document.querySelector(".hero__hamburger__menu");
const body = document.querySelector("body");

hamburger.addEventListener("click", function () {
  if (hamburger.classList.contains("open")) {
    body.style.overflowY = "visible";
    hamburger.classList.remove("open");
    hamburgerMenu.style.visibility = "hidden";
    // hamburgerMenu.style.opacity = 0;
    hamburgerMenu.style.transform = "scale(0)";
  } else {
    hamburger.classList.add("open");
    hamburgerMenu.style.transform = "scale(1)";
    hamburgerMenu.style.visibility = "visible";
    body.style.overflowY = "hidden";

    // hamburgerMenu.style.opacity = 1;
  }
});
