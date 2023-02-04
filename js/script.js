const openNavbar = document.getElementById("open-navbar");
const closeNavbar = document.getElementById("close-navbar");
const navbar = document.getElementById("nav-links-container");

const overlay = document.getElementById("overlay");

openNavbar.addEventListener("click", () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
});

closeNavbar.addEventListener("click", () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
});

// when overlay gets clicked, close navbar
overlay.addEventListener("click", () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
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
