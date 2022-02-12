const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    book_id: mongoose.Types.ObjectId,
  },
  { strict: false }
);

const Books = mongoose.model("books", bookSchema);

//GET BOOK MODEL
const getBookModel = () => new User();

//MODEL FUNCTIONS
const initialiseBookSchema = async function () {
  const strInitialiser = "first_record";
  const document = new Books();
  const dbInitialised = await Books.exists({}, function (err, records) {
    if (!records) {
      document._id instanceof mongoose.Types.ObjectId;
      document.GoogleBookInfo = { initialise_collection: strInitialiser };
      document.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Book schema created and dummy first doc inserted");
        }
      });
    } else {
      console.log("db book schema has been run once @ first record");
    }
  });
  //if the schema has been run at least once before to instantiate the chamea model in the db - then add records,
};

module.exports = {
  bookSchema,
  initialiseBookSchema,
  Books,
  getBookModel,
};
