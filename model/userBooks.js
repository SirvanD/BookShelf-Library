//Require Mongoose
var mongoose = require("mongoose");
var { Schema, Query } = mongoose;
const { userBookSchema } = require("../db/userBook.schema");
const { BookModel } = require("./books");

// Compile model from schema
const UserBooksModel = mongoose.model("user_books", userBookSchema);

async function borrowBook({ bookId, userId }) {
  // Insert record to userBooks
  const record = { book_id: bookId, user_id: userId, borrow_date: new Date() };
  const document = new UserBooksModel(record);
  await document.save();

  // Mark the book as unavailable
  return await BookModel.updateOne(
    { _id: bookId },
    { status: "unavailable" }
  ).exec();
}

async function returnBook({ bookId, userId }) {
  console.log("user and book" + userId + bookId);
  const result = await UserBooksModel.updateOne(
    {
      user_id: userId,
      book_id: bookId,
      return_date: undefined,
    },
    { return_date: new Date() }
  ).exec();

  return await BookModel.updateOne(
    { _id: bookId },
    { status: "available" }
  ).exec();
}

async function list_userBooks({ userId }) {
  console.log("userId", userId);
  const result = await UserBooksModel.find({
    user_id: userId,
    return_date: undefined,
  }).exec();
  console.log("list of userbooks", result);
  return result;
}

module.exports = { borrowBook, list_userBooks, returnBook, UserBooksModel };
