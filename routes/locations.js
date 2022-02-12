const express = require("express");
const router = express.Router();
const locController = require("../controllers/locController");

//if a user returns to home - use their home address lat lng as book lat lng
//if a user returns to a cafe - use the cafe lat lng as book lat lng
//if a user returns to street library - use library lat lng for book lat lng

//get all books within lat lng range
router.get("/books", locController.books_list_get);

//pass in cafe name as query string and return its deatils including latlng
//?cafe={name}
//?library={name}
router.get("/details", locController.location_details_get);

//get all map markers - cafes and libraries within map viewport
router.get("/markers", locController.markers_get);

router.get("/bulkload", locController.bulk_marker_post);

module.exports = router;
