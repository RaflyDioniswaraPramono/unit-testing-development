const fs = require("fs");

("use strict");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const parseSeeds = JSON.parse(fs.readFileSync("./seeds.json"));
    const moviesData = [];

    parseSeeds.map((parseSeed) => {
      const { id, title, genres } = parseSeed;

      moviesData.push({
        id: id,
        title: title,
        genres: genres,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    await queryInterface.bulkInsert("Movies", moviesData, {});
  },  

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Movies", null, {});
  },
};
