const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 3,
    centeredSlides: true,
    speed: 60000,
    autoplay: {
        delay: 25,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

const swiperr = new Swiper('.swiper', {
    slidesPerView: 5,
    centeredSlides: true,
    slidesPerGroup: 3,
    spaceBetween: 30,
    speed: 70000,
    autoplay: {
        delay: 20,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});