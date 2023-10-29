const express = require("express");
const moviesRoutes = require("./movies");

const router = express.Router();

router.get("/api/v1/", (req, res) => {
  res.status(200).json({
    message: "API on and running!"
  })
})

router.use("/api/v1", moviesRoutes);

module.exports = router;