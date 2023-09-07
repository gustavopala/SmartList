const { Recipe_ingredient, Ingredient, Recipe } = require('../db');

const getIngredientsAndRecipeForRecipe = async (req, res) => {
  const recipeId = req.params.recipeId;
  const numberOfPeople = req.params.numberOfPeople || 1; // Obtén el número de personas desde la URL o usa 1 por defecto

  try {
    const recipeIngredients = await Recipe_ingredient.findAll({
      where: {
        recipe_id: recipeId
      },
      include: Ingredient, // Relación con Ingredient
      attributes: ['quantity', 'unit'] // Columnas a seleccionar
    });

    if (recipeIngredients.length > 0) {
      // Consulta para obtener los detalles de la receta
      const recipe = await Recipe.findOne({
        where: {
          recipe_id: recipeId
        }
      });

      if (recipe) {
        const ingredientsList = recipeIngredients.map(ingredient => {
          const cantidadPorPersona = (ingredient.quantity / 4) * numberOfPeople;
          
          return {
            ingredient_id: ingredient.Ingredient.ingredient_id,
            name: ingredient.Ingredient.name,
            quantity: cantidadPorPersona,
            unit: ingredient.unit
          };
        });

        // Agregar los detalles de la receta a la respuesta
        const recipeDetails = {
          recipe_id: recipe.recipe_id,
          name: recipe.name,
          instructions: recipe.instructions,
          // Agrega otras propiedades de la receta según sea necesario
        };

        res.status(200).json({ recipe: recipeDetails, ingredients: ingredientsList });
      } else {
        res.status(404).json({ message: 'No se encontró la receta' });
      }
    } else {
      res.status(404).json({ message: 'No se encontraron ingredientes para la receta' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getIngredientsAndRecipeForRecipe;