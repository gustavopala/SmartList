const { Recipe_ingredient, Ingredient } = require('../db');

const getIngredientsForRecipe = async (req, res) => {
  const recipeId = req.params.recipeId;

  try {
      const recipeIngredients = await Recipe_ingredient.findAll({
          where: {
              recipe_id: recipeId
          },
          include: Ingredient, // Relación con Ingredient
          attributes: ['quantity', 'unit'] // Columnas a seleccionar
      });

      if (recipeIngredients.length > 0) {
          const ingredientsList = recipeIngredients.map(ingredient => ({
              ingredient_id: ingredient.Ingredient.ingredient_id,
              name: ingredient.Ingredient.name,
              quantity: ingredient.quantity,
              unit: ingredient.unit
          }));
          res.status(200).json(ingredientsList);
      } else {
          res.status(404).json({ message: 'No se encontraron ingredientes para la receta' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

module.exports = 
    getIngredientsForRecipe
;