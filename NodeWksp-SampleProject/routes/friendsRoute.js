
const express = require('express');

const friendsRouter = express.Router();

const friendsCtrl = require('../controllers/friendsCtrl');

friendsRouter.post('/',friendsCtrl.insert);
friendsRouter.get('/add', friendsCtrl.getAddFriendPage);
friendsRouter.get('/view', friendsCtrl.view);

// friendsRouter.post('/',friendsCtrl.delete);
// friendsRouter.delete('/delete', friendsCtrl.getAddFriendPage);

module.exports = friendsRouter;
