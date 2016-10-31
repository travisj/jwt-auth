# Getting started with jwt-auth

This repo is a collection of helper scripts to get you started using JSON Web Token (jwt) authentication.

### create-certs.js
This script creates your private and public keys needed for Console API token-based authentication. Certificates are written to the current directory.
```bash
./create-certs.js key_name
```
Parameters
* key_name is optional and will default to id_rsa and id_rsa.pub if not provided.

Example
```bash
$ ./create-certs.js
Keys id_rsa and id_rsa.pub created.
```

### create-jwt.js
This script creates a jwt that is needed for the authentication request to `/auth`.

```bash
./create-jwt.js user_name key_name
```
Parameters
* user_name is Console API username
* key_name name of the private key you are using to generate this jwt.
* an_public_key_name name given to the public key pair in the Console API `/public-key` service

Example
```bash
$ ./create-jwt.js travis id_rsa
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImlkX3JzYSJ9.eyJzdWIiOiJ0cmF2aXMiLCJpYXQiOjE0Nzc5MzIwMDUwNzR9.ILrgmP3bGHi1qJoT681cqATNzvMFJos45rwFW3uhSUbQnpneNDCUVEw6y9jmN8cE_C3PmQf9IHdZX5bhOlBVp4nkAsKgotMxoG0iPgL-6PQKOvEe2DOhNSnAGU9grpbmLjM58WUtOXhqEIlZwMTMcyOwDZ7z4itmatzA1J0C2lwQI1YJhrCUSICoEgwe9JcaJb3TIGgyJnak1Th2BryELbSBg-0DVuijW2Rtg3pZhR_hAUeMbxidU2jaBdXtzM0F8N8iW_oN5YaFULKp0MyyukhRmO4agzRP9ubU3G0TkgkB-InbOzZaq512CueB2vZTVB7zsQ3L4Xk7RnkxHRiw_w
```

### verify-jwt.js
This script is used to verify the signed contents of a jwt. In general, this script is not needed in the token-based authentication workflow, but is useful for testing any jwts you create in your code.

```bash
./verify-jwt.js public_key_name jwt
```

Parameters
* public_key_name name of the public key you are using to verify this jwt
* jwt string representation of your JSON Web Token

Example
```bash
$ ./verify-jwt.js id_rsa.pub eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImlkX3JzYSJ9.eyJzdWIiOiJ0cmF2aXMiLCJpYXQiOjE0Nzc5MzIwMDUwNzR9.ILrgmP3bGHi1qJoT681cqATNzvMFJos45rwFW3uhSUbQnpneNDCUVEw6y9jmN8cE_C3PmQf9IHdZX5bhOlBVp4nkAsKgotMxoG0iPgL-6PQKOvEe2DOhNSnAGU9grpbmLjM58WUtOXhqEIlZwMTMcyOwDZ7z4itmatzA1J0C2lwQI1YJhrCUSICoEgwe9JcaJb3TIGgyJnak1Th2BryELbSBg-0DVuijW2Rtg3pZhR_hAUeMbxidU2jaBdXtzM0F8N8iW_oN5YaFULKp0MyyukhRmO4agzRP9ubU3G0TkgkB-InbOzZaq512CueB2vZTVB7zsQ3L4Xk7RnkxHRiw_w
{ sub: 'travis', iat: 1477932005074 }
```
