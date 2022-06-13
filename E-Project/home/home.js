$(document).ready(function () {
    $(".image-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:500,
        dots:true,
        prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-arrow-left slick-arrow"></i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'><i class="fa-solid fa-arrow-right slick-arrow"></i></button>`
    });
});