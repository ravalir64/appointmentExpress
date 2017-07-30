/**
 * Main application routes
 */

'use strict';

var path = require('path');

module.exports = function(app) {

    // Insert routes below
    app.use('/api/speciality', require('./api/speciality'));
    app.use('/api/doctors', require('./api/doctors'));
    app.use('/api/things', require('./api/thing'));
    app.use('/api/users', require('./api/user'));

    app.use('/auth', require('./auth'));


};