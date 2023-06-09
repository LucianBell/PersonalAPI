const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    languages: {
      type: String,
      required: true,
    },
    codeLink: { type: String, required: true },
    isDeployed: { type: Boolean, required: true },
    deployedLink: { type: String },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = {
  Project,
};
