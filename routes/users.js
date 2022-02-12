const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userBookController = require("../controllers/userBookController");

router.post("/add", userController.create_user_post);

router.get("/list", userController.user_list_get);

router.get("/details", userController.user_details_get);

router.get("/userBooks", userBookController.get_userBooks);

router.get("/all", userController.users_all_get);

module.exports = router;
