const express = require('express');
const router = express.Router();
const registration = require('../RegistrationController');
const client = require('../../Model/DB');
const { createcommentcontroller } = require('../CreateCommentController');
const { deletecommentcontroller } = require('../DeleteCommentController');
const { updatecommentcontroller } = require('../UpdateCommentController');
const { getcommentcontroller } = require('../GetAllcommentController');

router.post("/registration", registration.registar);


router.route("/comments").post(createcommentcontroller).delete(deletecommentcontroller).put(updatecommentcontroller);

router.get('/comments/:email',getcommentcontroller);



module.exports = router;
