// DOM elements selection
const nav = document.querySelector("#nav");
const navUl = document.querySelector("#nav-ul");
const navToggleBtns = document.querySelectorAll("#nav-toggle-btn");

const sliderPrev = document.querySelector("#slider-prev");
const sliderNext = document.querySelector("#slider-next");
const images = document.querySelector("#slider-carousel")?.children;

const totalImages = images?.length;
let index = 0;

// Handlers
const onToggleNav = () => nav.classList.toggle("nav-visible");
const onOverlayClick = (e) => {
  if (!navUl.contains(e.target)) {
    onToggleNav();
  }
};

const nextImage = (direction) => {
  if (direction == "next") {
    index++;
    if (index == totalImages) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("slider-main-item");
  }
  images[index].classList.add("slider-main-item");
};

// Event listeners
navToggleBtns.forEach((btn) => btn.addEventListener("click", onToggleNav));
nav.addEventListener("click", onOverlayClick);
sliderPrev?.addEventListener("click", () => {
  nextImage("next");
});

sliderNext?.addEventListener("click", () => {
  nextImage("prev");
});
