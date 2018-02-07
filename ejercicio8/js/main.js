/*$("a:first").attr("target", "_blank").click(function () {
   $(this).hide();
});*/


$("a").first().attr("target", "_blank").click(function () {
    $(this).hide();
});

$("a").last().attr("target", "_self").click(function () {
    $(this).hide();
});