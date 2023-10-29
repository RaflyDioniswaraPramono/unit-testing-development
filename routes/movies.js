const express = require("express");
const { MovieController } = require("../controllers/movies.controller");

const router = express.Router();

router.post("/movies", MovieController.createMovie);
router.get("/movies", MovieController.getMovies);
router.get("/movies/:id", MovieController.getMovieDetail);
router.put("/movies", MovieController.updateMovie);
router.delete("/movies/:id", MovieController.deleteMovie);

module.exports = router;