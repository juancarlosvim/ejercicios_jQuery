/*$("a:first").attr("target", "_blank").click(function () {
   $(this).hide();
});*/


$("input").first().attr("target", "_blank").click(function () {
    $("a").first().hide();
});

$("input").last().attr("target", "_self").click(function () {
    $("a").last().hide();
});