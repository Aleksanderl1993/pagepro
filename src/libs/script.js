console.log('haha');

var swiper = new Swiper('#news .swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiperTrending = new Swiper('#trending .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is <= 640px
        1200: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        600: {
            slidesPerView: 1
        }
    }
});
