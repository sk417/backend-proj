const userModel = require('../Model/User');

const registar =  async (req, res) =>{
    try {
        const result = await userModel.addUser(req.body);
        res.json(result);
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    registar
}