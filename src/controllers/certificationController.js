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
        .send({ response, message: "Project created sucessfully" });
    } catch (error) {
      res.status(500).send({ error: error });
    }
  },
};

module.exports = certificationController;
