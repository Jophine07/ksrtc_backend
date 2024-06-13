const mongoose=require("mongoose")
const schema= mongoose.Schema(
    {
        "name":String,
        "email":String,
        "mobile":String,
        "gender":String,
        "password":String


    }
)
let ksrtcModel=mongoose.model("buses",schema)
module.exports = {ksrtcModel}