const client = require("../../Model/DB");
const { checkDatequery } = require("../../Model/Query");

async function checkDate(email){

    const month = new Date().getMonth() +1;

    const week = getWeek(new Date().getDate());


    try {
    const result = await client.query( checkDatequery,[month,week,email]);


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


function getWeek(day){
    if(day>=1 && day<=7)
    return 1;
    else if(day<=14)
    return 2;
    else if(day<=21)
    return 3;
    else
    return 4;
}


module.exports = {
    getWeek,
    checkDate
}