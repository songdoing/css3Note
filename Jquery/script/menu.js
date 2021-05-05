$(".menu li").mouseenter(function () {
  // this는 .menu li중 내가 건드린 애를 가르키고, 다시 탐색해가야함
  // stop()은 한번 실행했던 애니메이션 기억없앤다
  $(this).children(".sub-menu").stop().slideDown();
});

$(".menu li").mouseleave(function () {
  $(this).children(".sub-menu").stop().slideUp();
});
$(".btn span").click(function () {
  $(this).addClass("active");
  // 형제는 하나밖에 없기에 괄호안에 아무것도 안 써줌
  $(this).siblings().removeClass("active");
});
