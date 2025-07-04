document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector("nav ul");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});


