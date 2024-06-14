const mongoose=require("mongoose")
const schema= mongoose.Schema(
    {
        "name":String,
        "email":String,
        "mobile":String,
        "gender":String,
        "password":String,
        "busName":String,
        "route":String,
        "busNo":String,
        "driver":String


    }
)
let ksrtcModel=mongoose.model("buses",schema)
module.exports = {ksrtcModel}