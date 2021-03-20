var request = new XMLHttpRequest();

request.open('GET', '', true);
//Fetches data from api and sends to html code
request.onload = function () {
    var data = JSON.parse(this.response);
    
}

request.send();