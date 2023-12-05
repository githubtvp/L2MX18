const express = require('express');
const DBCtrl = require('../DBInterface/DBCtrl');


const router = express.Router();
// router.get('/', (req,res)=>{
//     res.send('hello world');
// })
router.get('/', DBCtrl.showIndexDotHtml);
//router.post('/', DBCtrl.insertRec);
//router.get('/', DBCtrl.showRec);


module.exports = router;