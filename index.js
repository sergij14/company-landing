// DOM elements selection
const nav = document.querySelector("#nav");
const navUl = document.querySelector("#nav-ul");
const navToggleBtns = document.querySelectorAll("#nav-toggle-btn");

// Handlers
const onToggleNav = () => nav.classList.toggle("nav-visible");
const onOverlayClick = (e) => {
  if (!navUl.contains(e.target)) {
    onToggleNav();
  }
};

// Event listeners
navToggleBtns.forEach((btn) => btn.addEventListener("click", onToggleNav));
nav.addEventListener("click", onOverlayClick);
