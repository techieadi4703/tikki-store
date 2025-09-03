import User from "../models/user.model.js";



export const getCurrentUser=async(req,res)=>{
    try {
        let user=await User.findById(req.userId).select("-password");
        if(!user) return res.status(404).json({message:"User not found"});
        return res.status(200).json(user);

    } catch (error) {
        console.log("getCurrentUser error",error);
        return res.status(500).json({message:"Unable to fetch user"});
    }
}

export const getAdmin=async(req,res)=>{
    try {
        const adminID=req.adminID;
        console.log(adminID,"IDheheeh\n")
        if(!adminID) return res.status(404).json({message:"Admin not found"});
        return res.status(201).json({email:adminID,role:"admin"});
    } catch (error) {
        console.log("getAdmin errorBE",error);
        return res.status(500).json({message:"Unable to fetch admin"});
    }
}

