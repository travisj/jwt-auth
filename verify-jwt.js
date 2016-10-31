#!/usr/bin/env node
var jwt = require('jsonwebtoken');
var fs = require('fs');

var key_name = process.argv[2];
if (!key_name) {
	console.error("You must provide the public key name as the first argument to this script");
	process.exit(1);
}

var token = process.argv[3];
if (!token) {
	console.error("You must provide the jwt as the second argument to this script");
	process.exit(1);
}

var cert = fs.readFileSync(key_name)
var epoch_time = Math.floor((new Date).getTime());
var decoded = jwt.verify(token, cert, { algorithms: ['RS256', 'HS256'] }, function(err, decoded) {
	if (err) {
		console.log(err);
	} else {
		console.log(decoded);
	}
});
