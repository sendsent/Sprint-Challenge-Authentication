<!-- Answers to the Short Answer Essay Questions go here -->
# **Answers** 

**Q1** Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

Middleware is a function that receives the request and resonse objects of an HTTP request/response cycle. It may change these objects before passing them to the next middleware function in the chain. Sessions stores a session identifier on the client side within a cookie. bcrypt is a password hashing function that incorporates a salt to protect against rainbow table attacks. A very cool aspect of bcrypt is that it is irreversible and uses an adaptive function - over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power. JWT is JSON Web Token and it is used for authentication. Requests made with JWT allow the user to access routes that are permitted by that token. So if a user is signed in, they don't have to keep signing in to have access to those routes. The payload contains all the required information about the user, avoiding the need to query the database more than once.
 
 **Q2** What does bcrypt do in order to prevent attacks?

 bcrypt is a password hashing function that incorporates a salt to protect against rainbow table attacks. A very cool aspect of bcrypt is that it is irreversible and uses an adaptive function - over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power.

 **Q3** What are the three parts of the JSON Web Token?

 Header: Usually consists of two parts - the type of token (JWT) and the applied hashing algorithm
 Payload: Consists of the claims. These are declarations in regards to the user (or an entity) and metadata.
 Signature: Consists of the encoded header, encoded payload, a secret and the applied algorithm in the head.
