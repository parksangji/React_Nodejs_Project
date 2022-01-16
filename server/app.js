const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = 7902;
const spawn = require('child_process').spawn;

app.use(bodyParser.json());

app.listen(port,()=>{
  console.log('listening: %d',port);
});

app.post('/api',(req,res)=>{
  let information = req.body.information;
  console.log(information);
  const result = require('child_process').spawn('python3',['test.py',information]);
result.stdout.on('data',function(pythonResult){
  console.log(pythonResult.toString());
});
result.stderr.on('data',function(pythonResult){
  console.log(pythonResult.toString());
});
});



