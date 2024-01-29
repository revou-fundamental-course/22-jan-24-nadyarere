const menuBar = document.querySelector(".hamburger");
const menuNav = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

// todo slider automatic

// todo responsive offer in the middle

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});

window.addEventListener("scroll", () => {
  menuNav.classList.toggle("nav-scroll-active", window.scrollY > 0);

  windowsPosition = window.scrollY > 200;

  menu.classList.remove("is-active", windowsPosition);
  menuBar.classList.remove("is-active", windowsPosition);
});
