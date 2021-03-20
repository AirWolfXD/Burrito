var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(request, response) {
    var path = url.parse(request.url).pathname;
    switch (path) {
        case '/':
            fs.readFile(__dirname + '/index.html', function(error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    response.write(data);
                    response.end();
                }
            });
            break;
        case '/index.html':
            fs.readFile(__dirname + path, function(error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    response.write(data);
                    response.end();
                }
            });
            break;
            case '/stats.html':
                fs.readFile(__dirname + path, function(error, data) {
                    if (error) {
                        response.writeHead(404);
                        response.write(error);
                        response.end();
                    } else {
                        response.writeHead(200, {
                            'Content-Type': 'text/html'
                        });
                        response.write(data);
                        response.end();
                    }
                });
                break;
                case '/map.html':
                    fs.readFile(__dirname + path, function(error, data) {
                        if (error) {
                            response.writeHead(404);
                            response.write(error);
                            response.end();
                        } else {
                            response.writeHead(200, {
                                'Content-Type': 'text/html'
                            });
                            response.write(data);
                            response.end();
                        }
                    });
                    break;
                    case '/news.html':
                        fs.readFile(__dirname + path, function(error, data) {
                            if (error) {
                                response.writeHead(404);
                                response.write(error);
                                response.end();
                            } else {
                                response.writeHead(200, {
                                    'Content-Type': 'text/html'
                                });
                                response.write(data);
                                response.end();
                            }
                        });
                        break;
                case '/info.html':
                fs.readFile(__dirname + path, function(error, data) {
                    if (error) {
                        response.writeHead(404);
                        response.write(error);
                        response.end();
                    } else {
                        response.writeHead(200, {
                            'Content-Type': 'text/html'
                        });
                        response.write(data);
                        response.end();
                    }
                });
                break;
        default:  
            response.writeHead(404);  
            response.write("oops this doesn't exist - 404");  
            response.end();  
            break;  
    }
}).listen(8080);
console.log("Server running on port 8080");