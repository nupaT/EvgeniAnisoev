const menu = document.querySelector(".nav__burger");
const bMenu = document.querySelector(".nav__burger-line");

menu.addEventListener("click", (e) => {
  e.preventDefault();
  if (bMenu.classList.contains("nav__burger-active")) {
    bMenu.classList.remove("nav__burger-active");
  } else {
    bMenu.classList.add("nav__burger-active");
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
