var socket = io();

// on: Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// emit: Enviar informacion
socket.emit('enviarMensaje', {

    usuario: 'Imanol',
    mensaje: 'Hola Mundo'

}, function(respuesta) {

    console.log('Respuesta server: ', respuesta);
});


socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});