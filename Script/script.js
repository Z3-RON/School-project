new Swiper('.immage__slider', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEL: '.swiper-button-prev',
    },

    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});