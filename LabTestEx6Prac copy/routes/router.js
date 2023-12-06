const express = require('express');
const router = express.Router();
const DBCtrl = require('../DBInterface/DBCtrl');

// router.get('/', (req,res)=>{
//     res.send('hello world2');
//  })
router.get('/index', DBCtrl.showPaymentPage);
router.post('/payments', DBCtrl.insertRec);
router.get('/showrecords', DBCtrl.showRec);
// Route for deleting a payment record
router.delete('/delete/:id', DBCtrl.deleteRec);
router.get('/login', DBCtrl.showLoginPage);
router.post('/user', DBCtrl.verifylogin);
module.exports = router;