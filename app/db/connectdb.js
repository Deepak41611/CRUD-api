const mongoose = require('mongoose')
const connectDB = async (DATABASE_URL)=>{
    try{
        const DB_OPTIONS = {
            dbName:'Category',
            useNewUrlParser: true , 
            useUnifiedTopology: true
        }
       await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("Mongodb connected");
    }
    catch(err){
        console.log(err);
    }
}
module.exports = connectDB