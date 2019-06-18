const express = require('express');
const router = express.Router();

router.get('/users/singin',(req, res) =>{
    res.send('Singin to app')
})

router.get('/users/singup',(req, res) =>{
    res.send('send formulary');
});

module.exports = router;