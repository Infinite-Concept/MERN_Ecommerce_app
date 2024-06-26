const router = require("express").Router()
const dealsSchema = require("../models/Deals")

router.get("/list", async (req, res) => {
    try {

        const data = await new dealsSchema.find()
        if(!data){
            return res.status(500).json({message: "internal server error"})
        }

        res.status(200).json({data})
        
    } catch (error) {
        console.log("server error", error);
        res.status(500).json({message: "internal server error"})
    }
})

