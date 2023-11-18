import mongoose from "mongoose";


const DB_URL = 'mongodb://127.0.0.1:27017/CAMEO';
//const DB_URL = "mongodb+srv://dummy:dummy123@cluster0.hrh3oix.mongodb.net/?retryWrites=true&w=majority";

const connectDatabase = () => {
  mongoose
    .connect(DB_URL)
    .then((con) => console.log("Database Connected"))
    .catch((err) => console.log(err));
  // .connect(process.env.MONGO_URI)
  // .then((con) => console.log(`Database Connected: ${con.connection.host}`))

};

export default connectDatabase;