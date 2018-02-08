$(function () {
    $("p").hide();

    $("input").first().click(function () {
       $("div:first>p").fadeIn();

    });
    $("input:eq(1)").click(function () {
        $("div:eq(1)>p").fadeIn("slow");

    });
    $("input").last().click(function () {
        $("div:last>p").fadeIn(1000);

    });



});