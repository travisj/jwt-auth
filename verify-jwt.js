#!/usr/bin/env node
var jwt = require('jsonwebtoken');
var fs = require('fs');

var key_name = process.argv[2];
if (!key_name) {
	console.error("You must provide the public key name as the only argument to this script");
	process.exit(1);
}

var cert = fs.readFileSync(key_name)
var epoch_time = Math.floor((new Date).getTime());
var decoded = jwt.verify(process.argv[3], cert, { algorithms: ['RS256', 'HS256'] }, function(err, decoded) {
	if (err) {
		console.log(err);
	} else {
		console.log(decoded);
	}
});
