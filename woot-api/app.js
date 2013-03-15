var woot = require('./woot.js');

woot('tech', function (ret) {
	console.log('TECH');
	console.log("deal: \t", ret.deal);
	console.log("price: \t", ret.price);
	console.log("link: \t", ret.link);
	console.log("photo: \t", ret.photo);
});

woot(function (ret) {
	console.log('DEFAULT');
	console.log("deal: \t", ret.deal);
	console.log("price: \t", ret.price);
	console.log("link: \t", ret.link);
	console.log("photo: \t", ret.photo);
});
