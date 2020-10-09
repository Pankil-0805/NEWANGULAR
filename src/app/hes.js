var http = require('http');
var fs = require('fs');
var hostname='localhost';
var path =require('path');
var port=3200;
var server=http.createServer(function (req, res) {
 if(req.method=='GET')
     var fileUrl;
     if(req.url == '/') fileUrl = './ind.html';
     var fileUrl = req.url;
     var filepath = path.resolve('Readfld' + fileUrl);
     res.writeHead(200, {'Content-Type': 'text/html'});
     fs.createReadStream(filepath).pipe(res);
 });
 server.listen(port,hostname,function()
  {
      console.log(`Server is running at http://${hostname}:${port}`)
  })