const express = require('express');
const router = express.Router();
const DBCtrl = require('../DBInterface/DBCtrl');

// router.get('/', (req,res)=>{
//     res.send('hello world');
// })

router.post('/', DBCtrl.insertRec);
router.get('/index', DBCtrl.showPaymentPage);
router.get('/showrecords', DBCtrl.showRec);
// router.get('/', DBCtrl.deleteRec);
// Route for handling login
router.post('/login', DBCtrl.login);


module.exports = router;