const express = require("express");
const app = express();
const cors =require("cors")
const port = process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json())

const users =[
    {id:1,name:"Mostafizur Rahman", email: "mostafizur@gmail.com"},
    {id:2,name:"Zara Rahman", email: "mostafizur@gmail.com"},
    {id:3,name:"Bobi Rahman", email: "mostafizur@gmail.com"},
 
    
]

app.get("/", (req,res)=>{
    res.send("User management system")
})

app.get("/users", (req,res)=>{
    res.send(users)
})

app.post("/users", (req,res)=>{
    console.log(req.body)
    const newUser = req.body;
    newUser.id =users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, ()=>{
    console.log(`user management server is running on port:${port}`)
})