var mongoose = require('mongoose');

var companySchema = new mongoose.Schema({
    items: [{
        name: { type: String, default: '' },
        url: { type: String, default: '' },
        location: { type: String, default: '' },
        education: { type: String, default: '' }
    }]
});

module.exports = mongoose.model('Company', companySchema);