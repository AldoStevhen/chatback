const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.r3ccy.mongodb.net/newChatApp?retryWrites=true&w=majority`,
  () => {
    console.log("connect to mongoose");
  }
);
