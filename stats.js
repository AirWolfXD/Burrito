var request = new XMLHttpRequest();

request.open('GET', 'https://covid-19.dataflowkit.com/v1/world', true);
//Fetches data from api and sends to html code
request.onload = function () {
    var data = JSON.parse(this.response);
    document.getElementById("active").innerHTML = data["Active Cases_text"];
    document.getElementById("new_case").innerHTML = data["New Cases_text"];
    document.getElementById("new_death").innerHTML = data["New Deaths_text"];
    document.getElementById("total_case").innerHTML = data["Total Cases_text"];
    document.getElementById("total_death").innerHTML = data["Total Deaths_text"];
    document.getElementById("total_recover").innerHTML = data["Total Recovered_text"];
    document.getElementById("last_update").innerHTML = data["Last Update"] + ' (UTC)';
}

request.send();