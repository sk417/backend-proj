const comment = require('../Model/comment');

const AddCommentOfMentee = async(req, res) => {
  try{
    const data = {
      id : req.body.mentee_id,
      message: req.body.comment
    };
    const result = await comment.addComment(data);
    res.status(200).json(result);
  }catch(err){
    res.status(400).send(err);
    console.error(err);
  }
}

const UpdateCommentOfMentee = async(req, res) => {
  try{
    const data = {
      id : req.body.id,
      message: req.body.comment
    };
    const result = await comment.updateCommentById(data);
    res.status(result.status).json(result);
  }catch(err){
    res.status(400).send(err);
    console.error(err);
  }
}

const DeleteCommentOfMentee = async(req, res) =>{
  try{
    const data = {
      id : req.body.id
    };
    const result = await comment.deleteCommentById(data);
    res.status(result.status).json(result);
  }catch(err){
    res.status(400).send(err);
    console.error(err);
  }
}

const AllCommentOfMentee = async(req, res) => {
  try{
    const data = {
      mentee_id : req.query.id
    };
    const result = await comment.getAllComments(data);
    res.status(result.status).json(result);
  }catch(err){
    res.status(400).send(err);
    console.error(err);
  }
}

module.exports = {
  AddCommentOfMentee,
  DeleteCommentOfMentee,
  UpdateCommentOfMentee,
  AllCommentOfMentee
};