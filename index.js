// DOM elements selection
const nav = document.querySelector("#nav");
const navUlID = "#nav-ul";
const navToggleBtn = document.querySelector("#nav-toggle-btn");

const onToggleNav = () => nav.classList.toggle("nav-visible");

navToggleBtn.addEventListener("click", onToggleNav);
nav.addEventListener("click", (e) => {
  if (!e.target.closest("#nav-ul")) {
    onToggleNav();
  }
});
