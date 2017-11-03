$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('#header-top').addClass("sticky");
    }
    else{
        $('#header-top').removeClass("sticky");
    }
});



$(document).ready(function () {

// OSKRYPTOWANIE DLA MENU

    var $height = $(window).height();

    $("header, header #myCarousel .item").css("height", $height);

    $("#header-top .traggle-menu").css("height", $height);

    $("#header-top .burger").click(function () {
        $(".traggle-menu").show("slide", { direction: "left" }, 500);
    });

    $(".close").click(function () {
        $(".traggle-menu").hide("slide", "right", 500);
    });

//Bootstrap karuzela
     $("#myCarousel").carousel({
         interval: 9000,
         pause: "hover"
     });


//Select 2
    $('.select-block').select2({
        minimumResultsForSearch: Infinity,
        theme: "classic"
    });

//Bootstrap Tooltip
    $('[data-toggle="tooltip"]').tooltip();

//Bootstrap tabs

    $('#rank-tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });




////PODMIANA KLASY PRZY SZEROKOŚCI OKNA 620PX DLA SEKCJI KATEGORIE
//
//     var width = $(window).width();
//     if (width < 620) {
//         $("#category .padding").removeClass("col-xs-4").addClass("col-xs-6")
//     }

////dotdotdot
//
//    $(".dot-wrapper h3").dotdotdot({
//        //	configuration goes here
//    });


});



////PODMIANA KLASY PRZY SZEROKOŚCI OKNA 620PX DLA SEKCJI KATEGORIE
//$(window).resize(function () {
//
//    var width = $(window).width();
//    if (width < 620) {
//        $("#category .padding").removeClass("col-xs-4").addClass("col-xs-6")
//    }
//
//    else {
//        $("#category .padding").removeClass("col-xs-6").addClass("col-xs-4")
//    }
//});
//
//
//
////SKRYP ODPOWIADAJĄCY ZA PRAWIDŁOWE WYŚWIETLANIE STRONY NA TEL KOM.
//
//var scale = 1 / (window.devicePixelRatio || 1);
//var content = 'width=device-width, initial-scale=' + scale + ', minimum-scale=' + scale;
//
//document.querySelector('meta[name="viewport"]').setAttribute('content', content);



