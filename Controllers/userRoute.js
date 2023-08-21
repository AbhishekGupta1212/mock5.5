const express=require('express')
const {userModel}=require('../Models/userModel')
const userRouter=express.Router();
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

userRouter.post('/register',async(req,res)=>{
    const {email,password}=req.body
    try {
        bcrypt.hash(password,5,async(err,hash)=>{
            const user=new userModel({email,password:hash})
            await user.save()
            res.status(200).send({message:"New user created successfully"})
        })
    } catch (error) {
        res.status(400).send({error:error.message})
    }
    })
    
    userRouter.post('/login',async(req,res)=>{
        const {email,password}=req.body
        try {
            const user=await userModel.findOne({email})
            if(user){
                bcrypt.compare(password,user.password,(err,result)=>{
    if(result){
        const token=jwt.sign({authorID:user,author:user.name},'gullu')
        res.status(200).send({message:"Login Sucessfull","token":token})
    }else{
        res.status(400).send({message:"Invalid Credentials"})
    }
                })
                
            }else{
                res.status(200).send({message:"Invalid Credentials"})
            }
        } catch (error) {
            res.status(400).send({error:error.message})
        }
    })

    module.exports={userRouter}