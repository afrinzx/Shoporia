import mongoose from "mongoose"; 

const vendorSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    shopName: { type: String, required: true },
    location: {
      mapLocation: { type: String },
      latitude: { type: Number },
      longitude: { type: Number },
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    balance: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["approved", "pending", "suspended"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vendor", vendorSchema);