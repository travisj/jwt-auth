#!/usr/bin/env node
var jwt = require('jsonwebtoken');
var fs = require('fs');

var user_name = process.argv[2];
if (!user_name) {
	console.error("You must provide a user name as the first argument to this script");
	process.exit(1);
}

var key_name = process.argv[3];
if (!key_name) {
	console.error("You must provide a key name as the second argument to this script");
	process.exit(1);
}

var cert = fs.readFileSync(key_name)
var epoch_time = Math.floor((new Date).getTime());
var token = jwt.sign({ sub: user_name, iat: epoch_time }, cert, { algorithm: 'RS256', header: { kid: key_name, alg: 'RS256' }});
process.stdout.write(token);
