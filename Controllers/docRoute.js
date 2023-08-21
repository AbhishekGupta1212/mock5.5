const express=require('express')
const docRouter=express.Router()
const {docModel}=require('../Models/doctorModel')

docRouter.post('/appointments',async(req,res)=>{
    try {
        const appoint=new docModel(req.body)
        await appoint.save()
        res.status(200).json("Appointment Confirmed")
    } catch (error) {
        res.send({message:error.message})
    }
})

docRouter.get('/',async(req,res)=>{
    try {
        const doc=await docModel.find()
        res.send(doc)
    } catch (error) {
        res.send({error:error.message})
    }
})

module.exports={docRouter}