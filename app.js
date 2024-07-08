const express=require('express');
const app=express();
app.get('/api',(req,res)=>{
    res.send('<h1> hello Ayush Goyal bhai');
});

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("listening to port 3000");
});