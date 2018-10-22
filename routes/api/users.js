const express = require('express');
const router = express.Router();

// why is it only "/test"? Because "api/users" was included in the entery/server js file seen below
// const users = require( './routes/api/users'); 
router.get('/test', (req,res) => res.json({msg: "Users Works"}));

module.exports = router; 