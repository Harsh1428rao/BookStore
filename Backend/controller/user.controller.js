import User from "../model/user.model.js"

export const signup = (req,res)=>{
    try {
        const {fullname,email,password}=req.body;
        const user = User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exits"});

        }
        const createdUser = new User({
            fullname,
            email,
            password
        });~
        createdUser.save();
        res.status(201).json({message:"User created successfully"});


    }
    catch(error){
        console.log("Error: "+error.message);
        res.status(500).json({message:" Internal Server Error"});
    }
};