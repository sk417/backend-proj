const express = require('express');
const router = express.Router();
const registration = require('../RegistrationController');
const client = require('../../Model/DB');

router.post("/registration", registration.registar);

module.exports = router;
