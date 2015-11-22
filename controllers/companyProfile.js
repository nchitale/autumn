/**
 * GET /company-profile
 * Display a company's profile.
 */
//var CompanyProfile = require('../models/CompanyProfile.js');
//
//test
exports.getCompanyProfile = function(req, res) {
    res.render('company-profile', {
        title: 'Company Profile'
    });
};