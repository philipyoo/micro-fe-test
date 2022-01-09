# backend-express

This is a simple express server, using `json-server` to create a mock database, and `axios` to help make requests to the database. Okta token verification has been commented out due to rate limit issues with my free Okta account. A general idea of how to verify the token is commented out in the codebase.

Using `$ npm start` in this project starts 2 servers: express server on port 3000 and mock database server on port 3001.
