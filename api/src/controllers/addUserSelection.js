const { User, UserSelection } = require('../db'); // Ajusta la ruta según tu estructura de archivos

// Controlador para crear una nueva selección de recetas para un usuario
const addUserSelection = async (req, res) => {
  try {
    const { userId, recipes, selectionName, people } = req.body;

    // Busca al usuario por su ID
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Crea una nueva selección de recetas y la asocia al usuario
    console.log(userId);
    const selection = await UserSelection.create({
        selection_name: selectionName,
        user_id: userId, // Usa user_id en lugar de UserId
        number_of_people: people,
        recipes: JSON.stringify(recipes)
      });

    return res.status(201).json({ message: 'Selección creada exitosamente', selection });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error del servidor' });
  }
}

module.exports = addUserSelection;