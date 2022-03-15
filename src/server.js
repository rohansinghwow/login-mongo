const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const PORT = 4000

app.use(cors())
app.use(express.json())
console.log('1')
//Mongoose
mongoose.connect("mongodb://localhost/todo")
console.log('2')
const userSchema = new mongoose.Schema(
    {
        username : String,
        password: String,
    }
)
console.log('3')
const User = mongoose.model("User" , userSchema);
console.log('4')



app.post('/register',  async (req,res)=>{
    console.log('5')
    const {username , password} = req.body
    console.log('6')
    const userExist = await  User.findOne({username})
    console.log(userExist.password)
    console.log('7')
    if(userExist){
        console.log('8')
        res.status(404)
        console.log('9')
        return res.send("User exists")
        
        
    }
    console.log('10')
    await User.create({username,password})
    console.log('11')
    res.json("Success")
    console.log('12')
})


app.post('/login',  async (req,res)=>{
    console.log('5')
    const {username , password} = req.body
    console.log('6')
    const userExist = await  User.findOne({username})
    
    console.log('7')
    if(userExist && password === userExist.password){
        console.log('8')
        res.status(200)
        console.log('Success Full Login')
        return res.send("Login Succesfull")
        
        
    }
    else if(userExist && password !== userExist.password){
        res.status(401)
        return res.send("wrong password")
    }
    
    
})


console.log('13')

app.listen(PORT, ()=>{
    
    console.log('Server Running at localhost:4000')
})
console.log('14')