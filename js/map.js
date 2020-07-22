ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [7.838196, 98.298813],
        zoom: 15
    });
    var myPlacemark = new ymaps.Placemark(
        [7.838196, 98.298813]
    );

    myMap.geoObjects.add(myPlacemark);
}