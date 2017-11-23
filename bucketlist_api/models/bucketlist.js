var mongoose = require('mongoose');

var bucketlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This can not be blank'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Bucketlist = mongoose.model('Bucketlist', bucketlistSchema);

module.exports = Bucketlist;
