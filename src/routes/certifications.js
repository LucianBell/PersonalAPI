const router = require("express").Router();

const certificationController = require("../controllers/certificationController");

//endpoints
router
  .route("/certifications")
  .post((req, res) => certificationController.create(req, res));

router
  .route("/certifications")
  .get((req, res) => certificationController.getAll(req, res));

router
  .route("/certifications/:id")
  .get((req, res) => certificationController.get(req, res));

router
  .route("/certifications/:id")
  .delete((req, res) => certificationController.delete(req, res));

router
  .route("/certifications/:id")
  .put((req, res) => certificationController.update(req, res));

module.exports = router;
