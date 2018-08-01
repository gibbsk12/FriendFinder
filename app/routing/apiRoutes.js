var path = require('path');
var friends = require('../data/friends.js');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    })

    //To add new entry
    app.post('/api/friends', function (request, response) {
        var surveyData = request.body;
        console.log(surveyData)
        console.log(friends)
        var questionScores = surveyData.scores;
    });
};


