var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res){
    db.Bucketlist.find()
    .then(function(bucketlist){
        res.json(bucketlist);
    })
    .catch(function(err){
        res.send(err);
    })
    
});

router.post('/', function(req, res){
    res.send("This is the post route");
});

module.exports = router;