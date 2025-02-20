const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `database connected successfully${mongoose.connection.host}`.bgYellow
        .green.white
    );
  } catch (error) {
    console.log(`Mongodb server issue  ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
