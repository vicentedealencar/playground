var db = {
	users: 
	{
		v57:
		{
			email: 'v57@gmail.com',
			pass: '1234',
			dashboards: 
			{
				work:
				{
					widgets: 
					{
						clock:
						{
							color: 'black'
						}
					}
				}
			}
		}
	}
};

var express = require('express');
var app = express();
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

app.get('/', function (req, res) {
	res.render('index', {
		title: 'Hello!!'
	});
});

app.get('/:user/:dashboard', function(req, res) {
	//TODO: verify if breaks
	var widgets = db.users[req.params.user].dashboards[req.params.dashboard].widgets;

	Object.keys(widgets).forEach(function (key) {
		res.write(key +' - '+JSON.stringify(widgets[key]));
	});

	res.end();
});

app.listen(3000);