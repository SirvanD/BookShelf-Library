const books = require("../model/books");
const { borrowBook } = require("./../model/userBooks");

//GET search for books
exports.books_list_get = async function (req, res) {
  const result = await books.list_books(req.body);
  res.send(result, 201);
};

//GET a particular book
exports.book_details_get = function (req, res) {
  res.send("Get a particular user using email address.");
};

//GET a particular book
exports.book_borrow_post = function (req, res) {
  const { bookId, userId } = req.body;
  // If book is available
  // Mark it as lent
  // Insert a record to user_books
  borrowBook({ bookId, userId });
  res.send("Borrow a book");
};

//POST donate book
exports.create_book_post = async function (req, res) {
  const result = await books.donate_book(req.body);
  res.send(result, 201);
};

//POST bulk upload
exports.insert_bulk_post = async function (req, res) {
  const result = await books.create_bulk_books(req.body);
  res.send(result, 201);
};
