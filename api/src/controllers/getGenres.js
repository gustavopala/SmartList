const { Genre } = require('../db');
const axios = require('axios');
const { genreClean } = require('../utils/index')
require('dotenv').config();
const { URLGENRE, APIKEY } = process.env;

const getGenres = async (req, res) => {
    try {
        const dataGenres = (await axios.get(`${URLGENRE}?key=${APIKEY}`)).data.results;
        const genres = genreClean(dataGenres);
        const newGenres = await Genre.bulkCreate(genres);
        res.status(200).json(newGenres);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = getGenres;