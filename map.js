if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        (position) => {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
        },
    );
}

// var map = L.map('mapid').setView([pos.lat, pos.lng], 7);
var map = L.map('mapid').setView(['37.779927', '-121.978015'], 7);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=6QcmT0EaRzPo2v42i5Fp', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);