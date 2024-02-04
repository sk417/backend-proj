const client = require("../Model/DB");
const {
    createComment,
    deleteComment,
    updateComment,
    getComment
  } = require("../Model/Query");
const { checkDate, getWeek } = require("./helperfunctions/checkDate");
const { comment,updatecomment,getcomments, deletecomment} = require("./helperfunctions/typevalidation");

const addComment = async (req, res) => {
  const body = req.body;
  const parse = comment.safeParse(body);

  if (!parse.success) {
    //type validation
    return res.status(400).json({
      msg: "Incorrect inputs",
    });
  } else {
    const { name, comment, users_email } = body;

    const t = await checkDate(name, users_email);

    if (t == true) {
      //checking if week and month are okay

      const week = getWeek(new Date().getDate());

      const month = new Date().getMonth() + 1;
      try {
        const result = await client.query(createComment, [
          name,
          week,
          comment,
          users_email,
          month,
        ]); //creating comment

        return res.status(200).json({
          msg: "Comment created",
          data: result.rows,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      return res.status(400).json({
        msg:
          "Comment already present in week : " +
          getWeek(new Date().getDate()) +
          " and month : " +
          (new Date().getMonth() + 1) +
          " for " +
          body.name,
      });
    }
  }
};

const getWeeklyComment = async (req, res) => {
  const body = req.params.email;
  const parse = getcomments.safeParse(body);
  if (!parse.success) {
    //type validation
    return res.status(400).json({
      msg: "Incorrect inputs",
    });
  } else {
    const users_email = body;
    try {
      const result = await client.query(getComment, [users_email]); //getting all comments by user
      if (result.rowCount == 0)
        return res.status(400).json({
          msg: "Mentor has not given a feedback yet",
        });
      return res.status(200).json({
        msg: "Comments",
        result: result.rows,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

const updateCommentById = async (req, res) => {
  const body = req.body;
  const parse = updatecomment.safeParse(body);

  if (!parse.success) {
    //type validation
    return res.status(400).json({
      msg: "Incorrect inputs",
    });
  } else {
    const { comment, id } = body;

    try {
      const result = await client.query(updateComment, [comment, id]); //updating comment

      if (result.rowCount == 0)
        return res.status(400).json({
          msg: "Comment does not exist",
        });

      return res.status(200).json({
        msg: "Comment updated",
        comment_id: id,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

const deleteCommentById = async (req, res) => {
  const body = req.body;
  const parse = deletecomment.safeParse(body);

  if (!parse.success) {
    //type validation
    return res.status(400).json({
      msg: "Incorrect inputs",
    });
  } else {
    const { id } = body;

    try {
      const result = await client.query(deleteComment, [id]); //deleting comment

      if (result.rowCount == 0)
        return res.status(400).json({
          msg: "Comment does not exist",
        });

      return res.status(200).json({
        msg: "Comment deleted",
        comment_id: id,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = {
  addComment,
  updateCommentById,
  getWeeklyComment,
  deleteCommentById
};
