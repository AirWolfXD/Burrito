var request = new XMLHttpRequest();

var x = new Date();
var y = x.getFullYear().toString();
var m = (x.getMonth() + 1).toString();
var d = x.getDate().toString();
(d.length == 1) && (d = '0' + d);
(m.length == 1) && (m = '0' + m);
var day = y + '-' + m + '-' + d;

request.open('GET', `https://newsapi.org/v2/everything?q=COVID-Virus&from=2021-03-20&sortBy=publishedAt&apiKey=a49ee0e45e984dfbaae3c6d658510646&pageSize=3&page=2&language=en`, true);
//Fetches data from api and sends to html code
request.onload = function () {
    var data = JSON.parse(this.response);
    document.getElementById("news_title_1").innerHTML = data.articles[0].title;
    document.getElementById("news_content_1").innerHTML = data.articles[0].description;
    document.getElementById("news_image_1").innerHTML = data.articles[0].urlToImage;
    document.getElementById("news_url_1").innerHTML = data.articles[0].url;
}

requests.send();

// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('a49ee0e45e984dfbaae3c6d658510646');

// newsapi.v2.topHeadlines({
//     q: 'COVID-Virus',
//     language: 'en',
//     from: day
// }).then(response=>{
//     document.getElementById("news_title_1").innerHTML = response.articles[0].title;
//     document.getElementById("news_content_1").innerHTML = response.articles[0].description;
//     document.getElementById("news_image_1").src = response.articles[0].urlToImage;
//     document.getElementById("news_url_1").href = response.articles[0].url;
//     console.log(response);
// })