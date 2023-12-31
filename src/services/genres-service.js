const { Genres } = require("../database/models");
const Sequelize = require("sequelize");

module.exports = {
    getAllGenres: () => {
        return Genres.findAll();
    },
    getGenresDetail: (id) => {
        return Genres.findByPk(id);
    }
};