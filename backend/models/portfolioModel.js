const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  professionSpan: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema({
  lottieUrl: {
    type: String,
    required: true,
  },
  paragraph1: {
    type: String,
    required: true,
  },
  paragraph2: {
    type: String,
    required: true,
  },
});

const experienceSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const educationSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const projectsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  tags: [{ type: String }], 
  imgUrl: { type: String, required: true },
  projectLink: { type: String, required: true },
  githubLink: { type: String, required: true },
});

const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  whatsapp: {
    type: String,
    required: true,
  },
  facebook: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
});

module.exports = {
  Intro: mongoose.model("Intro", introSchema),
  About: mongoose.model("About", aboutSchema),
  Experience: mongoose.model("Experience", experienceSchema),
  Education: mongoose.model("Education", educationSchema),
  Projects: mongoose.model("Projects", projectsSchema),
  Contact: mongoose.model("Contact", contactSchema),
};
