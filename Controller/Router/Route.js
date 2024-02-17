const express = require("express");
const router = express.Router();
const MentorController = require("../MentorController");
const CommentController = require("../CommentController");
const MenteeController = require("../MenteesController");
// for mentor
router.post("/registration", MentorController.registar);

router.post("/login", MentorController.signin);

//Mentees
router.post("/mentees", MenteeController.addMentee);

router.delete("/mentees", MenteeController.deleteMenteeById);

router.get("/get-mentees/:id",MenteeController.getMenteebyId);

// for comment

router.get("/get-comments", CommentController.AllCommentOfMentee);

router
  .route("/comments")
  .post(CommentController.AddCommentOfMentee)
  .delete(CommentController.DeleteCommentOfMentee)
  .put(CommentController.UpdateCommentOfMentee)
  

module.exports = router;
