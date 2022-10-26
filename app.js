$(document).ready(function(){
    $('.main-trending-bottom').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    arrows: true,
    prevArrow:`<button type='button' class='slick-prev slick-arrow'><i class='fa-solid fa-arrow-left'></i></button>`,
    nextArrow:`<button type='button' class='slick-next slick-arrow'><i class='fa-solid fa-arrow-right'></i></button>`  
    });
  });
  $(document).ready(function(){
    $('.element-gird').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    prevArrow:`<button type='button' class='slick-prev1 slick-arrow1'><i class='fa-solid fa-arrow-left'></i></button>`,
    nextArrow:`<button type='button' class='slick-next1 slick-arrow1'><i class='fa-solid fa-arrow-right'></i></button>`  
    });
  });