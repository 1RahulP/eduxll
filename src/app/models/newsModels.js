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
  content: {
    type: String,
    required: [true, "Please provide a content"],
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
  mtitle: {
    type: String,
    required: [true, "Please provide a meta title"],
  },
  mdescription: {
    type: String,
    required: [true, "Please provide a meta description"],
  },
});

const News = mongoose?.models?.news || mongoose.model("news", NewsSchma);
export default News;
