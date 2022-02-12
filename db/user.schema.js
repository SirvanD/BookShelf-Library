const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  fullname: String,
  email: String,
  address: String,
  latlng: { lat: Number, lng: Number },
  password: String,
});

const User = mongoose.model("users", userSchema);

//GET USER MODEL
const getUserModel = () => new User();

//MODEL FUNCTIONS
const initialiseUserSchema = async function () {
  const strInitialiser = "first_record";
  const document = new User();
  const dbInitialised = await User.exists({ fullname: strInitialiser }, function (err, records) {
    if (!records) {
      document._id instanceof mongoose.Types.ObjectId;
      (document.fullname = strInitialiser),
        (document.email = strInitialiser),
        (document.address = strInitialiser),
        (document.latlng = { lat: 0, lng: 0 }),
        (document.password = strInitialiser),
        document.save((err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("User schema first record created");
          }
        });
    } else {
      console.log("db schema has been run once @ first record");
    }
  });
  //if the schema has been run at least once before to instantiate the chamea model in the db - then add records,
};

module.exports = {
  userSchema,
  initialiseUserSchema,
  User,
  getUserModel,
};
