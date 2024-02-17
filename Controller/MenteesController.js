const mentee = require('../Model/Mentees');

const addMentee = async(req, res) =>{
    try{
        const data={
           mentor_id : req.body.mentor_id,
           name : req.body.name,
           email : req.body.email 
        };
        const result = await mentee.addMentees(data);
        res.status(result.status).json(result);
    }catch(err){
        res.status(500).send(err);
        console.log(err);
    }
}

const deleteMenteeById = async(req, res) => {
    try{
        const data = {
            id : req.body.id
        };
        const result = await mentee.deleteMentees(data);
        res.status(result.status).json(result);
    }catch(err){
        res.status(500).send("Internal Server error");
        console.log(err);
    }
}

const getMenteebyId = async(req,res) =>{

    try {
        const data = {
            id : req.params.id
        };
        const result = await mentee.getMentees(data);
        res.status(result.status).json(result);
       } catch (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    }
}

module.exports = {
    addMentee,
    deleteMenteeById,
    getMenteebyId
}