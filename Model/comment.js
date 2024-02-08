const db = require('./DB');
const Query  = require('./Query');
const { format, differenceInWeeks} = require('date-fns');

const addComment = async(data) => {
    const response = {};
    const mentee_id = data.id;
    const message = data.message;
    // Logic for getting date
    const dbData = await db.query(Query.getStartDateByMenteeId, [mentee_id]);
    const start_date = dbData.rows[0].start_date;
    const currentDate = new Date();
    const formateCurrentDate = format(currentDate, 'yyyy-MM-dd');
    let week = differenceInWeeks(formateCurrentDate, start_date);
    week= week+1;
    const isExist = await db.query(Query.getCommentByMenteeId, [mentee_id, week]);
    if(isExist.rowCount > 0){
        response.status = 400;
        response.data = "Comment is exist for this week, You can still edit your comment or delete you comment";
        return response;
    }
    else{
        const result = await db.query(Query.addComment, [mentee_id, week, message]);
        response.status = 200;
        response.data = result.rows[0];
        return response;
    }
}

const updateCommentById = async(data) =>{
    const response = {};
    const id = data.id;
    const message = data.message;

    const isExist = await db.query(Query.getCommentById, [id]);

    if(isExist.fields.length > 0){
        const result = await db.query(Query.updateCommentById, [id, message]);
        response.status = 200;
        response.message = "Updated successfuly";
        response.data = result.rows[0];
        return response;
    }
    else{
        response.status=400;
        response.data = "Comment does not exist";
        return response;
    }
}

const deleteCommentById = async(data) =>{
    const response = {};
    const id = data.id;
    const isExist = await db.query(Query.getCommentById, [id]);

    if(isExist.fields.length > 0){
        const result = await db.query(Query.deleteCommentById, [id]);
        response.status=200;
        response.message="Deleted successfully.";
        response.data = result.rows[0];
        return response;
    }
    else{
        response.status = 400;
        response.message = "Internal server error";
        return response;
    }
}

const getAllComments = async(data) =>{
    const response = {};
    const mentee_id=data.mentee_id;
    const isExist = await db.query(Query.getAllComments, [mentee_id]);
    if(isExist.fields.length > 0){
        response.status = 200;
        response.message = "User comment found successfully.";
        response.data = isExist.rows;
        return response;
    }
    else{
        response.status = 400;
        response.message = "User comment does not exist.";
        return response;
    }
}

module.exports = {
    addComment,
    updateCommentById,
    deleteCommentById,
    getAllComments
};