$(".menu li").mouseenter(function () {
  // this는 .menu li중 내가 건드린 애를 가르키고, 다시 탐색해가야함
  // stop()은 한번 실행했던 애니메이션 기억없앤다
  $(this).children(".sub-menu").stop().slideDown();
});

$(".menu li").mouseleave(function () {
  $(this).children(".sub-menu").stop().slideUp();
});
