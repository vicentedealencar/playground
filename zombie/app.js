var Browser = require("zombie");

var browser = new Browser({site:'http://vicentedealencar.com.br/'});
browser.visit('/', function() {
	console.log(browser.text('h1'));
	console.log(browser.text('.port'));

	browser
	.fill('subject', 'zombie')
	.fill('body', 'zombie:' + new Date())
	.pressButton('enviar')
	.then(function() {
		//TODO: fix that
		console.log('nao entra aqui...');
		console.log(browser.success);
	});
	
});