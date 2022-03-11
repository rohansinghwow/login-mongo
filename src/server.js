const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const PORT = 4000

app.use(cors())
app.use(express.json())

//Mongoose
mongoose.connect("mongodb://localhost/todo")
const userSchema = new mongoose.Schema(
    {
        username : String,
        password: String,
    }
)
const User = mongoose.model("User" , userSchema);


app.get('/',  (req,res)=>{
    res.send('Home')
})

app.post('/register',  async (req,res)=>{
    const {username , password} = req.body
    const userExist = User.findOne({username})
    if(userExist){
        res.status(500)
        
    }
    await User.create({username,password})
    
    res.json("Success")
})


app.listen(PORT, ()=>{
    console.log('Server Running at localhost:4000')
})