const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    appoinment: {
      type: Schema.Types.ObjectId,
      ref: "Appoinment",
    },
    covidappoinment: {
      type: Schema.Types.ObjectId,
      ref: "Appoinment",
    },
    appoinmentType: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
