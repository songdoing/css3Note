$("p").css({ display: "none" });
$(".show-btn").click(function () {
  // $("p").css({ display: "block" });
  // $("div").show();
  $("div").fadeIn();
});
$(".hide-btn").click(function () {
  // $("p").css({ display: "none" });
  // $("div").hide();
  $("div").fadeOut();
});

$(".btn").mouseenter(function () {
  $("p").show();
});
$(".btn").mouseleave(function () {
  $("p").hide();
});
$(".toggle-btn").click(function () {
  // $("div").slideToggle();
  $("div").fadeToggle();
});
$(".add-btn").click(function () {
  $("div").addClass("active");
});
$(".remove-btn").click(function () {
  $("div").removeClass("active");
});
