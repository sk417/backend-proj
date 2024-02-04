const client = require("../Model/DB");
const {  getComment } = require("../Model/Query");
const { checkDate, getWeek } = require("./helperfunctions/checkDate");
const { getcomments } = require("./helperfunctions/typevalidation");




const getcommentcontroller = async (req,res)=>{

  
    const body = req.params.email;

    const parse = getcomments.safeParse(body);

    if(!parse.success)   //type validation
    {
        return res.status(400).json({
            msg : "Incorrect inputs"
        })
    }
    else{
        const users_email = body;
   

            try {

            const result = await client.query(getComment,[users_email]);   //getting all comments by user




            if(result.rowCount==0)
            return res.status(400).json({
            msg : "Mentor has not given a feedback yet"
        })

            return res.status(200).json({
                msg : "Comments",
                result : result.rows
            })
                
            } catch (error) {

                console.log(error);
                
            }


        
    }
}


module.exports = {
    getcommentcontroller
}