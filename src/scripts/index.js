import "../component/content-landing.js";
import "../component/footer-bar.js";
import "../component/image-slider.js";
import "../component/content-about.js";
import "../component/profile-team.js";
import "../component/content-galery.js";
import "../component/content-comment.js";

const navToggle = document.querySelector(".nav-toggle");
const navbar = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});
