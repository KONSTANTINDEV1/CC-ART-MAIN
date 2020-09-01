//--- MENU BUTTON ---//
const menuIcon = document.querySelector(".menu-icon");

function toggleMenuIcon() {
  menuIcon.classList.toggle("active");
}
menuIcon.addEventListener("click", toggleMenuIcon);

//--- SCROLL NAV ---//
window.addEventListener("scroll", function () {
  var header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 800);
});

//--- SIDENAV ---//
$(document).ready(function () {
  $(".sidebarBtn").click(function () {
    $(".sidebar").toggleClass("active");
  });
});

// GSAP ANIMATION
const welcomeText = document.querySelector(".content-wrap");
const tl = new TimelineMax();

tl.fromTo(
  welcomeText,
  2.3,
  { opacity: "0" },
  { opacity: "1", ease: Power2.easeInOut }
);

// AOS ANIMATIONS

AOS.init({
  offset: 300, // offset (in px) from the original trigger point
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
});

// BARBA
function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  var tl = gsap.timeline();
  tl.to(".loading-screen", {
    duration: 1.2,
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut",
  });

  tl.to(".loading-screen", {
    duration: 1,
    width: "100%",
    left: "-100%",
    ease: "Expo.easeInOut",
    delay: 1.5,
  });
  tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
  var tl = gsap.timeline();
}

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();

        pageTransition();
        await delay(1500);
        done();
      },

      async enter(data) {
        contentAnimation();
        
      },

      async once(data) {
        contentAnimation();
      },
    },
  ],
});

//--- CAROUSEL ---//

//-- Initialize Swiper

var swiper = new Swiper(".s1", {
  loop: false,
  grabCursor: true,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoResize: true,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
      autoResize: true,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 40,
      autoResize: true,
    },
  },
});

var swiper2 = new Swiper(".s2", {
  zoom: {
    maxRatio: 5,
  },
  grabCursor: true,
  freeMode: true,
  // autoplay: true,
  followFinger: true,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoResize: true,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
      autoResize: true,
    },
    // when window width is >= 640px
    760: {
      slidesPerView: 2,
      spaceBetween: 40,
      autoResize: true,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 40,
      autoResize: true,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 40,
      autoResize: true,
    },
    1800: {
      slidesPerView: 3,
      spaceBetween: 40,
      autoResize: true,
    },
  },
});

barba.hooks.beforeEnter(() => {
  // this hook will be called during every transitions
  // before new page content enter…

  $(document).ready(function () {
    window.scrollTo(0, 0);
    const menuIcon = document.querySelector(".menu-icon");

    function toggleMenuIcon() {
      menuIcon.classList.toggle("active");
    }
    menuIcon.addEventListener("click", toggleMenuIcon);
  });
  $(document).ready(function () {
    $(".sidebarBtn").click(function () {
      $(".sidebar").toggleClass("active");
    });
    // AOS ANIMATIONS

    AOS.init({
      offset: 300, // offset (in px) from the original trigger point
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
    });
  });

  // GSAP ANIMATION
  const welcomeText = document.querySelector(".content-wrap");
  const tl = new TimelineMax();

  tl.fromTo(
    welcomeText,
    2.3,
    { opacity: "0" },
    { opacity: "1", ease: Power2.easeInOut }
  );

  //--- CAROUSEL ---//

  //-- Initialize Swiper
  var swiper = new Swiper(".s1", {
    loop: false,
    grabCursor: true,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        autoResize: true,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
        autoResize: true,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 40,
        autoResize: true,
      },
    },
  });

  var swiper2 = new Swiper(".s2", {
    zoom: {
      maxRatio: 5,
    },
    grabCursor: true,
    freeMode: true,
    // autoplay: true,
    followFinger: true,

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        autoResize: true,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
        autoResize: true,
      },
      // when window width is >= 640px
      760: {
        slidesPerView: 2,
        spaceBetween: 40,
        autoResize: true,
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 40,
        autoResize: true,
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 40,
        autoResize: true,
      },
      1800: {
        slidesPerView: 3,
        spaceBetween: 40,
        autoResize: true,
      },
    },
  });
});
