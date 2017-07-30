'use strict';

var _ = require('lodash');
var Doctors = require('./doctors.model');

// Get list of doctorss
exports.index = function(req, res) {
    Doctors.find(function(err, doctorss) {
        if (err) { return handleError(res, err); }
        return res.status(200).json(doctorss);
    });
};

// Get a single doctors
exports.show = function(req, res) {
    Doctors.findById(req.params.id, function(err, doctors) {
        if (err) { return handleError(res, err); }
        if (!doctors) { return res.status(404).send('Not Found'); }
        return res.json(doctors);
    });
};

// Creates a new doctors in the DB.
exports.create = function(req, res) {
    Doctors.create(req.body, function(err, doctors) {
        if (err) { return handleError(res, err); }
        return res.status(201).json(doctors);
    });
};

// Updates an existing doctors in the DB.
exports.update = function(req, res) {
    if (req.body._id) { delete req.body._id; }
    Doctors.findById(req.params.id, function(err, doctors) {
        if (err) { return handleError(res, err); }
        if (!doctors) { return res.status(404).send('Not Found'); }
        var updated = _.merge(doctors, req.body);
        updated.save(function(err) {
            if (err) { return handleError(res, err); }
            return res.status(200).json(doctors);
        });
    });
};

// Deletes a doctors from the DB.
exports.destroy = function(req, res) {
    Doctors.findById(req.params.id, function(err, doctors) {
        if (err) { return handleError(res, err); }
        if (!doctors) { return res.status(404).send('Not Found'); }
        doctors.remove(function(err) {
            if (err) { return handleError(res, err); }
            return res.status(204).send('No Content');
        });
    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}