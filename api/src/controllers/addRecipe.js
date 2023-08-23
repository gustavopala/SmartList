const { Recipe, Recipe_ingredient } = require('../db');

const addRecipe = async (req, res) => {
    const {
        name,
        instructions,
        category,
        country,
        main_ingredient,
        restrictions,
        occasion,
        cooking_method,
        preparation_time,
        side_dish,
        difficulty_level,
        servings,
        estimated_nutrition,
        ingredients // Array de ingredientes con detalles y cantidades
    } = req.body;

    try {
        // Crear la receta en la tabla Recipe
        const newRecipe = await Recipe.create({
            name,
            instructions,
            category,
            country,
            main_ingredient,
            restrictions,
            occasion,
            cooking_method,
            preparation_time,
            side_dish,
            difficulty_level,
            servings,
            estimated_nutrition
        });

        // Asociar los ingredientes a la receta en la tabla Recipe_ingredients
        for (const ingredient of ingredients) {
            await Recipe_ingredient.create({
                recipe_id: newRecipe.recipe_id,
                ingredient_id: ingredient.ingredient_id,
                quantity: ingredient.quantity,
                unit: ingredient.unit
            });
        }

        res.status(200).send(`Receta y relaciones con ingredientes agregados con éxito`);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = addRecipe;