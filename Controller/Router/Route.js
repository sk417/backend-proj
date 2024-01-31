const express = require('express');
const router = express.Router();
const registration = require('../RegistrationController');
const client = require('../../Model/DB');
const { ccomment } = require('../CreateCommentController');
const { dcomment } = require('../DeleteCommentController');

router.post("/users/registration", registration.registar);


router.route("/mentees/comment").post(ccomment).delete(dcomment);



module.exports = router;
