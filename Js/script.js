var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


