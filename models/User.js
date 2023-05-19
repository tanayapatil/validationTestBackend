const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
    
    name:{
        type:String,
      
        trim: true
    },
    age:{
        type:String,
        
    },
    gender:{
        type:String,
        
    },
    mobile:{
        type:String,
       
    },
    identity:{
        type:String,
       
    },
    adharNo:{
        type:String,
       
    },
    panNo:{
        type:String,
       
    },
    guardian:{
        type:String,
       
    },
    nationality:{
        type:String,
        
    }

})

module.exports=mongoose.model('allDetails',userSchema)