const { default: mongoose } = require("mongoose");
const {
  Certification: certificationSchema,
  Certification,
} = require("../models/Certification");

const certificationController = {
  create: async (req, res) => {
    try {
      const certification = {
        image: req.body.image,
        title: req.body.title,
        origin: req.body.origin,
        link: req.body.link,
      };

      const response = await certificationSchema.create(certification);

      res
        .status(201)
        .send({ response, message: "Certification registered sucessfully" });
    } catch (error) {
      res.status(500).send({ error: error });
    }
  },
  getAll: async (req, res) => {
    try {
      const certifications = await certificationSchema.find();
      res.status(200).send({ certifications });
    } catch (error) {
      res.status(500).send({ error: error });
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const certification = await certificationSchema.findById(id);

      if (!certification) {
        res.status(404).json({ message: "Certification not found" });
        return;
      }
      res.status(200).json(certification);
    } catch (error) {
      res.status(500).send({ error: error });
    }
  },
};

module.exports = certificationController;
