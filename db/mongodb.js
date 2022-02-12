const mongoose = require("mongoose"),
  Admin = mongoose.mongo.Admin;
const initUserSchema = require("./user.schema");
const initLocSchema = require("./location.schema");
const initBookSchema = require("./book.schema");
const userModel = require("../model/users");

//mongoDB Class
class MongoDB {
  constructor() {
    this.uri = `mongodb+srv://${process.env.BOOKSHELF_UID}:${process.env.BOOKSHELF_PWD}@bookshelf.rmtrd.mongodb.net/bookshelf?retryWrites=true&w=majority`;
  }

  //connect to MongoDB Atlas Instance
  async connect() {
    console.log(this.uri);
    //make async call with arrow fucntion format.
    await mongoose.connect(this.uri, { useNewUrlParser: true, useUnifiedTopology: true }).then((MongooseNode) => {
      const nativeConnection = MongooseNode.connections[0];
      // connection established - use the Admin object grabbed above in the require
      new Admin(nativeConnection.db).listDatabases((err, result) => {
        console.log("Successfully Connected to MongDB - bookshelf");
      });
    });
  }
}

initUserSchema.initialiseUserSchema();
initLocSchema.initialiseLocationSchema();
initBookSchema.initialiseBookSchema();

module.exports = MongoDB;
