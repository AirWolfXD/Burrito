var pos = {lat: '100', lng: '-121.978015'};
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

//marker creation 
var test1 = new L.marker([40, -120]).bindPopup("test 1"),
    test2 = new L.marker([45, -120]).bindPopup("test 2"),
    test3 = new L.marker([35, -120]).bindPopup("test 3");
    test4 = new L.marker([pos.lat, pos.lng]).bindPopup("test 4");

//setting up layers for toggle
var vaccination = new L.layerGroup([test1, test3]);
var testing = new L.layerGroup([test2, test4]);

//initializing map
var map = new L.map('mapid', {
    center: [40, -120],
    zoom: 7,
    layers: [vaccination, testing]
});

//import map source
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=6QcmT0EaRzPo2v42i5Fp', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);    //send help

var baseMaps = {};
var overlayMaps = {
    "Vaccination Centers": vaccination,
    "Testing Centers": testing
}; 

//filter layer control to toggle between vaccinations and testing centers
L.control.layers(baseMaps, overlayMaps).addTo(map);

//Couldn't find any free API's for Covid-19 testing and vaccination locations