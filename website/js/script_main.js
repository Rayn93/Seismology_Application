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

    $("#homepage header, header #myCarousel .item").css("height", $height);

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


// //Select 2
//     $('.select-block').select2({
//         minimumResultsForSearch: Infinity,
//         theme: "classic"
//     });

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


//Catalog data

$(function(){
    $('.global-table').footable({
        "columns": $.get('http://localhost/seismo/website/data/columns.json'),
        "rows": $.get('http://localhost/seismo/website/data/rows.json')
    });
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



//Google maps

function initMap() {

    var locations = [
        ['Bytom', '12 listopad 2017 00:55', 3.1, 50.366495, 18.874169, 4],
        ['Orzesze', '6 listopad 2017 12:55', 2.1, 50.143555, 18.795350, 5],
        ['Katowice', '2 listopad 2017 07:55', 2.6, 50.243555, 18.995350, 3],
        ['Pszczyna', '30 listopad 2017 18:55', 2.8, 49.970026, 19.092426, 2],
        ['Lędziny', '5 grudzień 2017 03:55', 2.0, 50.130933, 19.142082, 1]
    ];

    var locationsWorld = [
        ['Nowa Zelandia', '12 listopad 2017 00:55', 6.1, -43.860600, 171.294639, 4],
        ['Japonia', '6 listopad 2017 12:55', 5.7, 35.319650, 137.252233, 5],
        ['Indonezja', '2 listopad 2017 07:55', 5.6, -2.739081, 102.196058, 3],
        ['Chile', '30 listopad 2017 18:55', 7.1, -29.993567, -71.010555, 2],
        ['Dominikana', '5 grudzień 2017 03:55', 6.5, 19.146026, -71.184710, 1],
        ['Włochy', '5 grudzień 2017 03:55', 5.5, 42.762221, 12.999896, 1],
        ['Grecja', '5 grudzień 2017 03:55', 4.7, 38.324176, 22.010317, 1]
    ];

    var silesiaCenter = {lat: 50.243555, lng: 18.995350};
    var worldCenter = {lat: 0.191, lng: 22.830};

    var localMap = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: silesiaCenter,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var worldMap = new google.maps.Map(document.getElementById('map2'), {
        zoom: 2,
        center: worldCenter,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;
    var markers = [];

    //Markers Local Loop
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][3], locations[i][4]),
            map: localMap
        });

        markers.push(marker);

        console.log(markers);

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(
                    '<div class="markerDescription">'+
                        '<strong>Miasto: </strong>'+locations[i][0] + '<br />'+
                        '<strong>Czas: </strong>'+locations[i][1] + '<br />'+
                        '<strong>Energia: </strong>'+locations[i][2] + '<br />'+
                        '<a class="text-right" href="#">Więcej</a>'+
                    '</div>'

                );


                infowindow.open(localMap, marker);
            }
        })(marker, i));
    }


    //Markers World Loop
    for (i = 0; i < locationsWorld.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locationsWorld[i][3], locationsWorld[i][4]),
            map: worldMap
        });

        markers.push(marker);

        console.log(markers);

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(
                    '<div class="markerDescription">'+
                    '<strong>Kraj: </strong>'+locationsWorld[i][0] + '<br />'+
                    '<strong>Czas: </strong>'+locationsWorld[i][1] + '<br />'+
                    '<strong>Magnituda: </strong>'+locationsWorld[i][2] + '<br />'+
                    '<a class="text-right" href="#">Więcej</a>'+
                    '</div>'

                );


                infowindow.open(worldMap, marker);
            }
        })(marker, i));
    }
}

