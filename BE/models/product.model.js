const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: true,
        max: 100
    },
    price:{
        type: String,
        required: true,
        max: 20
    },
    detail: {
        type: String,
        required: true,
        max: 255
    }
}, {
    timestamps: true
});

module.exports = productSchema;