'use strict';

const Service = require("../Services");


const addUsers = async () => {
    let users = [
        {
            userName: "vinay",
            fullName: "Vinay Saini",
            phone: "8888888888",
            password: "123456"
        },
        {
            userName: "jack",
            fullName: "Jack Ma",
            phone: "9999999999",
            password: "123456"
        },
        {
            userName: "mark",
            fullName: "Mark Tim",
            phone: "3223322222",
            password: "123456"
        },
        {
            userName: "john",
            fullName: "Jhon",
            phone: "321321322112",
            password: "123456"
        },
        {
            userName: "ryan",
            fullName: "Ryan",
            phone: "132312321321",
            password: "123456"
        },
        {
            userName: "kim",
            fullName: "Kim",
            phone: "31232132132131",
            password: "123456"
        },
        {
            userName: "rose",
            fullName: "Rose Jhonson",
            phone: "534543534534",
            password: "123456"
        }
    ]

    return await Service.UserService.createMany(users);
}

const addGroups = async (users) => {
    let groups = [
        {
            groupName: "Group 1",
            users: [
                users[0]._id,
                users[1]._id,
                users[2]._id
            ]
        },
        {
            groupName: "Group 2",
            users: [
                users[0]._id,
                users[3]._id,
                users[4]._id
            ]
        },
        {
            groupName: "Group 3",
            users: [
                users[5]._id,
                users[1]._id,
                users[2]._id
            ]
        },
    ]

    return await Service.GroupService.createMany(groups);
}

const addContacts = async (users, groups) => {
    let contacts = [
        {
            userId: users[0]._id,
            type: "PERSONAL",
            cuserId: users[1]._id
        },
        {
            userId: users[1]._id,
            type: "PERSONAL",
            cuserId: users[0]._id
        },
        {
            userId: users[0]._id,
            type: "PERSONAL",
            cuserId: users[2]._id
        },
        {
            userId: users[2]._id,
            type: "PERSONAL",
            cuserId: users[0]._id
        },
        {
            userId: users[0]._id,
            type: "PERSONAL",
            cuserId: users[3]._id
        },
        {
            userId: users[3]._id,
            type: "PERSONAL",
            cuserId: users[0]._id
        },
        {
            userId: users[0]._id,
            type: "GROUP",
            groupId: groups[0]._id
        },
        {
            userId: users[0]._id,
            type: "GROUP",
            groupId: groups[1]._id
        },
        {
            userId: users[1]._id,
            type: "GROUP",
            groupId: groups[0]._id
        },
        {
            userId: users[2]._id,
            type: "GROUP",
            groupId: groups[0]._id
        },
        {
            userId: users[3]._id,
            type: "GROUP",
            groupId: groups[1]._id
        },
        {
            userId: users[4]._id,
            type: "GROUP",
            groupId: groups[1]._id
        },
        {
            userId: users[5]._id,
            type: "GROUP",
            groupId: groups[2]._id
        },
        {
            userId: users[1]._id,
            type: "GROUP",
            groupId: groups[2]._id
        },
        {
            userId: users[2]._id,
            type: "GROUP",
            groupId: groups[2]._id
        }
    ]

    return await Service.ContactService.createMany(contacts);
}

const addChats = async (users, groups, contacts) => {
    let chats = [
        {
            from: users[1]._id,
            contactId: contacts[0]._id,
            text: "hi",
            isRead: true,
            type: "IN"
        },
        {
            to: users[0]._id,
            contactId: contacts[1]._id,
            text: "hi",
            isDelivered: true,
            type: "OUT"
        },
        {
            from: users[0]._id,
            contactId: contacts[1]._id,
            text: "hello",
            isRead: true,
            type: "IN"
        },
        {
            to: users[1]._id,
            contactId: contacts[0]._id,
            text: "hello",
            isDelivered: true,
            type: "OUT"
        },
        {
            from: users[1]._id,
            contactId: contacts[0]._id,
            text: "how are you?",
            isRead: false,
            type: "IN"
        },
        {
            to: users[0]._id,
            contactId: contacts[1]._id,
            text: "how are you?",
            isDelivered: true,
            type: "OUT"
        },
        {
            from: users[2]._id,
            contactId: contacts[2]._id,
            text: "Good Morning!!!!",
            isRead: false,
            type: "IN"
        },
        {
            to: users[0]._id,
            contactId: contacts[3]._id,
            text: "Good Morning!!!!",
            isDelivered: true,
            type: "OUT"
        },
        {
            from: users[2]._id,
            contactId: contacts[2]._id,
            text: "Have a nice day.",
            isRead: false,
            type: "IN"
        },
        {
            from: users[0]._id,
            contactId: contacts[3]._id,
            text: "Have a nice day.",
            isDelivered: true,
            type: "OUT"
        },
        {
            from: users[2]._id,
            contactId: contacts[6]._id,
            text: "Hello Friends",
            isRead: false,
            type: "IN"
        },
        {
            from: users[2]._id,
            contactId: contacts[8]._id,
            text: "Hello Friends",
            isRead: false,
            type: "IN"
        },
        {
            toGroup: groups[0]._id,
            contactId: contacts[9]._id,
            text: "Hello Friends",
            isRead: false,
            type: "IN"
        },
        {
            from: users[2]._id,
            contactId: contacts[6]._id,
            text: "Hope, you all are doing well.",
            isRead: false,
            type: "IN"
        },
        {
            from: users[2]._id,
            contactId: contacts[8]._id,
            text: "Hope, you all are doing well.",
            isRead: false,
            type: "IN"
        },
        {
            toGroup: groups[0]._id,
            contactId: contacts[9]._id,
            text: "Hope, you all are doing well.",
            isRead: false,
            type: "IN"
        },
        {
            from: users[3]._id,
            contactId: contacts[7]._id,
            text: "Lets meet today.",
            isRead: true,
            type: "IN"
        },
        {
            from: users[3]._id,
            contactId: contacts[11]._id,
            text: "Lets meet today.",
            isRead: false,
            type: "IN"
        },
        {
            toGroup: groups[1]._id,
            contactId: contacts[10]._id,
            text: "Lets meet today.",
            isRead: false,
            type: "IN"
        },
        {
            from: users[0]._id,
            contactId: contacts[10]._id,
            text: "Sure",
            isRead: false,
            type: "IN"
        },
        {
            from: users[0]._id,
            contactId: contacts[11]._id,
            text: "Sure",
            isRead: false,
            type: "IN"
        },
        {
            toGroup: groups[1]._id,
            contactId: contacts[7]._id,
            text: "Sure",
            isDelivered: true,
            type: "OUT"
        }
    ]

    function delay() {
        return new Promise(resolve => setTimeout(resolve, 10));
    }

    for (const item of chats) {
        await delay();
        // console.log(item);
        await Service.ChatService.create(item);
    }
    console.log('Done!');
    return true;
}


const addData = async () => {
    let mainUser = await Service.UserService.find({userName: "vinay"}, {_id: 1}, {});
    if (mainUser && mainUser.length > 0) {
        console.log("\x1b[32m", "\n\n Data is already added to DB\n Please run following GET API to check the output:");
        console.log("\x1b[34m", `\n http://localhost:5000/chats?userId=${mainUser[0]._id}`);
    } else {
        let users = await addUsers();
        let groups = await addGroups(users);
        let contacts = await addContacts(users, groups);
        await addChats(users, groups, contacts);
        console.log("\x1b[32m", "\n\n Data is added to DB Successfully!!!!!!\n Please run following GET API to check the output:");
        console.log("\x1b[34m", `\n http://localhost:5000/chats?userId=${users[0]._id}`);
    }
}

module.exports = {
    addData
}