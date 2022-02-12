const locations = require("../model/locations");

//get all books within lat lng range
exports.books_list_get = async function (req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  console.log(req.query);
  const result = await locations.get_all_books_in_map(req.query);
  res.send(result, 201);
};

//pass in cafe name as query string and return its deatils including latlng
//?cafe={name}
//?library={name}
exports.location_details_get = function () {
  return "loc details get";
};
//get all map markers - cafes and libraries within map viewport

exports.markers_get = async function (req, res) {
  console.log(req.query);
  const result = await locations.get_visible_locations(req.query);
  if (result) res.send(result);
  else res.send(result, 401);
};

exports.bulk_marker_post = async function (req, res) {
  const result = await locations.bulk_locations_load();
  res.send(result, 201);
};
