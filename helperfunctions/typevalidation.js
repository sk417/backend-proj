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
    users_email : zod.string().email(),
    week : zod.number(),
    month : zod.number(),
    id : zod.number()
})


module.exports = {
    comment,
    deletecomment
}