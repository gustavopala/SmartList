const { UserSelection, Recipe } = require('../db'); // Ajusta la ruta según tu estructura de archivos

const addRecipeInSelection = async (req, res) => {
  const { selectionId , recipeId } = req.body;

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

    // Verificar si la receta ya está en la selección
    const recipeExists = userSelection.recipes.includes(recipeId);
    if (recipeExists) {
      return res.status(400).json({ message: 'La receta ya está en la selección' });
    }

    // Agregar la receta a la selección solo si no está ya en ella
    if (userSelection.recipes.length > 0) {
      let recipesCopy = [...userSelection.recipes]
      recipesCopy.push(recipeId)
      console.log(recipesCopy);
      userSelection.recipes=[...recipesCopy]
    } else {
      userSelection.recipes = [recipeId]; // Debes envolver el ID en un array si es la primera receta
    }
    
    await userSelection.save();

    return res.status(200).json({ message: 'Receta agregada a la selección', userSelection });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error del servidor' });
  }
};

module.exports = addRecipeInSelection;