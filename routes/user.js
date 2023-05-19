const express = require('express');
const router = express.Router();
const{usersAllData,getAllData}=require('../controller/user')

router.post('/addUserData', usersAllData)
router.get('/getUserData', getAllData)

module.exports = router