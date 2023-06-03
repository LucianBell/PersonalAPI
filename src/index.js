const express = require("express");

const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

app.get("/projects", (req, res) => {
  res.send("Testing");
});
