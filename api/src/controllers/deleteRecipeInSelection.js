const { UserSelection } = require('../db');

const deleteRecipeInSelection = async (req, res) => {
  const selectionId = req.params.selectionId;
  const recipeId = parseInt(req.params.recipeId); // Convertir a entero

  try {
    // Buscar la selección de recetas específica del usuario
    const userSelection = await UserSelection.findOne({
      where: {
        selection_id: selectionId
      }
    });

    if (!userSelection) {
      return res.status(404).json({ message: 'Selección de usuario no encontrada' });
    }

    // Filtrar el arreglo de recetas para eliminar la receta específica
    userSelection.recipes = userSelection.recipes.filter(id => id !== recipeId);

    // Guardar los cambios en la base de datos
    await userSelection.save();

    return res.status(200).json({ message: 'Receta eliminada de la selección' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error del servidor' });
  }
};

module.exports = deleteRecipeInSelection;