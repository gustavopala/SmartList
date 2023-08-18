const { Videogame} = require('../db');

const deleteGames = async (req, res) => {
    const { id } = req.params;
    try {
        const videogame = await Videogame.findByPk(id);
        if (!videogame) {
            return res.status(404).send('Videogame no existe');
        } else {
            await videogame.update({ deleted: true });
            res.status(200).json({message:'Videogame borrado con exito'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = deleteGames;