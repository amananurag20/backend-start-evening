const express=require("express");
const app=express();


app.post("/",(req,res)=>{
    res.send("post request home")
})

app.get("/user",(req,res)=>{
    console.log(req.query)
   res.send("Hello World");
});

app.get("/user/:name",(req,res)=>{     
    console.log(req.params)
    res.send(`Welcome back ${req.params.name}`);
   
})

app.delete("/user",(req,res)=>{
    res.send("user deleted");
 });

app.get("/home",(req,res)=>{
    res.send(`home routes`);

 })

app.listen(5000,()=>{
    console.log("server is listening on port on 5000")
})
