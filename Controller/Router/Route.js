const express = require('express');
const router = express.Router();
const registration = require('../RegistrationController');
const client = require('../../Model/DB');
const { ccomment } = require('../CreateCommentController');
const { dcomment } = require('../DeleteCommentController');
const { ucomment } = require('../UpdateCommentController');

router.post("/users/registration", registration.registar);


router.route("/mentees/comment").post(ccomment).delete(dcomment).put(ucomment);



module.exports = router;
