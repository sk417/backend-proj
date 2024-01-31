const zod = require('zod');


//create comment
const comment = zod.object({
    comment : zod.string(),
    name : zod.string(),
    // week : zod.number(),
    users_email : zod.string().email()
})


//delete comment
const deletecomment = zod.object({
    id : zod.number()
})

//update comment
const updatecomment = zod.object({
    id : zod.number(),
    comment : zod.string()
})


module.exports = {
    comment,
    deletecomment,
    updatecomment

}