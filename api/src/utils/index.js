const {Genre} = require('../db');
const axios = require('axios');
require('dotenv').config();
const {URLGENRE, APIKEY} = process.env;

const getGenres = async () =>{

        const dataGenres = (await axios.get(`${URLGENRE}?key=${APIKEY}`)).data.results;
        const genres = genreClean(dataGenres);
        const newGenres = await Genre.bulkCreate(genres);
  
}

const infoClean = (arr) =>
    arr.map(game=>{
        return{
            id:game.id,
            name:game.name,
            released:game.released,
            background_image:game.background_image,
            rating:game.rating,
            genres:game.genres.map(genre =>genre.name),
            parent_platforms:game.parent_platforms.map(platform => platform.platform.name)
        }
})
const dbClean = (arr) =>
    arr.map(game=>{
        return{
            id:game.id,
            name:game.name,
            released:game.released,
            background_image:game.background_image,
            rating:game.rating,
            genres:game.genres.map(genre =>genre.name),
            parent_platforms:game.parent_platforms
        }
})
const infoDetailClean = (game) =>{
        return{
            id:game.id,
            name:game.name,
            description: game.description,
            released:game.released,
            background_image:game.background_image,
            background_image_additional: game.background_image_additional,
            rating:game.rating,
            genres:game.genres.map(genre =>genre.name),
            parent_platforms:game.parent_platforms.map(platform => platform.platform.name),
        }
    }
    const infoDetailCleanDb = (game) =>{
        return{
            id:game.id,
            name:game.name,
            description: game.description,
            released:game.released,
            background_image:game.background_image,
            background_image_additional: game.background_image_additional,
            rating:game.rating,
            genres:game.genres.map(genre =>genre.name),
            parent_platforms:game.parent_platforms
        }
    }
const genreClean = (arr) => 
    arr.map(genre=>{
        return{
            id:genre.id,
            name:genre.name
        }
   
 })

module.exports = {getGenres,infoClean,genreClean,infoDetailClean,dbClean,infoDetailCleanDb};