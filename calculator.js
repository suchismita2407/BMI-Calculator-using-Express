const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));



app.get("/calculator", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmicaklculator.html");
});


app.post("/calculator", function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    

    res.send("The result of the calculation is " + result);
});

app.post("/", function(req,res){
    var weight = Number(req.body.Weight);
    var height = Number(req.body.Height);

    var bmiResult = weight/(height**2);
    bmiResult = bmiResult.toFixed(2);

    if (bmiResult < 18.5){
        res.send("Your BMI is " + bmiResult + ". You are underweight.");
    }
    else if (bmiResult >= 18.5 || bmiResult < 24.9){
        res.send("Your BMI is " + bmiResult + ". You are healthy.");
    }
    else{
        res.send("Your BMI is " + bmiResult + ". You are overweight.");
    }
});

app.listen(3000, function(){
    console.log("Welcome to the port 3000");
});