const express=require(`express`);
// const { default: mongoose } = require("mongoose");
const mongoose=require(`mongoose`);
const path=require(`path`);
const port = 3021

const app=express();
app.use(express.static(__dirname));
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/students')
const db=mongoose.connection
db.once('open',()=>{
    console.log("Mongodb connection successfull")
})

const userSchema=new mongoose.Schema({
    regd_no:Number, 
    name:String,
    email:String,
    branch:String
})
const Users=mongoose.model("data", userSchema)

app.get('/',(req, res)=>
{
    res.sendFile(path.join(__dirname,'Form.html'))
})

app.post('/post',async(req,res)=>{
    const {regd_no,name,email,branch}=req.body
   const user= new Users({
    regd_no,
    name ,
    email,
    branch
   })
   await user.save()
   console.log(user)
   res.send("Form Submission Successfully!")
})
app.listen(port,()=>
{
    console.log("server started")
})
