
const getAllUser = `SELECT * FROM "User";`;

const createUser = `INSERT INTO users (email, name,password ,dob) VALUES ($1, $2, $3, $4) RETURNING *;`;

const createComment = 'INSERT INTO mentees (name,week,comment,users_email,month) VALUES ($1,$2,$3,$4,$5) RETURNING *;' ;


const deleteComment = 'DELETE FROM  mentees WHERE id=$1;' ;



module.exports = {
    getAllUser,
    createUser,
    createComment,
    deleteComment
}