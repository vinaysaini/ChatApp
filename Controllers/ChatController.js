'use strict';

const Services = require('../Services');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

let getChats = async (req, res) => {
    try {
        let aggregationQuery = [
            {
                $match: {
                    userId: ObjectId(req.query.userId)
                },
            },
            {
                $lookup: {
                    from: "users",
                    localField: "cuserId",
                    foreignField: "_id",
                    as: "Contact"
                }
            },
            {
                $unwind: {
                    "path": "$Contact",
                    "preserveNullAndEmptyArrays": true
                }
            },
            {
                $lookup: {
                    from: "groups",
                    localField: "groupId",
                    foreignField: "_id",
                    as: "Group"
                }
            },
            {
                $unwind: {
                    "path": "$Group",
                    "preserveNullAndEmptyArrays": true
                }
            },
            {
                $lookup: {
                    from: "chats",
                    let: {
                        contactId: '$_id'
                    },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ['$contactId', '$$contactId'] },
                                isRead: false
                            },
                        },
                        {
                            $count: "unReadCount"
                        }
                    ],
                    as: "Count"
                }
            },
            {
                $lookup: {
                    from: "chats",
                    let: {
                        contactId: '$_id',
                        type: "$type"
                    },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ['$contactId', '$$contactId'] },
                            },
                        },
                        {
                            $lookup: {
                                from: "users",
                                localField: "from",
                                foreignField: "_id",
                                as: "from"
                            }
                        },
                        {
                            $project: {
                                _id: 1,
                                from: {
                                    $cond: { if: { $eq: ["$$type", "GROUP"] }, then: "$from.fullName", else: [] }
                                },
                                text: 1,
                                type: 1,
                                isRead: 1,
                                isDelivered: 1,
                                createdAt: 1
                            }
                        },
                        {
                            $sort: {
                                createdAt: -1
                            }
                        }
                    ],
                    as: "Message"
                }
            },
            {
                $project: {
                    _id: 1,
                    fullName: "$Contact.fullName",
                    userName: "$Contact.userName",
                    groupName: "$Group.groupName",
                    phone: "$Contact.phone",
                    type: 1,
                    cuserId: 1,
                    groupId: 1,
                    unReadCount: { $arrayElemAt: [ "$Count.unReadCount", 0 ]},
                    message: { $arrayElemAt: [ "$Message", 0 ]}
                    // message: "$Message"

                }
            }

        ];
        let response = await Services.ContactService.aggregate(aggregationQuery);
        response = response.map(item => {
            item.unReadCount = item.unReadCount ? item.unReadCount : 0;
            if(item.message) item.message.from = item.message.from.length > 0 ? item.message.from[0] : null
            return item;
        });
        res.status(200).send(response);
    } catch (err) {
        console.log(err);
        res.status(400);
        res.send({ error: err });
    }
}

module.exports = {
    getChats
};