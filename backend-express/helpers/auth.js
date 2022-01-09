const OktaJwtVerifier = require('@okta/jwt-verifier');

const OKTA_DOMAIN = 'dev-34999090.okta.com';
// commenting out because may not be needed. Can be passed to OktaJwtVerifier as key `clientId`
// const CLIENT_ID = '0oa2lmbvcriHxRPfL5d7';

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: `https://${OKTA_DOMAIN}/oauth2/default`,
});

function authenticationRequired(req, res, next) {
  if (!req.headers.authorization) {
    return next(new Error('Authorization header is required'));
  }

  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);
  const expectedAudience = 'api://default';

  if (!match) {
    res.status(401);
    return next('Unauthorized');
  }
  const accessToken = match[1];

  if (!key) {
    key = accessToken;
  }

  return oktaJwtVerifier.verifyAccessToken(accessToken, expectedAudience)
    .then(jwt => {
      console.log('SUCCESS: ', jwt)
      req.jwt = jwt;
      next();
    })
    .catch(err => {
      console.log('ERROR: ', err)
      res.status(401).send(err.message);
    });
}

module.exports = authenticationRequired;
