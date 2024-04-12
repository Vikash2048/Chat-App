import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });

    res.cookie("jwt", token,
        {
            maxAge: 15 * 24 * 60 * 60 * 1000,  // this is milli second structure
            httpOnly: true, // to prevent from cross-site attack prevent from xss atack
            sameSite: "strict",// to prevent from attackers
            secure: process.env.NODE_ENV !== "development",
        });
};


export default generateTokenAndSetCookie;