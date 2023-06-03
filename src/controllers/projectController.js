const { Project: projectSchema } = require("../models/Project");

const projectController = {
  create: async (req, res) => {
    try {
      const project = {
        image: req.body.image,
        title: req.body.title,
        languages: req.body.languages,
        codeLink: req.body.codeLink,
      };

      const response = await projectSchema.create(project);

      res
        .status(201)
        .json({ response, message: "Project registered sucessfully!" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  getAll: async (req, res) => {
    try {
      const projects = await projectSchema.find();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};

module.exports = projectController;
