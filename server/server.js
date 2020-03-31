const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = (process.env.PORT || 3000);

app.use(express.static(publicPath));

//Esta es la comunicación del backend que tendrá una comunicación directa con el servidor
// let io = socketIO(server); ESTO LO QUITAMOS PARA PODER DEJAR TODO EN SOCKET.JS
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => { //hemos cambiado app.listen por server.listen para lo de los socket

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});