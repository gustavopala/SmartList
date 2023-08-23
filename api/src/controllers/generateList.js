const { UserSelection, Recipe, Recipe_ingredient, Ingredient, ShoppingListItem, ShoppingList, User } = require('../db'); // Ajusta la ruta según tu estructura de archivos

const generateList = async (req, res) => {
  const {userId,selectionId, listType} = req.body;


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
    const shoppingListItems = [];

    recipes.forEach(recipe => {
      recipe.Ingredients.forEach(ingredient => {
        const existingItemIndex = shoppingListItems.findIndex(item => item.ingredient_id === ingredient.ingredient_id);
        if (existingItemIndex !== -1) {
          shoppingListItems[existingItemIndex].quantity += ingredient.Recipe_ingredient.quantity;
        } else {
          shoppingListItems.push({
            ingredient_id: ingredient.ingredient_id,
            name: ingredient.name,
            quantity: ingredient.Recipe_ingredient.quantity,
            unit: ingredient.Recipe_ingredient.unit
          });
        }
      });
    });

    // Crear la lista de compra asociada al usuario
    const shoppingList = await ShoppingList.create({ user_id: userId, list_type: listType });

    // Agregar elementos a la lista de compra
    for (const item of shoppingListItems) {
      await ShoppingListItem.create({
        list_id: shoppingList.list_id,
        ingredient_id: item.ingredient_id,
        quantity: item.quantity
      });
    }

    return res.status(200).json({ shoppingListItems });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error del servidor' });
  }
}

module.exports = generateList;