const { UserSelection, Recipe } = require('../db');

const getUserSelection = async (req, res) => {
  const userId = req.params.userId;
  try {
    const userSelections = await UserSelection.findAll({
      where: {
        user_id: userId
      },
      include: [
        {
          model: Recipe,
          attributes: ['name'] // Aquí puedes especificar los atributos del ingrediente que deseas obtener
        }
      ] 
    });
    return res.status(200).json({ userSelections });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error del servidor' });
  }
};

module.exports = getUserSelection;