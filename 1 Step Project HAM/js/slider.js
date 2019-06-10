// slider
$('.people-say-text').hide().first().show();
$('.name-people-say-block').hide().first().show();
$('.position-people-say').hide().first().show();
$('.focus-image').hide().first().show();

let autoSlideID = slideAuto(3000);

$('.slider-img').on('click', function () {
    $(this)
        .addClass('active')
        .siblings()
        .removeClass('active');

    changeInfo();
    clearInterval(autoSlideID);
    autoSlideID = slideAuto(10000);
});

$('.slider-arrow').on('click', function () {
    if ($(this).hasClass('left')) {
        const activeIndex = $('.slider-img.active').index();
        const newIndex = (activeIndex === 0) ? 3 : activeIndex - 1;

        $(`.slider-img:eq(${newIndex})`)
            .addClass('active')
            .siblings()
            .removeClass('active');

        changeInfo();
        clearInterval(autoSlideID);
        autoSlideID = slideAuto(5000);
    }
    if ($(this).hasClass('right')) {
        const activeIndex = $('.slider-img.active').index();
        const newIndex = (activeIndex === 3) ? 0 : activeIndex + 1;

        $(`.slider-img:eq(${newIndex})`)
            .addClass('active')
            .siblings()
            .removeClass('active');

        changeInfo();
        clearInterval(autoSlideID);
        autoSlideID = slideAuto(5000);
    }
});

function slideAuto(interval) {
    return setInterval(function () {
        const activeIndex = $('.slider-img.active').index();
        const newIndex = (activeIndex === 3) ? 0 : activeIndex + 1;

        $(`.slider-img:eq(${newIndex})`)
            .addClass('active')
            .siblings()
            .removeClass('active');

        changeInfo();
    }, interval);
}

function changeInfo() {
    const activeIndex = $('.slider-img.active').index();

    $(`.people-say-text:eq(${activeIndex})`)
        .fadeIn(1600)
        .siblings('.people-say-text')
        .hide();
    $(`.name-people-say-block:eq(${activeIndex})`)
        .fadeIn(1200)
        .siblings('.name-people-say-block')
        .hide();
    $(`.position-people-say:eq(${activeIndex})`)
        .fadeIn(800)
        .siblings('.position-people-say')
        .hide();
    $(`.focus-image:eq(${activeIndex})`)
        .fadeIn(400)
        .siblings('.focus-image')
        .hide();
}
