const express=require("express");
const app=express();
const bcrypt= require("bcrypt")


app.use(express.json());  
app.use(express.urlencoded({extended:true}));
// app.use(express.text());// text->String
let secretKey="student";

const verifyKey=(req,res,next)=>{
    const key=req.query.key;
    if(key!==secretKey){
        return res.send("Invalid key")
    }
    next();
}
app.get("/user",verifyKey, (req,res)=>{ 
    
    res.send("we are learning backend");
})

app.post("/",(req,res)=>{
    console.log(req.headers);
    res.setHeader("x-gameMOvie","cinemahall");
    res.setHeader("x-abc","21321312321321");
    res.send("post request home");

})

app.post("/user",async(req,res)=>{ 
    
    const {name, password}= req.body;
    console.log(name,password);
  const hashPassword= await bcrypt.hash(password,10);
  console.log(password,hashPassword);

  const isPasswordCorrect= await bcrypt.compare("123456",hashPassword);
  console.log(isPasswordCorrect);
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
