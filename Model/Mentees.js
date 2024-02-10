const db = require('./DB');
const Query  = require('./Query');
const { format } = require('date-fns');

const addMentees = async(data) =>{
    const response = {};
    const {mentor_id, name, email} = data;
    const currentDate = new Date();
    const start_date = format(currentDate, 'yyyy-MM-dd');
    const result = await db.query(Query.addMentee, [mentor_id, name, email, start_date]);
    if(result.fields.length > 0){
        response.status = 200;
        response.message = "Mentee Added successfully.";
        response.data = result.rows[0];
    }
    else{
        response.status = 400;
        response.message = "Something went wrong please try again later.";
    }
    return response;
}

const deleteMentees =  async(data) =>{
    const mentee_id = data.id;
    const result = await db.query(Query.deleteMentee, [mentee_id]);
    const response = {};
    response.status = 200;
    response.message = "Deleted successfully";
    return response;
}

module.exports = {
    addMentees,
    deleteMentees
};