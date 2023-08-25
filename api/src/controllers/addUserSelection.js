const { User, UserSelection, Recipe } = require('../db'); // Ajusta la ruta según tu estructura de archivos

// Controlador para crear una nueva selección de recetas para un usuario
const addUserSelection = async (req, res) => {
  try {
    const { userId, recipes, selectionName, people } = req.body;

    // Busca al usuario por su ID
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Busca los nombres de las recetas correspondientes a los IDs en la tabla Recipe
    const recipeNames = await Recipe.findAll({
      attributes: ['recipe_id', 'name'],
      where: {
        recipe_id: recipes
      }
    });

    // Crea una nueva selección de recetas y la asocia al usuario
    const selection = await UserSelection.create({
      selection_name: selectionName,
      user_id: userId,
      number_of_people: people,
      recipes: recipes
    });

    // Asocia los nombres de las recetas a la selección creada
    await selection.setRecipes(recipeNames);

    return res.status(201).json({ message: 'Selección creada exitosamente', selection });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error del servidor' });
  }
}

module.exports = addUserSelection;

