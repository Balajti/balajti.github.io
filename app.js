
jQuery(document).ready(function ($) {
    $(".open-contact-popup").click(function () {
      $(".contact-popup").addClass("open");
    });
  
    $(".close-contact-popup").click(function () {
      $(".contact-popup").removeClass("open");
    });
  });
  
  gsap.registerPlugin(ScrollTrigger);
  
  function initScrollAnimations() {
    gsap.to(".contact-popup", {
      scrollTrigger: {
        trigger: ".four",
        start: () => `top+=${innerWidth * 3} center`,
        end: () => `top+=${innerWidth * 4} center`,
        toggleClass: { targets: ".contact-popup", className: "open" },
        scrub: true,
        markers: true,
        scroller: ".page-content",
        invalidateOnRefresh: true
      }
    });
  }
  
  function init() {
    initScrollAnimations();
  }
  
  window.addEventListener("load", function () {
    init();
  });