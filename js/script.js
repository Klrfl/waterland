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
const mainSections = document.querySelectorAll(".main-section");
const navItems = document.querySelectorAll("#nav-links-container ul a");

const mainSectionOptions = {
  threshold: 0.4,
};

const mainSectionObserver = new IntersectionObserver(function (
  entries,
  mainSectionObserver
) {
  entries.forEach((entry) => {
    // check if intersecting with viewport
    if (entry.isIntersecting) {
      navItems.forEach((navItem) => {
        let currentSection = document.querySelector(
          `${navItem.dataset.target}`
        );

        if (currentSection == entry.target) {
          navItem.classList.add("active");
        } else {
          navItem.classList.remove("active");
        }
      });
    }
  });
},
mainSectionOptions);

mainSections.forEach((section) => {
  mainSectionObserver.observe(section);
});
