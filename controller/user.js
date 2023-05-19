const User = require('../models/User')


exports.usersAllData = async(req, resp) => {
    const { name, age, gender, mobile, guardian, identity, adharNo,
        panNo, nationality } = req.body

    const user_data = new User({
        name,
        age,
        gender,
        mobile,
        guardian,
        identity,
        adharNo,
        panNo,
        nationality
       
    })

    try{
        let result= await user_data.save()
        console.log(result)
        if(result){
         resp.status(201).json({message:'usersdata added successfully'})
        }
    }catch(error){
        console.log(error)
        resp.status(500).json({ error: "internal server error" });
    }
  
}

exports.getAllData=async(req,resp)=>{

    try{
        const data=await User.find({})
       return  resp.status(200).json({allData:data})
    }catch(error){
        console.log(error)
        resp.status(500).json({ error: "internal server error" });
    }
   
}