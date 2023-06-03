import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema({
  id: { type: Number },
  image: { type: String },
  title: { type: String },
  description: { type: String },
  languages: [
    {
      name: String,
      icon: String,
    },
  ],
  codeLink: { type: String },
});
