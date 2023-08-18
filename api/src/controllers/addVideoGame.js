const { Videogame, Genre } = require('../db');

const addVideoGame = async (req, res) => {
  try {
    let newgame;
    const { name, description, released, background_image, background_image_additional, rating, parent_platforms, genre } = req.body;
    const game = await Videogame.findOne({ where: { name: name } });
    if (game) {
      throw new Error("El juego ya existe!");
    } else {

      newgame = await Videogame.create({ name, description, released, background_image, background_image_additional, rating, parent_platforms });
    }
    if (typeof genre === 'object') {
      await Promise.all(genre.map(async (genreId) => {
        const genreObj = await Genre.findOne({ where: { id: genreId } });
        if (genreObj) {
          await newgame.addGenre(genreObj);
        } else {
          throw new Error("El género no existe");
        }
      }));
    } else {
      const genreObj = await Genre.findOne({ where: { id: genre } });
      if (genreObj) {
        await newgame.addGenre(genreObj);
      } else {
        throw new Error("El género no existe");
      }
    }
    res.status(200).send(`Video juego ${name} agregado con exito`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = addVideoGame;
