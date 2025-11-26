import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// User schema for authentication and role management
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // User name
    email: { type: String, required: true, unique: true }, // Unique login email
    password: { type: String, required: true }, // Hashed password
    role: { type: String, enum: ["admin"], default: "admin" } // User role
  },
  { timestamps: true }
);

// Hash password before saving user
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare entered password with stored hash
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("User", userSchema);
