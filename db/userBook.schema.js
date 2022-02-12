const mongoose = require("mongoose");
const { Schema } = mongoose;

const userBookSchema = new Schema(
  {
    book_id: mongoose.Types.ObjectId,
    user_id: mongoose.Types.ObjectId,
    borrow_date: Date,
    return_date: Date,
  },
  { strict: false }
);

const UserBooks = mongoose.model("user_books", userBookSchema);

module.exports = {
  userBookSchema,
  UserBooks,
};
