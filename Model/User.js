const db = require('./DB');
const {createUser, getAlluser} = require('./Query');

const addUser = async (userData) => {
    
    const {email, name,password ,dob} = userData;
    const result = await db.query(createUser, [email, name,password ,dob]);
    return result.rows[0];
}

const getAllUsers = async (userData) => {
    const {mentor_id} = userData;
}

module.exports = {
    addUser
}