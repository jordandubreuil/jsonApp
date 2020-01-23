var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser());

app.post('/randomdata', function(req, res){
    console.log(req.body);
    var min = parseInt(req.body.min);
    var max = parseInt(req.body.max);

    if(isNaN(min)||isNaN(max)){
        res.status(400);
        res.json({error: "Bad Request"});
        return;
    }
    var result = Math.round(Math.random()*(max-min) + min);
    console.log('you got random data '+ result);
    res.json({result:result});
});



app.use(express.static(__dirname+'/public'));

app.get('/data', function(req,res){
    res.sendFile(__dirname+'/public/data.json');
});

app.get('/', function(req,res){
    res.sendFile('index.html');
});


app.listen(3000, function(){
    console.log("The server is started on port 3000");
});