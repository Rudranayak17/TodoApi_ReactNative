import mongoose from "mongoose";


export const connectDB=async()=>{
try {
  const {connection}=  await mongoose.connect(process.env.MONGO_URI,{
        dbName:"todoApp"
    })
  console.log(`MongoDb Connected : ${connection.host}`);
    
} catch (error) {
    console.log(error);
    process.exit(1)
}
}
