var express = require('express');

var db = {
	users: [
		{
			email: 'v57@gmail.com',
			pass: '1234',
			dashboards: [
				{
					widgets: [
						{
							name: 'clock',
							config: {color: 'black'}
						}
					]
				}
			]
		}
	]
};


var app = express();

app.get('/', function (req, res) {
	res.send('Hello World');
});

app.listen(3000);