/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Doctors = require('./doctors.model');

exports.register = function(socket) {
  Doctors.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Doctors.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('doctors:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('doctors:remove', doc);
}