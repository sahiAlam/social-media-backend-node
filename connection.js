const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectMongoDB = async (url) => {
  mongoose.connect(url);
};

module.exports = {
  connectMongoDB,
};
