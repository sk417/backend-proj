const client = require("../Model/DB");
const { createComment, deleteComment,updateComment } = require("../Model/Query");
const { checkDate, getWeek } = require("./helperfunctions/checkDate");
const { updatecomment } = require("./helperfunctions/typevalidation");




const updatecommentcontroller = async (req,res)=>{

    const body = req.body;
    const parse = updatecomment.safeParse(body);

    if(!parse.success)   //type validation  
    {
        return res.status(400).json({
            msg : "Incorrect inputs"
        })
    }
    else{
        const {comment,id} = body;
   

            try {

            const result = await client.query(updateComment,[comment,id]);   //updating comment


            if(result.rowCount==0)
            return res.status(400).json({
            msg : "Comment does not exist"
        })

            return res.status(200).json({
                msg : "Comment updated",
                comment_id : id
            })
                
            } catch (error) {

                console.log(error);
                
            }


        
    }
}


module.exports = {
    updatecommentcontroller
}