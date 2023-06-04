const router = require("express").Router();

const certificationController = require("../controllers/certificationController");

//endpoints
router
  .route("/certifications")
  .post((req, res) => certificationController.create(req, res));
