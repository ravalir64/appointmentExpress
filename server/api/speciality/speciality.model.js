'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SpecialitySchema = new Schema({
    value: String,
    link: String,
    link_hosps: String,
    altspec: String
});




module.exports = mongoose.model('Speciality', SpecialitySchema);