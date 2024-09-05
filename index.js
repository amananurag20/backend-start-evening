const express=require("express");
const app=express();


app.use(express.json());  
app.use(express.urlencoded({extended:true}));
// app.use(express.text());// text->String


app.post("/",(req,res)=>{
    res.send("post request home")
})

const m1=(req,res,next)=>{
    req.city="mohaliiiiiiii";
    console.log("middleware1");
    next();
}

const m2=(req,res,next)=>{
    console.log("middleware2");
    res.send("hii middleware 2");
    
    next();
}



app.post("/user",m1,m2,(req,res)=>{
 
    console.log(req.body);
    console.log(req)
//    res.send("Hello World");
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
