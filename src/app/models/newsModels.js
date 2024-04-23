import mongoose from "mongoose";

const NewsSchma = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  slug: {
    type: String,
    required: { true: "Please provide a slug" },
    unique: true,
  },
  featureImage: {
    type: String,
  },
  category: {
    type: String,
  },
  images: {
    type: [String],
  },
  link: {
    type: String,
    required: [true, "Please provide a meta link"],
  },
});

const News = mongoose?.models?.news || mongoose.model("news", NewsSchma);
export default News;
