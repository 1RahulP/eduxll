// generate courses schema
import mongoose, { Schema } from "mongoose";

const CourseModuleSchema = new Schema({
  id: { type: Number },
  modulTitle: { type: String, trim: true },
  modulDescription: { type: String, trim: true },
});

const customCategorySchema = new mongoose.Schema({
  value: {
    type: String,
  },
  label: {
    type: String,
  },
});

const featureCategorySchema = new mongoose.Schema({
  value: {
    type: String,
  },
  label: {
    type: String,
  },
});

const CourseBranchSchema = new mongoose.Schema({
  value: {
    type: String,
  },
  label: {
    type: String,
  },
});



const coursesSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  duration: {
    type: String,
    required: true,
    default: "",
  },

  description: {
    type: String,
    required: true,
    trim: true,
  },

  certificateDescription: {
    type: String,
    required: true,
    trim: true,
  },

  metaTitle: {
    type: String,
    required: true,
    trim: true,
  },

  metaDescription: {
    type: String,
    required: true,
    trim: true,
  },

  price: {
    type: Number,
  },

  courseImage: {
    type: String,
    default: "",
  },

  brochure: {
    type: String,
    default: "",
  },

  certificate: {
    type: String,
    default: "",
  },

  courseModule: {
    type: [CourseModuleSchema],
    default: [],
  },

  customCategory: {
    type: [customCategorySchema],
    default: [],
  },

  courseBranch: {
    type: [CourseBranchSchema],
    default: [],
  },

  featureCategoryInsert: {
    type: [featureCategorySchema],
    default: [],
  },
});

const Courses =
  mongoose?.models?.courses || mongoose.model("courses", coursesSchema);

export default Courses;
