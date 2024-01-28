const db = require('./DB');
const {createUser, getAlluser} = require('./Query');

const addUser = async (userData) => {
    
    const {email, phone, firstName, lastName, gender, dob} = userData;
    const result = await db.query(createUser, [email, phone, firstName, lastName, gender, dob]);
    return result.rows[0];
}

const getAllUsers = async (userData) => {
    const {mentor_id} = userData;
}

module.exports = {
    addUser
}