const db = require('./DB');
const Query  = require('./Query');
const Hash = require('../Middleware/Hash'); 

const addUser = async (userData) => { 
    const {email, name, password ,dob, designation, gender, mobile_no} = userData;
    const isExist = await db.query(Query.isExist, [email]);
    if(isExist === 1){
        return "Email already exist";
    }
    const hashPass = await Hash.hashPassword(password);
    const result = await db.query(Query.createUser, [email, name,hashPass ,dob, designation, gender, mobile_no]);
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
    const isMatch = await Hash.comparePassword(password, dbPassword);
    if(isMatch){
      response.status = 200;
      if(isExist.rows[0].email === "admin@jman.com"){
        const res = await db.query(Query.getAdminDashboardData);
        const t= res.rows;
        response.data = {
          mentors:t,
          role : "ADMIN",
          name : isExist.rows[0].name,
          id : isExist.rows[0].id
        }
      }
      else{
        const res = await db.query(Query.getMentorDashboardData, [email]);
        let t=res.rows;
        response.data = {
          mentees:t,
          mentor_name : isExist.rows[0].name,
          role : "MENTOR",
          // mentor_email : isExist.rows[0].email
          id : isExist.rows[0].id
        }
      }
      return response;
    }
    else{
        response.status = 401;
        response.data = "Invalid Credential";
        return response;
    }
}

module.exports = {
    addUser,
    login
}