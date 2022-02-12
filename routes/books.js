const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const userBookController = require("../controllers/userBookController");

router.post("/donate", bookController.create_book_post);

router.get("/list", bookController.books_list_get);

router.post("/borrow", bookController.book_borrow_post);

router.put("/return", userBookController.return_books);

router.get("/details", bookController.book_details_get);

router.post("/bulk_load", bookController.insert_bulk_post);

module.exports = router;
