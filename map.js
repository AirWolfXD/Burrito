let map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 40, lng: -120.644},
        zoom: 6,
    });
    infoWindow = google.maps.InfoWindow();
    const testingButton = document.createElement('button');
    testingButton.textContent = 'Find nearest testing locations';
    testingButton.classList.add("custom-map-control-button");
    map.controls[google.maps.controlPosition.TOP_CENTER].push(testingButton);
    testingButton.addEventListener("click", () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) =>{
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    infoWindow.setPosition(pos);
                    infoWindow.open(map);
                    map.setCenter(pos);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            handleLocationError(false, infoWindow, map.getCenter());
        }
    });
    const vaccinationButton = document.createElement('button');
    vaccinationButton.textContent = 'Find the nearest vaccination center';
    vaccinationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.controlPosition.TOP_CENTER].push(vaccinationButton);
    vaccinationButton.addEventListener("click", () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) =>{
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            infoWindow.setPosition(pos);
            infoWindow.open(map);
            map.setCenter(pos);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          }
        );
      } else {
        handleLocationError(false, infoWindow, map.getCenter());
      }
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}