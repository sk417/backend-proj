const client = require("../Model/DB");

async function checkDate(email){

    const month = new Date().getMonth() +1;

    const week = getWeek(new Date().getDate());

    console.log(month,week);


    try {
    const result = await client.query('SELECT * FROM mentees WHERE (month =$1 AND week =$2 AND users_email=$3) ',[month,week,email]);

    // console.log(result.rows.length);

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