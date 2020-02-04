

$(document).ready(function () {
    $('.saveAnimal > label').css('display', 'none');

    $('[value="leopard"]').on("change", function () {
        $('label[for="animal1"],label[for="animal2"],label[for="animal3"]').slideDown(1000);
        $('label[for="animal13"] , label[for="animal14"] , label[for="animal15"] , label[for="animal4"] , label[for="animal5"] , label[for="animal6"] , label[for="animal7"] , label[for="animal8"] , label[for="animal9"] , label[for="animal10"] , label[for="animal11"], label[for="animal12"]').fadeOut(100);
    });


    $('[value="elephant"]').on("change", function () {
        $('label[for="animal4"],label[for="animal5"],label[for="animal6"]').slideDown(1000);
        $('label[for="animal1"] , label[for="animal2"] , label[for="animal3"] , label[for="animal13"] , label[for="animal14"] , label[for="animal15"] , label[for="animal7"] , label[for="animal8"] , label[for="animal9"] , label[for="animal10"] , label[for="animal11"], label[for="animal12"]').fadeOut(100);
    });


    $('[value="buffalo"]').on("change", function () {
        $('label[for="animal7"],label[for="animal8"],label[for="animal9"]').slideDown(1000);
        $('label[for="animal1"] , label[for="animal2"] , label[for="animal3"] , label[for="animal4"] , label[for="animal5"] , label[for="animal6"] , label[for="animal13"] , label[for="animal14"] , label[for="animal15"] , label[for="animal10"] , label[for="animal11"], label[for="animal12"]').fadeOut(100);
    });


    $('[value="lion"]').on("change", function () {
        $('label[for="animal10"],label[for="animal11"],label[for="animal12"]').slideDown(1000);
        $('label[for="animal1"] , label[for="animal2"] , label[for="animal3"] , label[for="animal4"] , label[for="animal5"] , label[for="animal6"] , label[for="animal7"] , label[for="animal8"] , label[for="animal9"] , label[for="animal13"] , label[for="animal14"], label[for="animal15"]').fadeOut(100);
    });

    $('[value="rhinocero"]').on("change", function () {
        $('label[for="animal13"],label[for="animal14"],label[for="animal15"]').slideDown(1000);
        $('label[for="animal1"] , label[for="animal2"] , label[for="animal3"] , label[for="animal4"] , label[for="animal5"] , label[for="animal6"] , label[for="animal7"] , label[for="animal8"] , label[for="animal9"] , label[for="animal10"] , label[for="animal11"], label[for="animal12"]').fadeOut(100);
    });

    $('.donateMoney > label').css('display', 'none');
    $('label[for="money1"],label[for="money2"],label[for="money3"],label[for="money4"],label[for="money5"]').slideDown(1000);


});
