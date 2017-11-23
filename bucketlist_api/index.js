var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    
var bucketlistRoutes = require('./routes/bucketlist');
    
app.get('/', function(req, res){
    res.send("Hello from the root route!");
});

app.use('/api/bucketlist', bucketlistRoutes);
    
app.listen(port, function(){
    console.log("App is running on port " + process.env.PORT);
})