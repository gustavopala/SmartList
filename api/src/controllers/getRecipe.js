const { Recipe, Ingredient } = require('../db');

const getRecipe = async (req, res) => {
  const recipeId = req.params.recipeId;

  try {
    const recipeWithIngredients = await Recipe.findOne({
      where: { id: recipeId },
      include: [
        {
          model: Ingredient,
          as: 'Ingredients', // Usa el alias que has definido en la asociación de Recipe
          attributes: ['ingredient_id', 'name'],
          through: { attributes: ['quantity', 'unit'] },
        },
      ],
    });

    if (recipeWithIngredients) {
      res.status(200).json(recipeWithIngredients);
    } else {
      res.status(404).json({ message: 'No se encontró la receta o sus ingredientes' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getRecipe;

