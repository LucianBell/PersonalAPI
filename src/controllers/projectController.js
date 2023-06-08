const { Project: projectSchema, Project } = require("../models/Project");

const projectController = {
  create: async (req, res) => {
    try {
      const project = {
        image: req.body.image,
        title: req.body.title,
        languages: req.body.languages,
        codeLink: req.body.codeLink,
        isDeployed: req.body.isDeployed,
        deployedLink: req.body.deployedLink,
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
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const project = await projectSchema.findById(id);

      if (!project) {
        res.status(404).json({ message: "Project not found" });
        return;
      }
      res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const project = await projectSchema.findById(id);

      if (!project) {
        res.status(404).json({ message: "Project not found" });
      }

      const deletedProject = await projectSchema.findByIdAndDelete(id);
      res
        .status(200)
        .json({ deletedProject, message: "Project deleted sucessfully" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const project = {
        image: req.body.image,
        title: req.body.title,
        languages: req.body.languages,
        codeLink: req.body.codeLink,
        isDeployed: req.body.isDeployed,
        deployedLink: req.body.deployedLink,
      };

      const updatedProject = await projectSchema.findByIdAndUpdate(id, project);

      if (!updatedProject) {
        res.status(404).json({ error: "Project not found" });
      }

      res.status(200).json({ project, message: "Project updated sucessfully" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};

module.exports = projectController;
