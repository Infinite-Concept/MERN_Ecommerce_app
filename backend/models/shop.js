const mongoose = require("mongoose")

const shopSchemas = new mongoose.Schema({
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
    brands: {
        require: true,
        type: String
    },
    category: {
        require: true,
        type: String
    },
    size: {
        require: true,
        type: String
    },
    tags: [String],
    collection: {
        type: String,
        enum: ["All products", "Best sellers", "New arrivals", "Accessories"]
    },
    colors: [String],
    createdDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("shop", shopSchemas)