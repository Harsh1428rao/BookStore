import User from "../model/user.model.js"
import bcrypt from "bcrypt";
export const signup = async(req,res)=>{
    try {
        const {fullname,email,password}=req.body;
        const user =  await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exits"});

        }
        const hashpassword = await bcrypt.hash(password,10);
        const createdUser = new User({
            fullname:fullname,
            email:email,
            password:hashpassword
        })
        await createdUser.save();
        return res.status(200).json({message:"User Created Succesfully",user:{

            fullname:createdUser.fullname,
            email:createdUser.email,
            password:createdUser.password

        }})
        // res.status(201).json({message:"User created successfully"});


    }
    catch(error){
        console.log("Error: "+error.message);
        res.status(500).json({message:" Internal Server Error"});
    }
};

export const login = async (req,res)=>{
    try{
        const {email,password}= req.body;
        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(password,user.password);
        if(!user || !isMatch){
            res.send(400,"user Not found");
             return res.status(400).json({message:"invalid username or password"});
        }
        else{
            // res.send(500,"user is found");
            return res.status(200).json({message:"Login Succesfull",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email

            }})
            
        }
    }
    catch(error){
        console.log("Error: "+error.message);
        res.status(500).json({message:"Internal server Error"});
    }
}