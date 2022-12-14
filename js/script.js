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

// highlight nav on scroll

// const mainSection = document.querySelectorAll("main > section");
// const navItems = document.querySelectorAll(".nav-links-container ul li");

// const mainSectionOptions = {};

// const mainSectionObserver = new IntersectionObserver(function (
//   entries,
//   mainSectionObserver
// ) {
//   entries.forEach((section) => {
//     console.log(section.target);
//     console.log(section.target.getAttribute("id"));
//   });
// },
// mainSectionOptions);

// mainSection.forEach((section) => {
//   mainSectionObserver.observe(section);
// });

// window.addEventListener("scroll", () => {
//   let currentSection = "";

//   mainSection.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     // const sectionHeight = section.clientHeight;

//     if (scrollY > sectionTop) {
//       currentSection = section.getAttribute("id");
//     }
//     console.log(currentSection);
//   });
// });
