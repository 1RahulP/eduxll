// generate courses schema
const coursesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default: "",
  },
  category: {
    type: String,
    required: true,
    default: "",
  },
});

module.exports = coursesSchema;