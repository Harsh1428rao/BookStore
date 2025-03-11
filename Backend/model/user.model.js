import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },  // ✅ Fix: Changed 'name' to 'fullname'
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  });
  

// Hash password before saving
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

const User = mongoose.model("User", userSchema);
export default User;
