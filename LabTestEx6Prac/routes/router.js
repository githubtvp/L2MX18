const express = require('express');
const DBCtrl = require('../DBInterface/DBCtrl');


const router = express.Router();
// router.get('/', (req,res)=>{
//     res.send('hello world');
// })
router.get('/', DBCtrl.showIndexDotHtml);
// router.post('/add', DBCtrl.insertRec);
// router.get('/', DBCtrl.showRec);
// router.get('/', DBCtrl.deleteRec);

module.exports = router;