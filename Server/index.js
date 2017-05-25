var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/its-on', function(req, res){
  res.status(200).send('El servidor esta ON y esta respondiendo');
});

server.listen(7077,function(){
  console.log('El Servidor está funcionando en http://localhost:7077');
});
