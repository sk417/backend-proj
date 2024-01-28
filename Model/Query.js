


const getAllUser = `SELECT * FROM "User";`;

const createUser = `INSERT INTO "User" (email, phone, first_name, last_name, gender, dob) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`;

module.exports = {
    getAllUser,
    createUser
}