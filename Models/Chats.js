'use strict';

const mongoose = require("mongoose")

const schema = mongoose.Schema({
    from: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
    to: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
    toGroup: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Groups',
    },
    contactId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contacts',
        required: true
    },
    text: { 
        type: String,
        trim: true,
        required: true
    },
    type: {
        type: String,
        enum: [
            "IN",
            "OUT",
        ],
        required: true
    },
    isRead: {
        type: Boolean,
    },
    isDelivered: {
        type: Boolean,
    }
},{ timestamps: true })

module.exports = mongoose.model("Chats", schema)