
const getAllUser = `SELECT * FROM "User";`;

const createUser = `INSERT INTO users (email, name,password ,dob) VALUES ($1, $2, $3, $4) RETURNING *;`;

module.exports = {
    getAllUser,
    createUser
}