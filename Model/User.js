const db = require('./DB');
const Query  = require('./Query');
const Middleware = require('../Middleware/Hash'); 

const addUser = async (userData) => { 
    const {email, name, password ,dob} = userData;
    const isExist = await db.query(Query.isExist, [email]);
    if(isExist === 1){
        return "Email already exist";
    }
    const hashPass = await Middleware.hashPassword(password);
    const result = await db.query(Query.createUser, [email, name,hashPass ,dob]);
    return result.rows[0];
}

const response = {};

const login = async (userData) => {
    const {email, password} = userData;
    const isExist = await db.query(Query.isExist, [email]);
    if(isExist.rows.length === 0){
      response.status = 400;
      response.data = "Invalid Credential";
      return response;
    }
    const user = await db.query(Query.getPassword, [email]);
    const dbPassword = user.rows[0].password;
    const isMatch = await Middleware.comparePassword(password, dbPassword);
    if(isMatch){
      response.status = 200;
      response.data = {
        name : isExist.rows[0].name,
        email : isExist.rows[0].email,
        dob : isExist.rows[0].dob
      }
      return response;
    }
    else{
        response.status = 401;
        response.data = "Invalid Credential";
        return response;
    }
}

const getAllUsers = async (userData) => {
    const {mentor_id} = userData;
}

module.exports = {
    addUser,
    login
}