var bruteforce = require('./bruteforce');

var solved = bruteforce('abc', function(possible){ return possible == 'babaca'; });
console.log("solved!!!!!");
console.log(solved);