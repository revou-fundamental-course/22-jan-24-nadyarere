const menuBar = document.querySelector(".hamburger");
const menuNav = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
var main = document.querySelector("main");

function setInnerHtmlBasedOnWidth() {
  // Get the screen width
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  // Your condition based on screen width
  if (screenWidth <= 1075) {
    // Set innerHTML for a specific element with id 'myElement'
    main.innerHTML = `<div class="description">
    <div class="carousel">
      <div class="carousel-container">
        <img class="carousel-img" src="./assets/shop1.jpg" />
        <img class="carousel-img" src="./assets/shop2.jpg" />
        <img class="carousel-img" src="./assets/shop3.jpg" />
      </div>
    </div>

    <p>"Setiap Hari Belanja Disini, Harga Murah-Murah"</p>

    <div class="user-info">
      <img src="./assets/user.jpg" alt="" />
      <div>
        <h1>Florence Hughes</h1>
        <p>Ibu Rumah Tangga, 28th</p>
      </div>
    </div>

    <div class="slider"></div>
  </div>

  <div class="offer">
    <p>
      Use this space to provide users with more information about your
      offer. consider it a follow-up to your headline and explain the
      benefits of your service
    </p>

    <div class="feature-container">
      <div class="feature">
        <div class="circle">
          <p>1</p>
        </div>
        <p>
          Your first feature, written in the form of a benefit statement.
        </p>
      </div>
      <div class="feature">
        <div class="circle">
          <p>2</p>
        </div>
        <p>
          Your second feature, written in the form of a benefit statement.
        </p>
      </div>
      <div class="feature">
        <div class="circle">
          <p>3</p>
        </div>
        <p>
          Your third feature, written in the form of a benefit statement.
        </p>
      </div>
    </div>
  </div>

  <div class="flex-end">
    <div class="form-contact">
      <div class="container">
        <h1>Contact Us</h1>
        <p>
          Sales akan menghubungi anda 1x24 <br />jam setelah data kami
          terima
        </p>
        <form action="">
          <label for="">Your Name: </label>
          <input type="text" placeholder="First and last name" />
          <label for="">Email Address: </label>
          <input type="email" placeholder="example@mail.com" />
          <label for="">What Are You Interested in? </label>
          <select name="" id="">
            <option value="">Select Option</option>
          </select>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  </div>`;
  } else {
    main.innerHTML = `<div class="description">
    <div class="carousel">
      <div class="carousel-container">
        <img class="carousel-img" src="./assets/shop1.jpg" />
        <img class="carousel-img" src="./assets/shop2.jpg" />
        <img class="carousel-img" src="./assets/shop3.jpg" />
      </div>
    </div>

    <p>"Setiap Hari Belanja Disini, Harga Murah-Murah"</p>

    <div class="user-info">
      <img src="./assets/user.jpg" alt="" />
      <div>
        <h1>Florence Hughes</h1>
        <p>Ibu Rumah Tangga, 28th</p>
      </div>
    </div>

    <div class="slider"></div>
  </div>

  <div class="flex-end">
    <div class="form-contact">
      <div class="container">
        <h1>Contact Us</h1>
        <p>
          Sales akan menghubungi anda 1x24 <br />jam setelah data kami
          terima
        </p>
        <form action="">
          <label for="">Your Name: </label>
          <input type="text" placeholder="First and last name" />
          <label for="">Email Address: </label>
          <input type="email" placeholder="example@mail.com" />
          <label for="">What Are You Interested in? </label>
          <select name="" id="">
            <option value="">Select Option</option>
          </select>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  </div>

  <div class="offer">
    <p>
      Use this space to provide users with more information about your
      offer. consider it a follow-up to your headline and explain the
      benefits of your service
    </p>

    <div class="feature-container">
      <div class="feature">
        <div class="circle">
          <p>1</p>
        </div>
        <p>
          Your first feature, written in the form of a benefit statement.
        </p>
      </div>
      <div class="feature">
        <div class="circle">
          <p>2</p>
        </div>
        <p>
          Your second feature, written in the form of a benefit statement.
        </p>
      </div>
      <div class="feature">
        <div class="circle">
          <p>3</p>
        </div>
        <p>
          Your third feature, written in the form of a benefit statement.
        </p>
      </div>
    </div>
  </div>`;
  }
}

// Call the function on page load
window.onload = setInnerHtmlBasedOnWidth;

// You can also add an event listener to handle changes in screen width
window.addEventListener("resize", () => {
  setInnerHtmlBasedOnWidth();
  
});

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
