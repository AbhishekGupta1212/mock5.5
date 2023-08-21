const mongoose = require('mongoose')

const docSchema=mongoose.Schema({
   name:{type:String,required:true},
   image:{type:String,required:true},
   speciality:{type:String,required:true},
   exp:{type:Number,required:true},
    location:{type:String,required:true},
    date:{type:Number,required:true},
    slots:{type:Number,required:true},
    fee:{type:Number,required:true},
},{
    versionKey:false
})

const docModel=mongoose.model('Posts',docSchema)

module.exports={docModel}