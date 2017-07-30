/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Speciality = require('./speciality.model');

exports.register = function(socket) {
  Speciality.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Speciality.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('speciality:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('speciality:remove', doc);
}