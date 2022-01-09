const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

const DB_URL = 'http://localhost:3001';

/* GET users listing. */
router.get('/', function(req, res, next) {
  return axios.get(`${DB_URL}/users`).then(r => {
    return res.json(r.data)
  });
});

module.exports = router;
