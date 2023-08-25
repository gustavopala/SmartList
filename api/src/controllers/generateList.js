const { UserSelection, Recipe, Recipe_ingredient, Ingredient, ShoppingListItem, ShoppingList, User } = require('../db'); // Ajusta la ruta según tu estructura de archivos

const generateList = async (req, res) => {
  const { userId, selectionId, listType } = req.body;


  try {
    // Busca la selección de recetas específica del usuario
    const userSelection = await UserSelection.findOne({
      where: {
        user_id: userId,
        selection_id: selectionId
      }
    });

    if (!userSelection) {
      return res.status(404).json({ message: 'Selección de usuario no encontrada' });
    }

    // Obtén las recetas de la selección
    const recipeIds = userSelection.recipes;
    const recipes = await Recipe.findAll({
      where: {
        recipe_id: recipeIds
      },
      include: [
        {
          model: Ingredient,
          through: {
            model: Recipe_ingredient,
            attributes: ['quantity', 'unit']
          }
        }
      ]
    });

    // Calcular cantidades de ingredientes y generar la lista de compra
    const numberOfPeople = userSelection.number_of_people; // Obtén el número de personas
    const shoppingListItems = {}; // Usar un objeto para realizar un seguimiento de los ingredientes y cantidades

    recipes.forEach(recipe => {
      recipe.Ingredients.forEach(ingredient => {
        const ingredientId = ingredient.ingredient_id;

        // Calcular la cantidad ajustada por persona
        const cantidadPorPersona = ingredient.Recipe_ingredient.quantity / 4;
        const cantidadAjustada = cantidadPorPersona * numberOfPeople;

        if (shoppingListItems.hasOwnProperty(ingredientId)) {
          shoppingListItems[ingredientId].quantity += cantidadAjustada;
        } else {
          shoppingListItems[ingredientId] = {
            ingredient_id: ingredientId,
            name: ingredient.name,
            quantity: cantidadAjustada,
            unit: ingredient.Recipe_ingredient.unit
          };
        }
      });
    });

    // Crear la lista de compra asociada al usuario
    const shoppingList = await ShoppingList.create({ user_id: userId, list_type: listType });

    // Agregar elementos a la lista de compra
    for (const ingredientId in shoppingListItems) {
      if (shoppingListItems.hasOwnProperty(ingredientId)) {
        const item = shoppingListItems[ingredientId];
    
        await ShoppingListItem.create({
          list_id: shoppingList.list_id,
          ingredient_id: item.ingredient_id,
          quantity: item.quantity,
          unit: item.unit
        });
      }
    }

    return res.status(200).json({ shoppingListItems });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error del servidor' });
  }
}

module.exports = generateList;