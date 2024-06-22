const Joi = require("joi")


function validateAndSanitizeInput(data){

    const schema = Joi.object({
        email: Joi.string().email().trim().lowercase().required(),
        fullName: Joi.string().trim().min(2).max(30).required(),
        lastName: Joi.string().trim().min(2).max(30).required(),
        password: Joi.string().min(8).required(),
        repeat_password: Joi.ref('password'),
        phone: Joi.string().trim().regex(/^\+?[1-9]\d{1,14}$/).required()
    })

    const {error, value} = schema.validate(data, {abortEarly: false, allowUnknown: true, stripUnknown: true})

    if(error){
        const errorMessage = error.details.map(d => d.message);
        return { error: errorMessage };
    }else {
        return { value };
    }

}


module.exports = {
    validateAndSanitizeInput
}