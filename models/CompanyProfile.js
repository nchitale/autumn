var mongoose = require('mongoose');
var companyProfileSchema = new mongoose.Schema({
    name: String
});

var CompanyProfile = mongoose.model('CompanyProfile', companyProfileSchema);
module.exports = CompanyProfile;