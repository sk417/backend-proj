const client = require("../Model/DB");
const { createComment } = require("../Model/Query");
const { checkDate, getWeek } = require("../helperfunctions/checkDate");
const { comment } = require("../helperfunctions/typevalidation");




const ccomment = async (req,res)=>{

    const body = req.body;
    const parse = comment.safeParse(body);

    if(!parse.success)   //type validation
    {
        return res.status(400).json({
            msg : "Incorrect inputs"
        })
    }
    else{
        const {name,comment,users_email} = body;

        const t = await (checkDate(users_email)) ;    


        if(t==true){    //checking if week and month are okay

            const week = getWeek(new Date().getDate());

            const month = new Date().getMonth() +1;

            try {

            const result = await client.query(createComment,[name,week,comment,users_email,month]);   //creating comment

            return res.status(200).json({
                msg : "Comment created",
                data : result.rows
                
            })
                
            } catch (error) {

                console.log(error);
                
            }

        }
        else
        {
            return res.status(400).json(
                {
                    msg : "Comment already present in week : "+(getWeek(new Date().getDate()))+" and month : "+(new Date().getMonth() +1)
                }
            )

        }


        
    }
}


module.exports = {
    ccomment
}