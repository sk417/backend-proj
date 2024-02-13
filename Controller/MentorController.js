const userModel = require('../Model/User');

const registar =  async (req, res) =>{
    try {
        const result = await userModel.addUser(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400);
        console.error(err);
    }
}

const signin = async (req, res) => {
    try{
        const result = await userModel.login(req.body); 
        res.status(result.status).json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
        return;
    }
}

module.exports = {
    registar,
    signin
}




//create //update //delete//

