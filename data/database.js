import mongoose from "mongoose";

 export const connectdb = ()=>{
    mongoose.connect(process.env.DATABASE_URL, {

    })

  .then(()=>console.log("Data Base is Connected"))
.  catch((e)=>console.log(e));
 }

