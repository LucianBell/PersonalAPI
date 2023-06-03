const router = require("express").Router();

const projectController = require("../controllers/projectController");

//Endpoint
router
  .route("/projects")
  .post((req, res) => projectController.create(req, res));

router.route("/projects").get((req, res) => projectController.getAll(req, res));

module.exports = router;
