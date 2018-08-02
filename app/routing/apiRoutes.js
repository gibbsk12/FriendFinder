var path = require('path');
var friends = require('../data/friends');

module.exports = function (app) {

    app.get('/api/friends', function (request, response) {
        response.json(friends);
    })

    app.post('/api/friends', function (request, response) {
        var surveyData = request.body;
		var name;
		var photo;
		var totalDifference = 10000; 

		for (var i = 0; i < friends.length; i++) {
			var diff = 0;
			for (var j = 0; j < surveyData.scores.length; j++) {
                diff += Math.abs(friends[i].scores[j] - surveyData.scores[j]);
                console.log(diff);
			}
			if (diff < totalDifference) {
				totalDifference = diff;
				name = friends[i].name;
				photo = friends[i].photo;
			}
		}

		friends.push(surveyData);

		response.json({name:name, photo: photo});
    });
};



