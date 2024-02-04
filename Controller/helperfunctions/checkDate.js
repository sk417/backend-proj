const client = require("../../Model/DB");
const { checkDatequery } = require("../../Model/Query");
const { DateTime } = require("luxon");


async function checkDate(name,email){

    const month = new Date().getMonth() +1;

    const week = getWeek();


    try {
    const result = await client.query( checkDatequery,[month,week,name,email]);


    if(result.rows.length === 0)
    {
       
        return true;
    }
    else

    return false;
        
    } catch (error) {

    console.log(error);
        
    }

    

    

   


    
}


function getWeek(){

    const t = new Date();


    const weekno = DateTime.local(t.getFullYear(), t.getMonth()+1, t.getDate()).weekNumber;

    return weekno;
}


module.exports = {
    getWeek,
    checkDate
}