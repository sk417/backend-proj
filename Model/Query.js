const getAllUser = `SELECT * FROM "User";`;

const createUser = `INSERT INTO "users" (email, name,password ,dob) VALUES ($1, $2, $3, $4) RETURNING *;`;

const isExist = `SELECT * FROM "users" WHERE email = $1;`;

const getPassword = `SELECT password FROM "users" WHERE email = $1;`;

const getUserByEmail = `SELECT * FROM "users" WHERE email = $1;`;

const createComment = 'INSERT INTO mentees (name,week,comment,users_email,month) VALUES ($1,$2,$3,$4,$5) RETURNING *;' ;


const deleteComment = 'DELETE FROM  mentees WHERE id=$1 RETURNING *;' ;
const updateComment = 'UPDATE mentees SET comment=$1 WHERE id=$2 RETURNING *' ;

const getComment = 'SELECT name,week,id,comment FROM mentees WHERE users_email=$1 GROUP by (name,week,comment,id) ORDER BY name' ;


const checkDatequery = 'SELECT * FROM mentees WHERE (month =$1 AND week =$2  AND name=$3 AND users_email=$4)';



module.exports = {
    getAllUser,
    createUser,
    createComment,
    deleteComment,
    updateComment,
    checkDatequery,
    getComment,
    isExist,
    getPassword,
    getUserByEmail
}