const express = require("express");
const records = require( "./routes/record.js");
const cors = require("cors");


const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

app.use(cors());


app.use((req,res, next) => {
  console.log(req.path, res.method)
  next()
})
  
//routes
app.use("/records", records);

//connect to db

mongoose.connect(
  process.env.MONGODB_URI
).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
}).catch((error) => {
  console.log(error)
})





