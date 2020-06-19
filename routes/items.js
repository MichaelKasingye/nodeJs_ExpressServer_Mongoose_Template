const express = require('express');
const router = express.Router();

//Get Router
router.get('/',(req,res,next)=>{
    res.render('index',{title:'Purchase List'});
});

module.exports = router;