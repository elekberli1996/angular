const express =require('express')
const server=express()
const port=44381

server.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Context-Type,Accept");
    next();
})

server.get('/',(req,res)=>{
    res.send({'text':'this text was send from the server'});
});

server.listen(port,()=>{
console.log(`example app listening on port ${port}`)
});