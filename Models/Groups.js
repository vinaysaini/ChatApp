'use strict';

const mongoose = require("mongoose")

const schema = mongoose.Schema({
    groupName: {
        type: String,
        required: true,
        index: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    }]
})

module.exports = mongoose.model("Groups", schema)