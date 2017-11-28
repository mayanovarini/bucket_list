var express = require('express'),
    app = express(),
    port = process.env.PORT || 3030,
    bodyParser = require('body-parser');

var bucketlistRoutes = require('./routes/bucketlist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.send("Hello from the root route!");
});

app.use('/api/bucketlist', bucketlistRoutes);

app.listen(port, function(){
    console.log("App is running on port " + process.env.PORT);
})
