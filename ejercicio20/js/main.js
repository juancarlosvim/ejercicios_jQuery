$(function () {


    $("input").first().click(function () {
       $("div:first>p").fadeTo("slow", 0.15);

    });
    $("input:eq(1)").click(function () {
        $("div:eq(1)>p").fadeTo("slow", 0.4);

    });
    $("input").last().click(function () {
        $("div:last>p").fadeTo("slow", 0.7);

    });



});