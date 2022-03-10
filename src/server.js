const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 4000

app.use(cors())
app.use(express.json())

app.get('/',  (req,res)=>{
    res.send('Home')
})

app.post('/register',  (req,res)=>{
    res.send('user registered')
})


app.listen(PORT, ()=>{
    console.log('Server Running at localhost:4000')
})