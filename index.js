import express from "express";

const app = express()

app.get('/', (reg, res) => {   
     res.send('Hello in our app \nn book-aap')
})

app.listen(3000, () =>{
    console.log('server is on localhost :3000..... bep... \nn beep \nn beeeeeppp... \nn http://localhost:3000')
})