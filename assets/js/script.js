// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x");
  } else {
    searchBox.classList.replace("bx-x", "bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// swiper element
const swiperEl = document.querySelector("swiper-container");

// swiper parameters
const swiperParams = {
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  on: {
    init() {
      // ...
    },
  },
};

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl, swiperParams);

// and now initialize it
swiperEl.initialize();

// sidebar submenu open close js code
// let htmlcssArrow = document.querySelector(".htmlcss-arrow");
// htmlcssArrow.onclick = function () {
//   navLinks.classList.toggle("show1");
// };
// let moreArrow = document.querySelector(".more-arrow");
// moreArrow.onclick = function () {
//   navLinks.classList.toggle("show2");
// };
// let jsArrow = document.querySelector(".js-arrow");
// jsArrow.onclick = function () {
//   navLinks.classList.toggle("show3");
// };
