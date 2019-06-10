$(document).ready(function () {

    $(".work-images-item").hide();
    $(".work-images-item").slice(0, 11).show();

    $('.btn').click(function () {
        $(this).addClass('active').siblings().removeClass("active");
        const imageType = $(this).data("filter");
console.log(imageType);
        $(".work-images-item").hide();

        $(`.work-images-item${imageType}`).slice(0, 11).show();

    });
});
