const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const users =[
    { id:1,Name:"Mostafizur Rahman", Email: "mostafizur@gmail.com"},
    {id:2,Name:"Zara Rahman", Email: "mostafizur@gmail.com"},
    {id:3,Name:"Bobi Rahman", Email: "mostafizur@gmail.com"},
    {id:4,Name:"Malaika Rahman", Email: "mostafizur@gmail.com"}
    
]

app.get("/", (req,res)=>{
    res.send("User management system")
})

app.get("/users", (req,res)=>{
    res.send(users)
})

app.listen(port, ()=>{
    console.log(`user management server is running on port:${port}`)
})