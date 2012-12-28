var classifier = require('classifier');
var prompt = require('cli-prompt');

var bayes = new classifier.Bayesian();

var train = function (){
	prompt("frase: ", function(frase) {
		prompt("classe: ", function(classe) {
			if(frase.trim() && classe.trim())
			{
				bayes.train(frase, classe);
				train();
			} else {
				test();
			}
		});
	});
};

var test = function () {
	prompt("classificar: ", function(frase) {
		console.log(bayes.classify(frase));
		if(frase.trim()) test();
	});	
};

train();