document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  const nav = document.querySelector(".nav");
  const navMenu = document.querySelector(".nav__menu");
  const navBtn = document.querySelector(".nav__toggle");

  const body = document.querySelector("body");
  const overlay = document.querySelector(".overlay");

  const pictures = document.querySelectorAll(".hero__pictures picture");
  const slides = document.querySelectorAll(".hero__slide");
  const prevBtns = document.querySelectorAll(".hero__control--prev");
  const nextBtns = document.querySelectorAll(".hero__control--next");

  let currentIndex = 0;

  let removeTrapFocus;

  navBtn.addEventListener("click", openCloseMenu);

  function openCloseMenu() {
    const hamburger = navBtn.querySelector("img");
    const isClose = hamburger.src.includes("icon-hamburger.svg");

    if (navMenu.classList.contains("hidden")) {
      hamburger.src = "./images/icon-close.svg";
      header.style.zIndex = "3";
    } else {
      hamburger.src = "./images/icon-hamburger.svg";
      header.style.zIndex = "auto";
    }

    overlay.classList.toggle("hidden");
    body.classList.toggle("no-scroll");
    navMenu.classList.toggle("hidden");

    if (isClose) {
      removeTrapFocus = trapFocus(nav);
    } else {
      if (removeTrapFocus) {
        removeTrapFocus();
        removeTrapFocus = null;
      }
    }
  }

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

  // trap focus for our nav
  function trapFocus(container) {
    const navFocusables = container.querySelectorAll(
      ".nav__toggle, .nav__link"
    );

    const firstEl = navFocusables[0];
    const lastEl = navFocusables[navFocusables.length - 1];

    function handleNavTrap(e) {
      const isMobile = window.innerWidth < 1440;

      if (e.key !== "Tab") return;

      // check width at the moment of keydown
      if (!isMobile) return;

      // e.shiftKey - shift + tab condition
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }

    container.addEventListener("keydown", handleNavTrap);

    return () => container.removeEventListener("keydown", handleNavTrap);
  }

  // 🔘 Attach listeners
  prevBtns.forEach((btn) => btn.addEventListener("click", prevImg));
  nextBtns.forEach((btn) => btn.addEventListener("click", nextImg));
});
