const express = require('express');
const router = express.Router();
const registration = require('../RegistrationController');
const client = require('../../Model/DB');
const { createcommentcontroller } = require('../CreateCommentController');
const { deletecommentcontroller } = require('../DeleteCommentController');
const { updatecommentcontroller } = require('../UpdateCommentController');

router.post("/registration", registration.registar);


router.route("/comments").post(createcommentcontroller).delete(deletecommentcontroller).put(updatecommentcontroller);



module.exports = router;
