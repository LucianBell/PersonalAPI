const router = require("express").Router();

const projectController = require("../controllers/projectController");

//Endpoint
router
  .route("/projects")
  .post((req, res) => projectController.create(req, res));

module.exports = router;
