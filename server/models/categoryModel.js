import mongoose from "mongoose"; 

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, default: "" },
    type: {
      type: String,
      default: "general",
    },
    icon: {
      type: String,
      default: "",
    },


    image: { type: String, default: "" },
    subcategories: [{ type: Schema.Types.ObjectId, ref: "Subcategory" }],
    // One category can have many products
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        default: null,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
