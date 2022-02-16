$('.portal-slider__wrapper').slick({
    infinite: true,
    centerMode: true,
    dots: false,
    slidesToShow: 1,
    autoplay: false,
    fade: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    slidesPerRow: 1,
    prevArrow: $('#prev'),
    nextArrow: $('#next'),
});

// управление цветами шаров в карточке слайдера
const currentSlide = document.querySelector('.slick-active');
const sliderWrapper = document.querySelector('.portal-slider__wrapper');

function changeBallsColor() {
    // const colors = ['rose-gold', 'gold', 'gray', 'red', 'blue']
    // const color = currentSlide.classList[1];
    // sliderWrapper.classList.add(color);
    // // sliderWrapper.classList.remove(color);
    // changeBallsColor()
}
changeBallsColor();