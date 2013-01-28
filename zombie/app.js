var Browser = require("zombie");

var browser = new Browser({site:'http://vicentedealencar.com.br/'});
browser.visit('/', function() {
	console.log(browser.text('h1'));
	console.log(browser.text('.port'));

	browser
	.fill('email', 'zombie')
	.fill('mensagem', 'zombie')
	.pressButton('enviar')
	.then(function() {
		//TODO: fix that
		console.log('nao entra aqui...');
		console.log(browser.success);
	});
	
});