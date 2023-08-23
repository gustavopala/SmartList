const { Ingredient } = require('../db');
const { Op } = require('sequelize');

const searchIngredientsByName = async (req, res) => {
  const ingredientName = req.query.name; // Obtener el nombre del ingrediente de los parámetros de la URL
console.log(ingredientName);
  try {
    // Buscar hasta 5 ingredientes por su nombre en la base de datos (ignorando mayúsculas/minúsculas)
    const foundIngredients = await Ingredient.findAll({
      where: {
        name: {
          [Op.iLike]: `%${ingredientName}%`
        }
      },
      limit: 10 // Limitar el resultado a 5 ingredientes
    });

    if (foundIngredients.length > 0) {
      const ingredientsList = foundIngredients.map(ingredient => ({
        ingredient_id: ingredient.ingredient_id,
        name: ingredient.name
      }));
      res.status(200).json(ingredientsList);
    } else {
      res.status(404).json({ message: 'No se encontraron ingredientes' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  searchIngredientsByName
};