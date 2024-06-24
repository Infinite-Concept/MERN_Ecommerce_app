const router = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
const {validateAndSanitizeInput, validateAndSanitizeInputLogin} = require("../validators/auth/user")
const sendVerificationEmail = require("../lib/email")

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
            return res.status(500).json({message: "Internal server error"})
        }

        let user = new User({
            email: email,
            password: hashedPassword,
            phone: phone,
            fullName: fullName,
            lastName: lastName
        })

        let savedUser = await user.save()

        let subject = `You have successful registered with fasco ecommerce`
        let text = `
                Fasco E-commerce \n\n\n
                Dear User,
                Welcome to our platform!
                Your registration has been successfully completed.
                Best regards,
                Traveler
        `
        sendVerificationEmail(savedUser.email, subject, text)
        
        res.status(200).json({message: "User successful create"})
        
    } catch (error) {
        console.log("unable to create user", error);
        res.status(500).json({message: "Internal server error unable to create user"})
    }
})

router.post("/login", async (req, res) => {
    console.log("hello");
    try {
        const validationResult = validateAndSanitizeInputLogin(req.body)

        const{email, password} = validationResult.value

        const user = await User.findOne({ email })

        if(!user){
            return res.status(400).json({message: "email not found"})
        }

        const unHashedPassword = await bcrypt.compare(password, user.password)

        if(!unHashedPassword){
            return res.status(400).json({message: "Invalid credentials"})
        }

        const token = jwt.sign({userId: user.id}, process.env.SECERT)
        res.json({token})
   
    } catch (error) {
        console.log("unable to access the endpoint", error);
        res.status(500).json({message: "Internal server Error"})
    }

})

module.exports = router