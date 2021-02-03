const { model, Schema } = require('mongoose')

const schema = new Schema ({
    title: {
        type: String,
        default: ''
    },
    description: {}
})