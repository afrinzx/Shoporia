import mongoose from "mongoose"; 

const subcategorySchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    name: { type: String, required: true },
    type: {
      type: String,
      default: "general",
    },
    icon: {
      type: String,
      default: "",
    },


    description: { type: String, default: "" },
    image: { type: String, default: "" },
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


module.exports = mongoose.model("Subcategory", subcategorySchema);
