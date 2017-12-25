//begin express
var express = require('express')
var app = express();
var Gpio = require('onoff').Gpio
var led = new Gpio(21,'out')
var ledState = 0
//begin express
app.get('/',(req, res)=>{
	ledState = led.readSync()
	res.send("CurrentState is " + ledState)
});

app.get('/on',(req, res)=>{
	ledState = led.readSync()
	if (ledState == 0){
		ledState = 1
		led.writeSync(ledState)
	}
	res.send("CurrentState is " + ledState)
});

app.get('/off',(req, res)=>{
	ledState = led.readSync()
	if (ledState == 1){
		ledState = 0
		led.writeSync(ledState)
	}
	res.send("CurrentState is " + ledState)
});



const portNumber = 3030;
app.listen(portNumber,()=>{
	console.log("Server started at port " + portNumber)
});

app.use(function(req, res, next){
  res.status(404).send('<h1>404 page not found!</h1>')
});
