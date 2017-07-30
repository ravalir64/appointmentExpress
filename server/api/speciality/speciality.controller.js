'use strict';

var _ = require('lodash');
var Speciality = require('./speciality.model');

// Get list of specialitys
exports.index = function(req, res) {
  Speciality.find(function (err, specialitys) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(specialitys);
  });
};

// Get a single speciality
exports.show = function(req, res) {
  Speciality.findById(req.params.id, function (err, speciality) {
    if(err) { return handleError(res, err); }
    if(!speciality) { return res.status(404).send('Not Found'); }
    return res.json(speciality);
  });
};

// Creates a new speciality in the DB.
exports.create = function(req, res) {
  Speciality.create(req.body, function(err, speciality) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(speciality);
  });
};

// Updates an existing speciality in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Speciality.findById(req.params.id, function (err, speciality) {
    if (err) { return handleError(res, err); }
    if(!speciality) { return res.status(404).send('Not Found'); }
    var updated = _.merge(speciality, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(speciality);
    });
  });
};

// Deletes a speciality from the DB.
exports.destroy = function(req, res) {
  Speciality.findById(req.params.id, function (err, speciality) {
    if(err) { return handleError(res, err); }
    if(!speciality) { return res.status(404).send('Not Found'); }
    speciality.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}