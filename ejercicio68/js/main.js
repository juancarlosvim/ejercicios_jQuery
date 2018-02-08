$(document).ready(function () {
    let p = $("<p>Lorem ipsum dolor sit amet, consectetur.</p>");
    let boton = $("<button>Click</button>");


    $("body").append(p, boton);

    boton.bind({
        click: function () {
            $("p").slideToggle();
        },
        mouseover: function () {
            $("body").css({
                "background-color": "blue"
            });
        },
        mouseout: function () {
            $("body").css({
                "background-color": "red"
            });
        }
    });
});