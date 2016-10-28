#!/usr/bin/env node
let openssl = require('openssl-wrapper').exec;

var key_name = process.argv[2];
if (!key_name) {
	key_name = 'id_rsa';
}
var public_key_name = key_name + '.pub';
 
return openssl('genrsa', {'out': key_name, '2048': false}, function(err, buffer) {
	if (err) {
		console.log(err);
	} else {
		return openssl('rsa', {'in': key_name, '-pubout': false, 'out': public_key_name}, function(err, buffer) {
			if (err) {
				console.log(err);
			} else {
				console.log(buffer.toString());
			}
		});
	}
});
