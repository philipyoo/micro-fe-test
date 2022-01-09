# Micro FE Test

This repo is used to demonstrate how to build a custom Angular library and consume it within another (host) Angular application.

The custom Angular library will use the host applications environment variables and will make requests to an authenticated backend using Okta SSO and JWT Tokens.

Some issues that occurred using a free version of Okta was hitting the rate limits pretty quickly. Also, possibly using Okta's default authorization server caused issues with verifying the access token on the backend. But, since the purpose of this demo is focused on using a custom Angular library, I opted out of the backend authentication verification. Currently, it will only check to make sure the access token passed from the frontend is identical.

## Getting Started

#### host-angular

On the root project directory of project `host-angular`, run:
```
$ npm install
$ npm start
```

#### backend-express

On the root project directory of project `backend-express`, run:
```
$ npm install
$ npm start
```

## Usage

To use the demo, an Okta login is required. The Okta application has explicit authorized users. If you wish to use this demo, you must have one of these logins or you must replace the Okta issuer information within the `oktaauth.service.ts` file located within the `host-angular` directory.

After logging in, clicking on the "Custom" navigation bar will display the custom Angular library component.

## Projects

The following projects were created for Micro FE Test:

- [Host Application](./host-angular/README.md) - serves as the main frontend application (Port 4200)
- [Custom Library](./custom-library/README.md) - the custom Angular library to be consumed by a host application
- [Backend](./backend-express/README.md) - Simple express backend for fetching data (Port 3000)

The backend also spins up a mock database (json-server, Port 3001). This should start automatically when running the backend server via `$ npm start`.
