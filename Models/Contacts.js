'use strict';

const mongoose = require("mongoose")

const schema = mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    type: {
        type: String,
        enum: [
            'PERSONAL',
            'GROUP',
        ],
        required: true,
        index: true
    },
    cuserId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
    groupId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Groups',
    }
})

module.exports = mongoose.model("Contacts", schema)