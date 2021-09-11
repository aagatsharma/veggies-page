// Mobile Naavigation
const nav = document.querySelector(".header");
const btn_nav = document.querySelector(".btn-mobile-nav");

btn_nav.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
});

// Smooth Scroll Animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //Moves to the Top
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    //Move to their respective elements
    if (href !== "#" && href.startsWith("#")) {
      const El = document.querySelector(href);
      El.scrollIntoView({ behavior: "smooth" });
    }

    // Remove navigation after scrolling (mobile)
    if (link.classList.contains("main-nav-link")) {
      nav.classList.toggle("nav-open");
    }
  });
});

//Sticky Navigation Bar

const sectionHomeEl = document.querySelector(".section-home");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    //Outside section Hero adds sticky class (inside section hero = false)
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    //Inside section Hero removes sticky class (inside section hero = true)
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px", //sticky height: 8rem (no % or rem in JS)
  }
);

obs.observe(sectionHomeEl);
