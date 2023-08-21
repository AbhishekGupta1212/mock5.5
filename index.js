const express=require('express')
const app= express()
const {connection}=require('./db')
const {userRouter}=require('./Controllers/userRoute')
const {docRouter}=require("./Controllers/docRoute")
app.use(express.json())
app.use(cors)
app.use('/doctors',docRouter)
app.use('/user',userRouter)



app.listen(5050,async()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
        console.log("Connection to DB failed")
     
    }
    console.log("Server is running on port 5050")
    })