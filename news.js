var request = new XMLHttpRequest();

request.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid&sort=newest&fq=type_of_material:(%22News%22)&fq=subject:(%22Covid%22)&api-key=kHnroZo6gVGRL4ABCkQPavVupsy4ZAzS`, true);
//Fetches data from api and sends to html code
var data;
var i = 0;
if(i == 0){
    document.getElementById("first").checked = true;
    document.getElementById("second").checked = false;
    document.getElementById("third").checked = false;
}
request.onload = function () {
    data = JSON.parse(this.response);
    add(i);
}

const next = () => {
    if(i == 0){
        document.getElementById("prev_button").disabled = false;
    }
    i += 3;
    if(i == 3){
        document.getElementById("first").checked = false;
        document.getElementById("second").checked = true;
        document.getElementById("third").checked = false;
    } else if (i == 6){
        document.getElementById("first").checked = false;
        document.getElementById("second").checked = false;
        document.getElementById("third").checked = true;
        document.getElementById("next_button").disabled = true;
    }
    add(i);
}

const prev = () => {
    if(i == 6){
        document.getElementById("next_button").disabled = false;
    }
    i -= 3;
    if(i == 3){
        document.getElementById("first").checked = false;
        document.getElementById("second").checked = true;
        document.getElementById("third").checked = false;
    } else if (i == 0){
        document.getElementById("first").checked = true;
        document.getElementById("second").checked = false;
        document.getElementById("third").checked = false;
    }
    if(i == 0){
        document.getElementById("prev_button").disabled = true;
    }
    add(i);
}

const add = (pos) => {
    document.getElementById("news_title_1").innerHTML = data.response.docs[pos].headline.main;
    document.getElementById("news_content_1").innerHTML = data.response.docs[pos].abstract;
    document.getElementById("news_image_1").src = 'https://www.nytimes.com/' + data.response.docs[pos].multimedia[22].url;
    document.getElementById("news_url_1").href = data.response.docs[pos].web_url;
    
    document.getElementById("news_title_2").innerHTML = data.response.docs[pos + 1].headline.main;
    document.getElementById("news_content_2").innerHTML = data.response.docs[pos + 1].abstract;
    document.getElementById("news_image_2").src = 'https://www.nytimes.com/' + data.response.docs[pos + 1].multimedia[22].url;
    document.getElementById("news_url_2").href = data.response.docs[pos + 1].web_url;

    document.getElementById("news_title_3").innerHTML = data.response.docs[pos + 2].headline.main;
    document.getElementById("news_content_3").innerHTML = data.response.docs[pos + 2].abstract;
    document.getElementById("news_image_3").src = 'https://www.nytimes.com/' + data.response.docs[pos + 2].multimedia[22].url;
    document.getElementById("news_url_3").href = data.response.docs[pos + 2].web_url;
}

request.send();
//imported api to request NYT articles for the news cards 

