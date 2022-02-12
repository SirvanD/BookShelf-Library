const express = require("express");
const router = express.Router();
const userBookController = require("../controllers/userBookController");

router.get("./userBooks", userBookController.get_userBooks);
