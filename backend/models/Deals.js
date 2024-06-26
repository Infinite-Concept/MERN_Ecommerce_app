const mongoose = require("mongoose")

const dealsSchema = new mongoose.Schema({
    image: {
        require: true,
        type: String
    },
    title: {
        require: true,
        type: String
    },
    desc: {
        require: true,
        type: String
    },
    price: {
        require: true,
        type: String
    },
    other_image: {
        require: true,
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("deals", dealsSchema )