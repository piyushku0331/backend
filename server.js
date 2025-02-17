const express=require("express")
const app=express()
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    // res.send("Server Created")
    // res.sendFile("Views/index.ejs",{root:__dirname})
    let brandName="Amazon.com"
    res.render("index",{brandName:brandName})
})
app.listen(3000,()=>{
    console.log("Server running on port 3000");
})