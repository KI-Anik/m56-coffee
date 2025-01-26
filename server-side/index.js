const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

// middleWare
app.use(cors())
app.use(express())

// m56-coffee
// 



app.get('/',(req,res)=>{
    res.send('coffee server is running')
})

app.listen(port, ()=>{
    console.log(`port: ${port}`)
})