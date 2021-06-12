const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll", function() {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight * .6

    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("ani1");
    }
  }
})

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});