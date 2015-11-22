/**
 * GET /company-profile
 * Display a company's profile.
 */
//var CompanyProfile = require('../models/CompanyProfile.js');

exports.getCompanyProfile = function(req, res) {
    res.render('company-profile', {
        title: 'Company Profile'
    });
};