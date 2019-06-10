$( document ).ready(function () {
    $(".moreBox").slice(0, 11).show();
    if ($(".blogBox:hidden").length != 0) {
        $("#loadMore").show();
        $('.loader').show();
    }
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 1).slideDown();
        if ($(".moreBox:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
        $('.loader').hidden();
    });
});


