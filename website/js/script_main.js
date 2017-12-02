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



//Google maps

function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var worldCenter = {lat: 0.191, lng: 22.830};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });

    var map2 = new google.maps.Map(document.getElementById('map2'), {
        zoom: 2,
        center: worldCenter
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: 'Uluru (Ayers Rock)'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}



// var map;
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 2,
//         center: {lat: -33.865427, lng: 151.196123},
//         mapTypeId: 'terrain'
//     });
//
//     // Create a <script> tag and set the USGS URL as the source.
//     var script = document.createElement('script');
//
//     // This example uses a local copy of the GeoJSON stored at
//     // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
//     script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
//     document.getElementsByTagName('head')[0].appendChild(script);
//
//     map.data.setStyle(function(feature) {
//         var magnitude = feature.getProperty('mag');
//         return {
//             icon: getCircle(magnitude)
//         };
//     });
// }
//
// function getCircle(magnitude) {
//     return {
//         path: google.maps.SymbolPath.CIRCLE,
//         fillColor: 'red',
//         fillOpacity: .2,
//         scale: Math.pow(2, magnitude) / 2,
//         strokeColor: 'white',
//         strokeWeight: .5
//     };
// }
//
// function eqfeed_callback(results) {
//     map.data.addGeoJson(results);
// }

