const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/DBMS";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Database Connected Boss");
  });
};

module.exports = connectToMongo;

