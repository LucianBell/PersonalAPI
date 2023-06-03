const router = require("express").Router();

// Project route
const projectRouter = require("./projects");

router.use("/", projectRouter);

module.exports = router;
