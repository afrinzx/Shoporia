import mongoose from "mongoose"; // Erase if already required

const productSchema = new mongoose.Schema(
  {
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor", required: true },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    subcategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Subcategory" },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    specialDiscount: {
      isDiscounted: { type: Boolean, default: false },
      discountType: {
        type: String,
        enum: ["percentage", "flat"],
        default: "percentage",
      },
      value: { type: Number, default: 0 },
      validUntil: { type: Date },
    },
    stock: { type: Number, default: 0 },
    images: [String],
    description: { type: String, default: "" },
    rating: { type: Number, default: 0 },
    reviews: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        comment: String,
        rating: Number,
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);