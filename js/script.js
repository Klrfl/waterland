const openNavbar = document.getElementById("open-navbar");
const closeNavbar = document.getElementById("close-navbar");
const navbar = document.getElementById("nav-links-container");

let overlay = document.createElement("div");
overlay.setAttribute("id", "overlay");

openNavbar.addEventListener("click", () => {
  navbar.classList.toggle("active");
  if (document.body !== overlay.parentElement) {
    document.body.append(overlay);
  } else {
    overlay.remove();
  }
});

closeNavbar.addEventListener("click", () => {
  navbar.classList.remove("active");
  overlay.remove();
});

// when overlay gets clicked, close navbar
overlay.addEventListener("click", () => {
  navbar.classList.remove("active");
  overlay.remove();
});
