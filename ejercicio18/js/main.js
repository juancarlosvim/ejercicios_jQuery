$(function () {


    $("input").first().click(function () {
       $("div:first>p").fadeOut();

    });
    $("input:eq(1)").click(function () {
        $("div:eq(1)>p").fadeOut("slow");

    });
    $("input").last().click(function () {
        $("div:last>p").fadeOut(3000);

    });



});