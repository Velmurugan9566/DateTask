const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors());
app.use(express.json())

app.get('/getDate',(req,res)=>{
    try{
        var value= new Date()
        const formatDate = new Intl.DateTimeFormat('en-US').format(value)
        console.log(formatDate)
        var h = value.getHours();
        var m = value.getMinutes();
        var s = value.getSeconds();
        console.log(h, m , s)
        var formatTime = h+":"+m+":"+s;
        //console.log(value.toString())
        //console.log(value.getFullYear())
    
        res.json({formatDate,formatTime})
    }catch(error){
        console.log(error)
        res.json(error)
    }  

})
app.listen(3001,() =>{
    console.log("Server is listening")
})