const {Videogame, Genre} = require('../db');
const axios = require('axios');
const {infoDetailClean,infoDetailCleanDb} = require('../utils/index')
require('dotenv').config();
const {URL, APIKEY} = process.env;

const getVideoGame = async (req,res) =>{
    try{
        const {id} = req.params;
        const sourse= isNaN(id)? 'bdd':'api';
        const infoDetail = sourse === 'api'? (await axios.get(`${URL}/${id}?key=${APIKEY}`)).data 
        : await Videogame.findOne({
            where: { id, deleted: false },
            include: Genre,
        });
        if(!infoDetail){
            throw new Error("El juego no existe");
        }
        const response = sourse === "api"? infoDetailClean(infoDetail):infoDetailCleanDb(infoDetail);
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

module.exports = getVideoGame;