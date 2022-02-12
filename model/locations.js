const mongoose = require("mongoose");
const { Schema } = mongoose;
const locSchema = require("../db/location.schema");
const bookSchema = require("../db/book.schema");

const Location = mongoose.model("locations", locSchema.locationsSchema);
const Books = mongoose.model("books", bookSchema.bookSchema);

async function get_all_books_in_map(query) {
  let lattop = query.lattop;
  let latbottom = query.latbottom;
  let lngtop = query.lngtop;
  let lngbottom = query.lngbottom;
  console.log(lattop);
  return await Books.find({
    $and: [{ "latlng.lat": { $lt: lattop } }, { "latlng.lat": { $gt: latbottom } }, { "latlng.lng": { $lt: lngtop } }, { "latlng.lng": { $gt: lngbottom } }],
  }).exec();
}

async function get_visible_locations(query) {
  let lattop = query.lattop;
  let latbottom = query.latbottom;
  let lngtop = query.lngtop;
  let lngbottom = query.lngbottom;
  console.log(lattop);
  return await Location.find({
    $and: [{ "latlng.lat": { $lt: lattop } }, { "latlng.lat": { $gt: latbottom } }, { "latlng.lng": { $lt: lngtop } }, { "latlng.lng": { $gt: lngbottom } }],
  }).exec();
}

async function bulk_locations_load() {
  return await Location.insertMany(bulkRecords);
}

const bulkRecords = [
  {
    latlng: {
      lat: -33.32739134988233,
      lng: 115.65445685513589,
    },
    name: "the happy wife cafe",
    type: "cafe",
  },
  {
    latlng: {
      lat: -33.32491713396599,
      lng: 115.64156079460017,
    },
    name: "waters edge cafe",
    type: "cafe",
  },
  {
    latlng: {
      lat: -33.3258315262728,
      lng: 115.63984418093456,
    },
    name: "the corners club",
    type: "cafe",
  },
  {
    latlng: {
      latlng: {
        lat: -33.33194515779361,
        lng: 115.64003729969525,
      },
      name: "coffee & flower",
      type: "cafe",
    },
    latlng: {
      lat: -33.33759226614769,
      lng: 115.6408526911981,
    },
    name: "the butchers cafe",
    type: "cafe",
  },
  {
    latlng: {
      lat: -33.35571432159472,
      lng: 115.67733073424233,
    },
    name: "paper route",
    type: "cafe",
  },
  {
    latlng: {
      lat: -33.318498188363684,
      lng: 115.63913607770917,
    },
    name: "corners on the bay",
    type: "cafe",
  },
  {
    latlng: {
      lat: -33.32572395113996,
      lng: 115.6301882282056,
    },
    name: "the backbeach",
    type: "cafe",
  },
  {
    latlng: {
      lat: -33.31595199517557,
      lng: 115.63859963561525,
    },
    name: "vat2",
    type: "cafe",
  },
  {
    latlng: {
      lat: -33.35397397734341,
      lng: 115.62625962191505,
    },
    name: "south bunbury street library",
    type: "library",
  },
  {
    latlng: {
      lat: -33.36949423579122,
      lng: 115.63057261371739,
    },
    name: "westwood street library",
    type: "library",
  },
  {
    latlng: {
      lat: -33.398018480958434,
      lng: 115.61879235174086,
    },
    name: "lawson street library",
    type: "library",
  },
  {
    latlng: {
      lat: -33.399451613178115,
      lng: 115.61574536308454,
    },
    name: "books on blaxland",
    type: "library",
  },
  {
    latlng: {
      lat: -33.33533167213347,
      lng: 115.69106179135763,
    },
    name: "lantana street library",
    type: "library",
  },
  {
    latlng: {
      lat: -33.31948257505916,
      lng: 115.69282132141448,
    },
    name: "pelican point books",
    type: "library",
  },
  {
    latlng: {
      lat: -33.31471373380045,
      lng: 115.63539678675977,
    },
    name: "lumper street library",
    type: "library",
  },
  {
    latlng: {
      lat: -33.27999073174437,
      lng: 115.7148368929671,
    },
    name: "benessee",
    type: "cafe",
  },
];

module.exports = {
  get_all_books_in_map,
  bulk_locations_load,
  get_visible_locations,
};
