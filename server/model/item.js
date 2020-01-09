const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    created: {
        type: Date,
        default: Date.now}
})

const ModelClass = mongoose.model("todo",todoSchema);

module.exports = ModelClass;