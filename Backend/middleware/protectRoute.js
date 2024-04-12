import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try{
        const token = req.cookies.jwt; // fetch cookie

        if(!token){
            return res.status(401).json({error:"Unauthorized User - No Token Provided"})
        }

        const decod = jwt.verify(token,process.env.JWT_SECRET);

        if(!decod){
            return res.status(401).json({error:"Unauthorized - Invalid Token"});
        }

        const user = await User.findById(decod.userId).select("-password")  // remove password from it for privacy purpose

        if(!user){
            return res.status(404).json({error:"User Not Found"});
        }

        req.user = user;

        next();

    } catch(error){
        console.log("error in protectRoute middlewear : ",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export default protectRoute;