const  {
    model,
    Schema,
} = require('mongoose')

const schema = new Schema({
    username: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        default: "",
    },
    password: {
        type: String,
        default: ''
    },
    FIO: {
        type: String,
        default: ''
    },
    Company_name: {
        type: String,
        default: ''
    },
    IIN: {
        type: Number,
        default: ''
    },
    Region: {
        type: String,
        default: ''
    },
    District: {
        type: String,
        default: ''
    },
    Address: {
        type: String,
        default: ''
    },
    Phone_number: {
        type: Number,
        default: ''
    },
    Product_name: {
        type: String,
        default: ''
    },
    Product_quantity: {
        type: Number,
        default: ''
    },
    Commentary: {
        type: String,
        default: ''
    },
})

module.exports = model("user", schema);