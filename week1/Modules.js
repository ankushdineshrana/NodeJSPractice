var http=require('http');

var server=http.createServer(function(req,res){
    res.end("Hello HTTP");
});
server.listen(5000);