// simple node js server setup 
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const hostname = '127.0.0.1';
const port = 4001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  var date = new Date()
  res.end('Hello World\n  ' +date);
});

const io = socketIo(server);

io.on("connection", socket => {
  console.log("New client connected"), setInterval(
    () => getTimeAndSend(socket),
    1000
  );
  socket.on("disconnect", () => console.log("Client disconnected"));
});

const getTimeAndSend = async socket => {
  try {
    var date = new Date()
    date = date.toLocaleString()
    socket.emit("Date", date);
  } catch (error) {
    console.error('Error!!');
  }
};

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});