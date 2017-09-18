var http = require('http');

http.createServer(function(req,res){
    res.write(
        '<html>' +
            '<head>' +
                '<title>Hello Wolrd</title>' +
            '</head>' + 
            '<body>' +
                '<h1>Hello Wolrd</h1>' + 
            '</body>' + 
        '</html>'   
    );
    res.end();
}).listen(3412);