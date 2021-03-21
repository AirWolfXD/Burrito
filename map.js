var pos = {lat: '37.779927', lng: '-121.978015'};
//geolocation to find the user's position
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        (position) => {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
        },
    );
}

//initializing map
var map = L.map('mapid', {
    center: [40, -120],
    zoom: 5,
    layers: [vaccination, testing]
});

//import map source
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=6QcmT0EaRzPo2v42i5Fp', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);    //send help

//marker creation 
var test1 = L.marker([40, -120]).bindPopup("test 1"),
    test2 = L.marker([45, -120]).bindPopup("test 2"),
    test3 = L.marker([35, -120]).bindPopup("test 3");

//setting up layers for toggle
var vaccination = L.layerGroup([test1, test3]);
var testing = L.layerGroup([test2]);

var baseMaps = {};
var overlayMaps = {
    "Vaccination Centers": vaccination,
    "Testing Centers": testing
}; 

//filter layer control to toggle between vaccinations and testing centers
L.control.layers(baseMaps, overlayMaps).addTo(map);

//Couldn't find any free API's for Covid-19 testing and vaccination locations