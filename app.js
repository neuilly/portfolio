//..................initialize required modules
var express = require('express');
var app=express();
var http=require('http');

//map exrress default file folder to the subfolder /public under the folder that contains app.js [__dirname]
app.use(express.static(__dirname + '/public'));


//start the server listening at port 6789 when running locally or to the default remote port when deploying online
var server = app.listen(process.env.PORT || 6789, function() {
    console.log('Listening on port %d', server.address().port);
});

//................................Socket.io
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  console.log("CONNECTION");

  socket.on('disconnect', function(){
  });
});