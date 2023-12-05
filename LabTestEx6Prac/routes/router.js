const express = require('express');
const DBCtrl = require('../DBInterface/DBCtrl');


const router = express.Router();
// router.get('/', (req,res)=>{
//     res.send('hello world');
// })
router.get('/', DBCtrl.showIndexDotHtml);


module.exports = router;