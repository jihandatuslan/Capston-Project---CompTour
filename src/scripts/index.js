import "../component/content-landing.js";
import "../component/footer-bar.js";
import "../component/image-slider.js";
import "../component/content-about.js";
import "../component/profile-team.js";
import "../component/content-galery.js";
import "../component/content-comment.js";

document.addEventListener("DOMContentLoaded", function () {
  const drawerButton = document.querySelector(".app-bar__menu button");
  const navigationDrawer = document.getElementById("navigationDrawer");

  drawerButton.addEventListener("click", function () {
    navigationDrawer.classList.toggle("open");
  });

  document.addEventListener("click", function (event) {
    if (
      !navigationDrawer.contains(event.target) &&
      event.target !== drawerButton
    ) {
      navigationDrawer.classList.remove("open");
    }
  });
});
