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
    delay: 0.8,
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
    740: {
      slidesPerView: 1,
      spaceBetween: 40,
      autoResize: true,
    },
  },
});

barba.hooks.beforeEnter((data) => {
  // this hook will be called during every transitions
  // before new page content enter…

  $(document).ready(function () {
    $(this).scrollTop(0);
  });
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
      740: {
        slidesPerView: 1,
        spaceBetween: 40,
        autoResize: true,
      },
    },
  });
});
