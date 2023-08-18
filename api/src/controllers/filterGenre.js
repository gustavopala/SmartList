const {Videogame,Genre} = require('../db');
const axios = require('axios');
const {infoClean,dbClean} = require('../utils/index');
require('dotenv').config();
const {URL, APIKEY} = process.env;

const filterVideoGame = async (req, res) => {
  try {
      const { genre } = req.params;
      const apiCalls = [];
      for (let page = 1; page <= 5; page++) { 
          apiCalls.push(axios.get(`${URL}?key=${APIKEY}&page=${page}`));
      }
      const apiResponses = await Promise.all(apiCalls);
      const apiGames = apiResponses.flatMap(response => infoClean(response.data.results));
      const apiGamesFiltered = apiGames.filter(game => game.genres.includes(genre));
      const dbResponse = await Videogame.findAll({ include: Genre });
      const gamesDb = dbClean(dbResponse);
      const gamesDbFiltered = gamesDb.filter(game => game.genres.includes(genre));
      const response = [...gamesDbFiltered, ...apiGamesFiltered].slice(0, 20);
      res.status(200).json(response);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

  module.exports = filterVideoGame;