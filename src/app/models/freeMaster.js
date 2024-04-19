import mongoose from "mongoose";

const FreeMasterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  ylink: {
    type: String,
    required: [true, "Please provide a ylink"],
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
  date: {
    type: String,
    required: [true, "Please provide a date"],
  },
  time: {
    type: String,
    required: [true, "Please provide a time"],
  },
  featureImage: {
    type: String,
  },
  category: {
    type: String,
  },
  images: {
    type: String,
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

const FreeMaster =
  mongoose?.models?.freemaster ||
  mongoose.model("freemaster", FreeMasterSchema);
export default FreeMaster;