const mongoose = require("mongoose");
const { Schema } = mongoose;

const certificationSchema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    origin: {
      type: String,
      required: true,
    },
    date: { type: Date, default: Date.now },
    link: { type: String, required: true },
    stared: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Certification = mongoose.model("Certification", certificationSchema);

module.exports = {
  Certification,
};
