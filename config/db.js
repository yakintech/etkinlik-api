const { default: mongoose } = require("mongoose");

const env = {
    db: process.env.CONNECTION_STRING,
  };
  const connectDB = async () => {
    try {
      await mongoose.connect(env.db);
      console.log("MongoDB connected...");
    } catch (error) {
      console.log(error.message);
      //Exit process with failure
      process.exit(1);
    }
  };
  
  module.exports = connectDB;