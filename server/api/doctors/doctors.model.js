'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DoctorsSchema = new Schema({
    doc_name: String,
    info: String,
    active: Boolean,
    doc_logo: String,
    link: String,
    qualification: String,
    gender: String,
    spec_name_doc: String,
    location: String,
    experience: String,
    Expertise: String,
    PatienceExperience: String,
    hospital: String,
    hospitalAddress: String,
    recomentations: String

});

module.exports = mongoose.model('Doctors', DoctorsSchema);