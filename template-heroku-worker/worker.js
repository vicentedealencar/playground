// var email = require("email-js");

// var server = email.server.connect({
// 	user: "SMTPUSER",
// 	password: "SMTPPASS",
// 	host: "smtp.gmail.com",
// 	ssl: true
// });

// function sendEmail (callback) {
// 	server.send({
// 		text:    "IM A WORKER! " + new Date(),
// 		from:    "FROMEMAIL",
// 		to:      "TOEMAIL",
// 		subject: "emailjs" + new Date()
// 	}, callback || function(err, message) { console.log('done!', err || message); });
// }

// sendEmail();