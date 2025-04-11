document.addEventListener("DOMContentLoaded", () => {
  // Accordion Effect
  const initializeAccordion = (
    accordionSelector,
    allowMultipleOpen = false
  ) => {
    const accordionButtons = document.querySelectorAll(
      `${accordionSelector} .accordion__button`
    );

    if (accordionButtons.length) {
      accordionButtons.forEach((button) => {
        const content = button.nextElementSibling;

        if (button.classList.contains("accordion__button--active")) {
          content.style.maxHeight = content.scrollHeight + "px";
        }

        button.addEventListener("click", () => {
          const isOpen = content.style.maxHeight;

          if (!allowMultipleOpen) {
            accordionButtons.forEach((btn) => {
              const otherContent = btn.nextElementSibling;
              otherContent.style.maxHeight = null;
              btn.classList.remove("accordion__button--active");
            });
          }

          if (isOpen) {
            content.style.maxHeight = null;
            button.classList.remove("accordion__button--active");
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
            button.classList.add("accordion__button--active");
          }
        });
      });
    }
  };

  if (document.querySelector(".custom__accodion--faq")) {
    initializeAccordion(".custom__accodion--faq");
  }

  if (document.querySelector(".custom__accodion--comparison")) {
    initializeAccordion(".custom__accodion--comparison", true);
  }

  // Product Slider
  var swiper = new Swiper(".swiper--product", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: false,
    speed: 500,
    navigation: {
      nextEl: ".product__arrow--next",
      prevEl: ".product__arrow--prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2,
      },
      1199: {
        slidesPerView: 4,
      },
    },
  });
});
