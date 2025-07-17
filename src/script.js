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
  function cleanupAnimations(...elements) {
    const classes = [
      "slide-in-left",
      "slide-in-right",
      "slide-out-left",
      "slide-out-right",
    ];

    elements.forEach((el) => {
      classes.forEach((cls) => el.classList.remove(cls));
    });
  }

  function switchSlide(fromIndex, toIndex, direction) {
    const fromPic = pictures[fromIndex];
    const toPic = pictures[toIndex];
    const fromSlide = slides[fromIndex];
    const toSlide = slides[toIndex];

    const outAnim = direction === "next" ? "slide-out-left" : "slide-out-right";
    const inAnim = direction === "next" ? "slide-in-left" : "slide-in-right";

    // 1. Clean previous leftover animations
    cleanupAnimations(fromPic, toPic, fromSlide, toSlide);

    // 2. Prepare incoming slide
    toPic.classList.add("active");
    toSlide.classList.remove("hidden");
    toSlide.classList.add("hero__slide--active");

    // 3. Animate out old content
    fromPic.classList.add(outAnim);
    fromSlide.classList.add(outAnim);

    // 4. Animate in new content
    toPic.classList.add(inAnim);
    toSlide.classList.add(inAnim);

    // 5. Wait for animation to finish, then clean
    toSlide.addEventListener(
      "animationstart",
      () => {
        // Hide old slide
        fromPic.classList.remove("active");
        fromSlide.classList.add("hidden");
        fromSlide.classList.remove("hero__slide--active");

        // Clean animation classes
        cleanupAnimations(fromPic, toPic, fromSlide, toSlide);
      },
      { once: true }
    );
  }

  function prevImg() {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    switchSlide(currentIndex, prevIndex, "prev");
    currentIndex = prevIndex;
  }

  function nextImg() {
    const nextIndex = (currentIndex + 1) % slides.length;
    switchSlide(currentIndex, nextIndex, "next");
    currentIndex = nextIndex;
  }

  // 🔘 Attach listeners
  prevBtns.forEach((btn) => btn.addEventListener("click", prevImg));
  nextBtns.forEach((btn) => btn.addEventListener("click", nextImg));
});
