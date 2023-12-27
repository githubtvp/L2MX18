const friends = require('../model/friendsScheme');
const path = require('path');

async function insert(req, res) {
    try {
        if (!req.body) {
            throw new Error("Missing request body");
        }
        let details = req.body;
        console.log('Details', details);
        let response = await friends.create(details);
        res.send(response);
    } catch (err) {
        res.status(500).send(err.message);
    }
}


async function view(req, res) {
    try {
        let response = await friends.find({ age: { $lt: 55 } }, { _id: 0, age: 1, name: 1 });
       console.log("View response");
        res.send(response);
    } catch (err) {
        res.status(500).send(err.message);
    }
}


function getAddFriendPage(req, res) {
    try {
        res.sendFile(path.join(__dirname, "..", "views", "add.html"));
    }
    catch (err) {
        res.status(500).send("Error here : " + err.message);
    }
}

async function deleteUsers(req, res) {
    try {
        if (!req.body) {
            throw new Error("Missing request body");
        }
        let details = req.body;
        // console.log('Details', details);
        let response = await friends.deleteMany(details);
        res.send(response);
    } catch (err) {
        res.status(500).send(err.message);
    }
}


module.exports = {
    insert,
    view,
    getAddFriendPage
};
