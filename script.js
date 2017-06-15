$(function () {
  // initialize socket.io.
  var socket = io();

  // on message send.
  $('#messageSubmit').on('click', function () {
    console.log('message: ' + $('#messageInput').val());
    socket.emit('message', $('#messageInput').val());
    $('#messageInput').val('');
  });
});
