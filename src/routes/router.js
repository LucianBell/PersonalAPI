const router = require("express").Router();

// Project route
const projectRouter = require("./projects");

// Certification route
const certificationRouter = require("./certifications");

router.use("/", projectRouter);
router.use("/", certificationRouter);

module.exports = router;
