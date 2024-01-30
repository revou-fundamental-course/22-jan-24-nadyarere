const menuBar = document.querySelector(".hamburger");
const menuNav = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

// todo slider automatic

// todo responsive offer in the middle

// todo form validation
const validateForm = (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name").value;
  const emailInput = document.getElementById("email").value;
  const interestSelect = document.getElementById("interest").value;

  // Validate name
  if (nameInput === "") {
    alert("Please enter your name.");
    nameInput.focus();
    return false;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return false;
  }

  // Validate interest selection
  if (interestSelect === "") {
    alert("Please select your interest.");
    interestSelect.focus();
    return false;
  }

  // If all validations pass, you can submit the form
  alert("Form submitted successfully!");
};

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
