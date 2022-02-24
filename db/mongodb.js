const mongoose = require("mongoose"),
  Admin = mongoose.mongo.Admin;
const initUserSchema = require("./user.schema");
const initBookSchema = require("./book.schema");

//mongoDB Class
class MongoDB {
  constructor() {
    this.url = `mongodb+srv://${process.env.BOOKSHELF_UID}:${process.env.BOOKSHELF_PWD}@bookshelf.rmtrd.mongodb.net/bookshelf?retryWrites=true&w=majority`;
  }

  //connect to MongoDB Atlas Instance
  async connect() {
    console.log(this.url);
    //make async call with arrow function format.
    await mongoose
      .connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then((MongooseNode) => {
        const nativeConnection = MongooseNode.connections[0];
        // connection established - use the Admin object grabbed above in the require
        new Admin(nativeConnection.db).listDatabases((err, result) => {
          console.log("Successfully Connected to MongDB - bookshelf");
        });
      });
  }
}

initUserSchema.initialiseUserSchema();
initBookSchema.initialiseBookSchema();

module.exports = MongoDB;
