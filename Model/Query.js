//Authentication
const createUser = `INSERT INTO "mentors" (email, name, password, dob, designation, gender, mobile_no) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`;

const isExist = `SELECT * FROM "mentors" WHERE email = $1;`;

const getAdminDashboardData = `SELECT id, name, email, designation, dob FROM "mentors";`;

const getMentorDashboardData = `SELECT mentees.id as id, mentees.name as name FROM "mentees" JOIN "mentors" ON mentees.mentor_id = mentors.id WHERE mentors.email = $1;`;

const getPassword = `SELECT password FROM "mentors" WHERE email = $1;`;

const getUserByEmail = `SELECT * FROM "mentors" WHERE email = $1;`;

const getCommentByMenteeId = `SELECT * FROM "comments" WHERE mentee_id = $1 AND week = $2;`;

const getCommentById = `SELECT * FROM "comments" WHERE id=$1;`;

const addComment = `INSERT INTO "comments" (mentee_id, week, comment) VALUES($1, $2, $3) RETURNING *;`;

const updateCommentById = `Update "comments" SET comment = $2 WHERE id=$1;`;

const deleteCommentById = `DELETE FROM "comments" WHERE id = $1;`;

const getAllComments = `SELECT * FROM "comments" WHERE mentee_id=$1;`;

const addMentee = `INSERT INTO "mentees" (mentor_id, name, email, start_date) VALUES($1, $2, $3, $4) RETURNING *;`;

const deleteMentee = `DELETE FROM "mentees" WHERE id = $1;`;


const getMenteesByMentorId = `SELECT id, name FROM "mentees" WHERE mentor_id = $1`;

const getStartDateByMenteeId = `SELECT start_date FROM "mentees" WHERE id=$1;`;

module.exports = {
    deleteMentee,
    createUser,
    getCommentById,
    getAllComments,
    getCommentByMenteeId,
    getStartDateByMenteeId,
    updateCommentById,
    deleteCommentById,
    addComment,
    addMentee,
    getMenteesByMentorId,
    isExist,
    getPassword,
    getUserByEmail,
    getAdminDashboardData,
    getMentorDashboardData
}