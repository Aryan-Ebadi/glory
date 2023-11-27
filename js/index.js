// Custom Cursor
const cursor = document.querySelector(".cursor");
const cursorCircle = document.querySelector(".cursor_circle");

const positionElement = (e) => {
  const mouseY = e.clientY - 20;
  const mouseX = e.clientX - 20;

  // cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  // cursorCircle.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  cursor.setAttribute(
    "style",
    "top: " + mouseY + "px; left: " + mouseX + "px;"
  );
  cursorCircle.setAttribute(
    "style",
    "top: " + mouseY + "px; left: " + mouseX + "px;"
  );
  // cursorCircle.animate({
  //   left: `${mouseX}px`,
  //   top: `${mouseY}px`
  // }, {duration: 800, fill: "forwards"})
};

window.addEventListener("mousemove", positionElement);

console.log("js loaded!");

// // cursor link grow
// const links = document.querySelectorAll(".link");
// const swiperPaginationBullets = document.querySelectorAll(".swiper-pagination-bullet");
// const cards = document.querySelectorAll(".card");
// const headerActionBtn = document.querySelector(".header_action_btn");
// const swiperButtonNext = document.querySelector(".swiper-button-next");
// const swiperButtonPrev = document.querySelector(".swiper-button-prev");
// let linksArray = [];
// linksArray.push(...links, ...swiperPaginationBullets, ...cards, headerActionBtn, swiperButtonNext, swiperButtonPrev);
// console.log(linksArray);

// linksArray.forEach(link => {
//   link.addEventListener("mouseover", () => {
//     cursorCircle.classList.add("link-grow-circle")
//   })

//   link.addEventListener("mouseleave", () => {
//     cursorCircle.classList.remove("link-grow-circle")
//   })
// })

// cards.forEach(card => {
//   card.addEventListener("mouseover", () => {
//     cursorCircle.computedStyleMap.animation=  "none";
//   })
// })

// En title movement
const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("title_en_fade_in");
    }
  });
});

const enTitles = document.querySelectorAll(".title_en");
enTitles.forEach((enTitle) => {
  observer.observe(enTitle);
});

const observer2 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("dots-opacity-animation");
    }
  });
});

const dotsArray = document.querySelectorAll(".dots");
dotsArray.forEach((dots) => {
  observer.observe(dots);
});

// //mobile slide content animation
// const observer3 = new IntersectionObserver((entries) => {
//   // Loop over the entries
//   entries.forEach((entry) => {
//     // If the element is visible
//     if (entry.isIntersecting) {
//       // Add the animation class
//       entry.target.classList.add("slide_content_fade_in_animation");
//     } else {
//       entry.target.classList.remove("slide_content_fade_in_animation");
//     }
//   });
// });
// const slideContents = document.querySelectorAll(".slide_right");
// slideContents.forEach((slideContent) => {
//   observer3.observe(slideContent);
// });

//mobile slides elements animation
const observer4 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      // const slideContent = entry.target.parentNode.querySelector(".slide_right");
      entry.target.classList.add("slide_element_animation");
      // slideContent.classList.add("slide_content_fade_in_animation")
    } else {
      // const slideContent = entry.target.parentNode.querySelector(".slide_right");
      entry.target.classList.remove("slide_element_animation");
      // slideContent.classList.remove("slide_content_fade_in_animation")
    }
  });
});
const slideElements = document.querySelectorAll(".m_slide_inner");
slideElements.forEach((slideElem) => {
  observer4.observe(slideElem);
});

//firstpage element shining
const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("mobile_firstpage_element_shining");
      setTimeout(() => {
        entry.target.classList.remove("mobile_firstpage_element_shining");
        console.log('timed out');
      }, 1500);
    }
  });
});
const firstPageElem = document.querySelector(".firstpage_element_img");
observer5.observe(firstPageElem);

//sticky header navbar
const headerStickyNavbar = document.querySelector("#site_header");
window.onscroll = () => {
  if (window.pageYOffset > 80) {
    headerStickyNavbar.classList.add("sticky_header_navbar");
  } else {
    headerStickyNavbar.classList.remove("sticky_header_navbar");
  }
};

//mobile floating menu toggle
const mobileMenuToggler = document.querySelector("#checkbox");
const mobileFloatingMenu = document.querySelector(".mobile_floating_menu");
const mobileMenuDarkLayer = document.querySelector(".mobile_menu_dark_layer");

mobileMenuToggler.addEventListener("click", () => {
  mobileFloatingMenu.classList.toggle("mobile_floating_menu__show");
  mobileMenuDarkLayer.classList.toggle("mobile_menu_dark_layer__show");
});

window.onclick = (e) => {
  if (e.target == mobileMenuDarkLayer) {
    mobileFloatingMenu.classList.remove("mobile_floating_menu__show");
    mobileMenuDarkLayer.classList.remove("mobile_menu_dark_layer__show");
    mobileMenuToggler.checked = false;
  }
};
