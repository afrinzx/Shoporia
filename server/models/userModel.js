import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    token_id: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: {
      type: String,
      enum: ["customer", "vendor", "admin"],
      default: "customer",
    },
    cart: {
      type: Array,
      default: [],
    },
    address: { type: String },
    //[{ type: mongoose.Schema.Types.ObjectID, ref: "Address" }],
    wishlist: [{ type: mongoose.Schema.Types.ObjectID, ref: "Product" }],
    refreshToken: { type: String },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    phone: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
