const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserModel = require("../db/user.schema");

class User {
  constructor() {
    (this.fullname = ""), (this.email = ""), (this.address = ""), (this.latlng = { lat: 0, lng: 0 }), (this.password = "");
  }
}

const NewUser = mongoose.model("users", UserModel.userSchema);

async function get_user_details({ userEmail, userPassword }) {
  const result = await NewUser.findOne({
    email: userEmail,
    password: userPassword,
  }).exec();

  return { success: !!result, user: result };
}

async function add_user(user) {
  const document = new NewUser(user);
  return await document.save();
}

async function get_all_users() {
  return await NewUser.find().exec();
}
module.exports = {
  User,
  add_user,
  get_user_details,
  get_all_users,
};
