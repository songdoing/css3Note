$("p").css({ display: "none" });
$(".show-btn").click(function () {
  // $("p").css({ display: "block" });
  $("div").show();
});
$(".hide-btn").click(function () {
  // $("p").css({ display: "none" });
  $("div").hide();
});

$(".btn").mouseenter(function () {
  $("p").show();
});
$(".btn").mouseleave(function () {
  $("p").hide();
});
$(".toggle-btn").click(function () {
  $("div").slideToggle();
});
