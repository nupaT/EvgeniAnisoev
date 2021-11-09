const menu = document.querySelector(".nav__burger");
const burgerLine = document.querySelector(".nav__burger-line");
const nav = document.querySelector(".nav");
const navItem = document.querySelectorAll(".nav__item");
const body = document.querySelector("body");

//open/close menu after click on the borger-menu
menu.addEventListener("click", (e) => {
  e.preventDefault();
  if (burgerLine.classList.contains("nav__burger-active")) {
    burgerLine.classList.remove("nav__burger-active");
  } else {
    burgerLine.classList.add("nav__burger-active");
  }
  if (nav.classList.contains("nav__open")) {
    nav.classList.remove("nav__open");
    body.style.overflow = "";
  } else {
    nav.classList.add("nav__open");
    body.style.overflow = "hidden";
  }
});

//close burger-menu after click on the link menu
navItem.forEach((elem) => {
  elem.addEventListener("click", () => {
    nav.classList.remove("nav__open");
    burgerLine.classList.remove("nav__burger-active");
    body.style.overflow = "";
  });
});

function levels(tag, level) {
  let skillLevel = "";
  for (i = 1; i <= 5; i++) {
    if (i <= level) {
      skillLevel += `<div class="circle__fill"></div>`;
    } else {
      skillLevel += `<div class="circle__fill clear"></div>`;
    }
  }
  return (document.querySelector(tag).innerHTML = skillLevel);
}

levels(".html__skill", 4);
levels(".css__skill", 4);
levels(".js__skill", 3);
levels(".react__skill", 2);
