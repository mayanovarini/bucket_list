var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/bucketlist-api');

mongoose.Promise = Promise;

module.exports.Bucketlist = require("./bucketlist");