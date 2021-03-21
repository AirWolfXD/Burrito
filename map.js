// //Get data for testing locations and vaccination locations from APi
// var request = new XMLHttpRequest();

// request.open('GET', `https://burritoapi.github.io/burrito-api/locations.json`, true);
// //Fetches data from api and sends to html code
// var data;
// request.onload = function () {
//     data = JSON.parse(this.response);
// }

$.getJSON("https://burritoapi.github.io/burrito-api/locations.json").done(function( data ) {
   //geolocation to find the user's position
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                //marker creation 
                var current_position = new L.marker([pos.lat, pos.lng]).bindPopup("This is your current location");
            
                var testingIcon = L.icon({
                    iconUrl: `https://cdn.discordapp.com/attachments/822509285984174122/823129042366234624/testing.png`,
                    iconSize: [25, 38],
                    iconAnchor: [13, 10],
                });

                var vaccineIcon = L.icon({
                    iconUrl: `https://cdn.discordapp.com/attachments/822509285984174122/823129043066028032/vaccine.png`,
                    iconSize: [25, 38],
                    iconAnchor: [13, 10],
                });

                var testingArray = [];
                var vaccinationArray = [];
                for(var i = 0; i < data['testing-locations'].length; i++){
                    var testing_loc = new L.marker([data['testing-locations'][i].latitude, data['testing-locations'][i].longitude], {icon: testingIcon}).bindPopup(`<b>NAME:</b> ${data['testing-locations'][i].name} <br><b>ADDRESS:</b> ${data['testing-locations'][i].address} <br><b>PHONE#:</b> ${data['testing-locations'][i].phone} <br><b>TESTING LOCATION</b>`);
                    testingArray.push(testing_loc);
                }
                for(var i = 0; i < data['vaccination-locations'].length; i++){
                    var vaccination_loc = new L.marker([data['vaccination-locations'][i].latitude, data['vaccination-locations'][i].longitude], {icon: vaccineIcon}).bindPopup(`<b>NAME:</b> ${data['vaccination-locations'][i].name} <br><b>ADDRESS:</b> ${data['vaccination-locations'][i].address} <br><b>PHONE#:</b> ${data['vaccination-locations'][i].phone} <br><b>VACCINATION LOCATION</b>`);
                    vaccinationArray.push(vaccination_loc);
                }
                //setting up layers for toggle
                var vaccination = new L.layerGroup(vaccinationArray);
                var testing = new L.layerGroup(testingArray);
                var current = new L.layerGroup([current_position])

                //initializing map
                var map = new L.map('mapid', {
                    center: [pos.lat, pos.lng],
                    zoom: 12,
                    layers: [vaccination, testing, current]
                });

                //import map source
                L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=6QcmT0EaRzPo2v42i5Fp', {
                    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
                }).addTo(map);

                var baseMaps = {};
                var overlayMaps = {
                    "Vaccination Centers": vaccination,
                    "Testing Centers": testing,
                    "Current Position": current
                }; 

                //filter layer control to toggle between vaccinations and testing centers
                L.control.layers(baseMaps, overlayMaps).addTo(map);
            },
        );
    }
});