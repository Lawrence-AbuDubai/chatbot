const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.set('port',(process.env.Port || 8000));

app.use(bodyParser.urlencoded({extended : false}))

app.use(bodyParser.json());

app.get("/", function(req, res){
    res.send("respond sent");
})

app.listen(app.get("port"), function(){
    console.log("server is running and listening on port " + app.get("port"))
});