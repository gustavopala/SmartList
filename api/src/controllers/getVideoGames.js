const { Videogame, Genre } = require('../db');
const axios = require('axios');
const { infoClean, dbClean } = require('../utils/index');
const { Op } = require('sequelize');
require('dotenv').config();
const { URL, APIKEY } = process.env;

const getVideoGames = async (req, res) => {
  try {
    const { search } = req.query;
    let gamesApi = [];
    let gamesDbClean = [];

    if (search) {
      const [apiResponse, dbResponse] = await Promise.all([
        axios.get(`${URL}?search={${search}}&key=${APIKEY}`),
        Videogame.findAll({
          where: { name: { [Op.iLike]: `%${search}%` },deleted: false },
          include: Genre,
          
        })
      ]);
      //api
      const apiGames = infoClean(apiResponse.data.results);
      const apiFilter = apiGames.filter(game => game.name.toLowerCase() === search.toLowerCase());
      gamesApi = gamesApi.concat(apiFilter);
      const apiNoExacto = apiGames.filter(game => game.name.toLowerCase() != search.toLowerCase())
      gamesApi = gamesApi.concat(apiNoExacto);
      //db
      const dbGames = dbClean(dbResponse);
      gamesDbClean = gamesDbClean.concat(dbGames);
    } else {
      const apiRequests = [];
      for (let page = 1; page <= 5; page++) {
        apiRequests.push(axios.get(`${URL}?key=${APIKEY}&page=${page}`));
      }
      const apiResponses = await Promise.all(apiRequests);
      const apiGames = apiResponses.reduce((games, response) => {
        return games.concat(infoClean(response.data.results));
      }, []);
      gamesApi = gamesApi.concat(apiGames);

      const dbResponse = await Videogame.findAll({
        where: { deleted: false },
        include: Genre,
      });
      const dbgames = dbClean(dbResponse)
      gamesDbClean = gamesDbClean.concat(dbgames);
    }

    const response = [...gamesDbClean, ...gamesApi].slice(0, 100);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getVideoGames;