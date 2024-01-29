const express = require('express');
const router = express.Router();
const registration = require('../RegistrationController');
const client = require('../../Model/DB');

router.post("/registration", registration.registar);



// TEST WHETHER DB IS CONNECTED BY POSTING TO Users table

// router.post('/testreg', async function (req,res) {   

//     try {

//         const {name,email,password,dob} = req.body;
//         const newTodo = await client.query("INSERT INTO users(name,email,password,dob) VALUES($1,$2,$3,$4) RETURNING *",   //$1 represents the value that is put using the 1st element of the array , here description
//         [name,email,password,dob]);   //RETURNING * RETURNS THE DATA AS WELL 

//         res.json({
//             newTodo,
//             data : newTodo.rows[0]   //rows is an array which is in newTodo object whose 1st element is the todo(that we added) that we also got back due to 'RETURNING * ' being added
//         })
        
//     } catch (error) {
//         console.log(error);
        
//     }

    
// })


// TEST WHETHER DB IS CONNECTED BY POSTING TO Mentees table

// router.post('/testmentees', async function (req,res) {   

//     try {

//         const {name,users_email,week,comment} = req.body;
//         const newTodo = await client.query("INSERT INTO mentees(name,users_email,week,comment) VALUES($1,$2,$3,$4) RETURNING *",   //$1 represents the value that is put using the 1st element of the array , here description
//         [name,users_email,week,comment]);   //RETURNING * RETURNS THE DATA AS WELL 

//         res.json({
//             newTodo,
//             data : newTodo.rows[0]   //rows is an array which is in newTodo object whose 1st element is the todo(that we added) that we also got back due to 'RETURNING * ' being added
//         })
        
//     } catch (error) {
//         console.log(error);
        
//     }

    
// })




module.exports = router;
