const menu = document.querySelector(".nav__burger");
const burgerLine = document.querySelector(".nav__burger-line");
const nav = document.querySelector(".nav");

menu.addEventListener("click", (e) => {
  e.preventDefault();
  if (burgerLine.classList.contains("nav__burger-active")) {
    burgerLine.classList.remove("nav__burger-active");
  } else {
    burgerLine.classList.add("nav__burger-active");
  }
  if (nav.classList.contains("nav__open")) {
    nav.classList.remove("nav__open");
  } else {
    nav.classList.add("nav__open");
  }
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
  // document.querySelector(".tag").innerHTML = skillLevel;
}

levels(".html__skill", 4);
levels(".css__skill", 4);
levels(".js__skill", 3);
levels(".react__skill", 2);
