const client = require("../Model/DB");
const { createComment, deleteComment } = require("../Model/Query");
const { checkDate, getWeek } = require("../helperfunctions/checkDate");
const { deletecomment } = require("../helperfunctions/typevalidation");




const dcomment = async (req,res)=>{

    const body = req.body;
    const parse = deletecomment.safeParse(body);

    if(!parse.success)   //type validation
    {
        return res.status(400).json({
            msg : "Incorrect inputs"
        })
    }
    else{
        const {users_email,week,month,id} = body;
   

            try {

            const result = await client.query(deleteComment,[id]);   //creating comment

            return res.status(200).json({
                msg : "Comment deleted",
                comment_id : id
            })
                
            } catch (error) {

                console.log(error);
                
            }


        
    }
}


module.exports = {
    dcomment
}