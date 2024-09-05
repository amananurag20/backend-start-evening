const express=require("express");
const app=express();


app.use(express.json());  
app.use(express.urlencoded({extended:true}));
// app.use(express.text());// text->String

const m1=(req,res,next)=>{
   console.log("sensationnnnnn");
   next() ; 
}

app.use("/user",m1);

app.post("/",(req,res)=>{
    res.send("post request home")
})

app.post("/user",(req,res)=>{ 
    
   res.send("Hello World");
});

app.post("/user/apple/orange",(req,res)=>{
    res.send("Hello Apple");
})

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
