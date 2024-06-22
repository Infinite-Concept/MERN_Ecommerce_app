const router = require("express").Router()
const bcrypt = require("bcrypt")
const User = require("../models/User")
const {validateAndSanitizeInput} = require("../validators/auth/user")



router.post('/create', async (req, res) => {
    try {

        const validationResult = validateAndSanitizeInput(req.body);

        if (validationResult.error) {
            console.log('Validation errors:', validationResult.error);
            res.status(400).json({message: validationResult.error })
        } else {
            console.log('Validated and sanitized data:', validationResult.value);
        }

        const {email, password, phone, fullName, lastName} = validationResult.value

        const existing = await User.findOne({email})

        if(existing){
            return res.status(400).json({message: "email already registered"})
        }

        
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        if(!hashedPassword){
            res.status(500).json({message: "Internal server error"})
        }

        

        
    } catch (error) {
        console.log("unable to create user", error);
        res.status(500).json({message: "Internal server error unable to create user"})
    }
})

module.exports = router