const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {ksrtcModel}=require("./models/ksrtc")


const app=express()
app.use(cors())
app.use(express.json())

app.post("/signIn",(req,res)=>{
    let input=req.body
    let ksrtc=new ksrtcModel(input)
    ksrtc.save()
    console.log(ksrtc)
    res.json({"status":"test"})    
})

app.listen(8080,()=>{
    console.log("server booted")
})