const express = require('express');
const router = express.Router();
const registration = require('../RegistrationController');

router.post("/registration", registration.registar);

module.exports = router;
