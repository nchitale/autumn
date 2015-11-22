var CompanyDB = require('../models/Company.js');

module.exports.getCompanies = function(req, res) {
    CompanyDB.find().exec(function (err, rsults) {
        res.render('companies', {
            title: 'Companies'
        });
    });
};

module.exports.postCompany = function(app) {
    return function (req, res) {
        if (req.body.name) {
            var newCompany = new CompanyDB();
            newCompany.name = req.body.name;
            newCompany.location = req.body.location;
            newCompany.url = req.body.url;

            newCompany.save(function () {
                res.redirect("/companies");
            });
        }
        else {
            res.redirect('/companies');
        }
    };
};
