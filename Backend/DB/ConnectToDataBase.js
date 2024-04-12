import mongoose from "mongoose"

const ConnectToDataBase = async() => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Succesfully connected to mongodb database");
    } catch(error){
        console.log("Error while conneting to mongodb database :", error.message);
    }
}


export default ConnectToDataBase;