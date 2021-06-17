//*ハンバーガーメニュー
$(".openbtn").click(function () {
    $(this).toggleClass('active');
      $(".g-nav").toggleClass('panelactive');
  });
  $(".g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $(".g-nav").removeClass('panelactive');
});

//*メニュー 一定以上で隠れる
$(function(){
  window.addEventListener("scroll", function () {
         var header = document.querySelector("header");
         header.classList.toggle("scroll-nav", window.scrollY > 600);
 });
});

//*slick 下のサブメニュー
  $('.gallery__thumb').slick({
      arrows:false,
      infinite: true,
      asNavFor:'.thumb',
  });
  $('.thumb').slick({
      asNavFor:'.gallery__thumb',
      focusOnSelect: true,
      slidesToShow:3,
      slidesToScroll:1,
      prevArrow: '<div class="slick-prev"></div>',
	    nextArrow: '<div class="slick-next"></div>',
  });