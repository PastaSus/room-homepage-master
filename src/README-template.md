# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)

  - [Links](#links)

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SCSS
- Vanilla JS
- Vercel
- NPM
- Accessibility
- Performance
- NVDA (screen reader tested)
- TalkBack (android screen reader tested)

### What I learned

I really liked the idea of having some elements rendered in the DOM just to have some clean animations which is what i did in this challenge

```html
<div class="hero__slides flex" aria-live="polite">
  <!-- Slide 1 -->
  <div
    class="hero__slide hero__slide--active"
    role="group"
    aria-roledescription="slide"
    aria-label="1 of 3"
  >
    <h2 class="hero__title">Discover innovative ways to decorate</h2>
    <p class="hero__description">
      We provide unmatched quality, comfort, and style for property owners
      across the country. Our experts combine form and function in bringing your
      vision to life. Create a room in your own style with our collection and
      make your property a reflection of you and what you love.
    </p>
  </div>

  <!-- Slide 2 -->
  <div
    class="hero__slide hidden"
    role="group"
    aria-roledescription="slide"
    aria-label="2 of 3"
  >
    <h2 class="hero__title">We are available all across the globe</h2>
    <p class="hero__description">
      With stores all over the world, it's easy for you to find furniture for
      your home or place of business. Locally, we’re in most major cities
      throughout the country. Find the branch nearest you using our store
      locator. Any questions? Don't hesitate to contact us today.
    </p>
  </div>

  <!-- Slide 3 -->
  <div
    class="hero__slide hidden"
    role="group"
    aria-roledescription="slide"
    aria-label="3 of 3"
  >
    <h2 class="hero__title">Manufactured with the best materials</h2>
    <p class="hero__description">
      Our modern furniture store provides a high level of quality. Our company
      has invested in advanced technology to ensure that every product is made
      as perfect and as consistent as possible. With three decades of experience
      in this industry, we understand what customers want for their home and
      office.
    </p>
  </div>
</div>
```

```scss
&__pictures picture {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;

  z-index: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
```

```js
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
```

### Continued development

I want to do complex animations in the future

### Useful resources

- [Front-end mentor as resource in general](https://www.frontendmentor.io/learning-paths/advanced-css-techniques-vdOtKjIC4V) - the articles on front-endmentor.io in the learning paths under advanced css section are just what i used

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/PastaSus)

## Acknowledgments

Go checkout Web Dev Simplified on youtube he makes simple tutorials about carousels
