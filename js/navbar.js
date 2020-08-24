const navbar = document.getElementById("navbar");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 700) {
    navbar.classList.remove("nav-bar__top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("nav-bar__top");
    scrolled = false;
  }
};
