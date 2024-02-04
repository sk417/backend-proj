const express = require("express");
const router = express.Router();
const MentorController = require("../MentorController");
const client = require("../../Model/DB");
const CommentController = require("../CommentController");
const { comment } = require("../helperfunctions/typevalidation");

router.post("/registration", MentorController.registar);

router.post("/login", MentorController.signin);

router
  .route("/comments")
  .post(CommentController.addComment)
  .delete(CommentController.deleteCommentById)
  .put(CommentController.updateCommentById);

router.get("/comments/:email", CommentController.getWeeklyComment);

module.exports = router;
