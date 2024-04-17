import User from "../models/user.model.js";
import bcrpyt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;
        console.log(fullname, username, password, confirmPassword, gender)
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "password doesn't match." })
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "Username already exist." })
        }

        // adding random profile pic 
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // password hashing 
        const salt = await bcrpyt.genSalt(10);
        const hashedPassword = await bcrpyt.hash(password, salt);

        // adding new user 
        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if (newUser) {

            // creating jwt cookie
            generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();
            console.log("New user created")

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });

        } else {
            res.status(400).json({ error: "Invalid user Credential" });
        }
    } catch (error) {
        console.log("error while sign up : ", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const confirmpassword = await bcrpyt.compare(password, user?.password || "")  // user?.password is bcs if user if not find in that case without this it will give error not it return ""

        if (!user || !confirmpassword) {
            console.log("error while login username or password incorrect");
            res.status(400).json({ error: "username or password is incorrect" });
            return;
        }

        generateTokenAndSetCookie(user._id, res);

        console.log("user logged in successfully")
        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilepic: user.profilePic
        })

    } catch (error) {
        console.log("error while login : ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const logout = (req, res) => { 
    try{
        res.cookie("jwt", "",{
            maxAge:0
        });
        console.log("successfully logged out")
        res.status(200).json({message:"Logged out successfully"})
    } catch(error){
        console.log("error in logout controller :",error.message);
        res.status(500).json({error : "Internal server error"});
    }
}