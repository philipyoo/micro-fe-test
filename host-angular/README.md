# HostAngular

This is the main Angular application which will host/consume a custom Angular library.

## Authentication

Using Okta SSO, we can achieve our authentication needs. We can protect certain routes, specified in `app-routing.module.ts`. Using a JWT token, we can send this token to our API to validate the token on the backend. In this demo application, I am not validating the token on the backend because of rate limit issues with Okta. Example code for validating the Okta JWT token is commented out in the backend project.

In order to authenticate any API requests made from the library, an `auth-interceptor.interceptor.ts` was created to handle attaching the JWT access token to each request. This way, the library requests do not need to worry about getting the access token itself.

## Custom Component

The custom component is used in the `test-custom-element` directory.
