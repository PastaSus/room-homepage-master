document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  const navMenu = document.querySelector(".nav__menu");
  const navBtn = document.querySelector(".nav__toggle");
  const navList = document.querySelector(".nav__list");

  const body = document.querySelector("body");
  const overlay = document.querySelector(".overlay");

  const pictures = document.querySelectorAll(".hero__pictures picture");
  const slides = document.querySelectorAll(".hero__slide");
  const prevBtns = document.querySelectorAll(".hero__control--prev");
  const nextBtns = document.querySelectorAll(".hero__control--next");

  let currentIndex = 0;

  navBtn.addEventListener("click", openCloseMenu);

  //  on header: z-index: 1;

  function openCloseMenu() {
    const navIcon = navBtn.querySelector("img");

    if (navMenu.classList.contains("hidden")) {
      navIcon.src = "./images/icon-close.svg";
      header.style.zIndex = "3";
    } else {
      navIcon.src = "./images/icon-hamburger.svg";
      header.style.zIndex = "auto";
    }

    overlay.classList.toggle("hidden");
    body.classList.toggle("no-scroll");
    navMenu.classList.toggle("hidden");
  }

  // ✅ Goal

  //  1) On click of Prev/Next buttons, animate:

  //  2) The current image (picture) out.

  //  3) The next image in.

  //  4) The current text slide out.

  //  5) The next text slide in.

  // 🧹 Utility to remove animation classes
  // function cleanupAnimations(...elements) {
  //   const classes = [
  //     "slide-in-left",
  //     "slide-in-right",
  //     "slide-out-left",
  //     "slide-out-right",
  //   ];

  //   elements.forEach((el) => {
  //     classes.forEach((cls) => el.classList.remove(cls));
  //   });
  // }

  /* ✅ TL;DR Fixes to Try:
     1.Move .hidden class toggle to animationend, not animationstart.

     2.Avoid display: none transitions — use opacity instead to prevent reflows/layout shifts.

     3.Make sure only one slide has position: relative and z-index: 1 at a time.

     4.Use pointer-events: none during animations to prevent user interaction flickering.
     */
  function switchSlide(fromIndex, toIndex, direction) {
    const fromPic = pictures[fromIndex];
    const toPic = pictures[toIndex];
    const fromSlide = slides[fromIndex];
    const toSlide = slides[toIndex];

    // Remove active states
    fromPic.classList.remove("active");
    fromSlide.classList.remove("hero__slide--active");
    fromSlide.classList.add("hidden");

    // Add active states
    toPic.classList.add("active");
    toSlide.classList.remove("hidden");
    toSlide.classList.add("hero__slide--active");
  }

  function prevImg() {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    switchSlide(currentIndex, prevIndex);
    currentIndex = prevIndex;
  }

  function nextImg() {
    const nextIndex = (currentIndex + 1) % slides.length;
    switchSlide(currentIndex, nextIndex);
    currentIndex = nextIndex;
  }

  // 🔘 Attach listeners
  prevBtns.forEach((btn) => btn.addEventListener("click", prevImg));
  nextBtns.forEach((btn) => btn.addEventListener("click", nextImg));
});
