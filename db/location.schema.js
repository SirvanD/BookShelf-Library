const mongoose = require("mongoose");
const { Schema } = mongoose;

const locationsSchema = new Schema(
  {
    loc_id: mongoose.Types.ObjectId,
    latlng: {
      lat: mongoose.Types.Decimal128,
      lng: mongoose.Types.Decimal128,
    },
    type: String,
    name: String,
  },
  { strict: false }
);

const Locations = mongoose.model("locations", locationsSchema);

//GET BOOK MODEL
const getLocationsModel = () => new Locations();

//MODEL FUNCTIONS
const initialiseLocationSchema = async function () {
  const strInitialiser = "first_record";
  const document = new Locations();
  const dbInitialised = await Locations.exists({}, function (err, records) {
    if (!records) {
      document.loc_id instanceof mongoose.Types.ObjectId;
      (document.name = strInitialiser), (document.type = strInitialiser), (document.latlng = { lat: 0.0, lng: 0.0 });
      document.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Location schema created and dummy first doc inserted");
        }
      });
    } else {
      console.log("db location schema has been run once @ first record");
    }
  });
  //if the schema has been run at least once before to instantiate the chamea model in the db - then add records,
};

module.exports = {
  locationsSchema,
  initialiseLocationSchema,
  getLocationsModel,
};
