const menuBar = document.querySelector(".hamburger");
const menuNav = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

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

//! carousel automatic
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

// ! carousel slides
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
