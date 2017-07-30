/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// Insert seed models below
var Speciality = require('../api/speciality/speciality.model');
var Doctors = require('../api/doctors/doctors.model');
var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

// Insert seed data below
var specialitySeed = require('../api/speciality/speciality.seed.json');
var doctorsSeed = require('../api/doctors/doctors.seed.json');
var thingSeed = require('../api/thing/thing.seed.json');

// Insert seed inserts below
Speciality.find({}).remove(function() {
	Speciality.create(specialitySeed);
});

Doctors.find({}).remove(function() {
	Doctors.create(doctorsSeed);
});

Thing.find({}).remove(function() {
  Thing.create(thingSeed);
});