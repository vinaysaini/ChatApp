'use strict';

const mongoose = require("mongoose")

const schema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        index: true
    },
    fullName: {
        type: String,
        required: true,
        index: true
    },
    phone: {
        type: String,
        required: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        index: true
    }
})

module.exports = mongoose.model("Users", schema)