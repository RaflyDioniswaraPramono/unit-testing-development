const { Movie } = require("../models");

class MovieController {

  static async createMovie(req, res) {
    try {
      const { id, title, genres } = req.body;

      const result = await Movie.create({
        id: id,
        title: title,
        genres: genres,
        createdAt: new Date(),
        updateAt: new Date()
      })

      res.status(200).json({ status_text: "OK", payloads: result });
    } catch (error) {
      console.log(error);
    }
  }

  static async getMovies(req, res) {
    try {
      const result = await Movie.findAll();

      res.status(200).json({ status_text: "OK", payloads: result });
    } catch (error) {
      console.log(error);
    }
  }

  static async getMovieDetail(req, res) {
    try {
      const id = req.params.id;

      const result = await Movie.findAll({
        where: {
          id: id,
        },
      });

      res.status(200).json({ status_text: "OK", payloads: result });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateMovie(req, res) {
    try {
      const { id, title, genres } = req.body;

      const result = await Movie.update(
        {
          title: title,
          genres: genres,
          updatedAt: new Date(),
        },
        {
          where: {
            id: id,
          },
        }
      );

      res.status(200).json({ status_text: "OK", payloads: result });
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteMovie(req, res) {
    try {
      const id = req.params.id;

      await Movie.destroy({
        where: {
          id: id
        }
      })
    } catch (error) {
      
    }
  }
}

module.exports = { MovieController };
