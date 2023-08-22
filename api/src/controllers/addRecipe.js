const { Recipe } = require('../db');

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
        estimated_nutrition
    } = req.body;
    try {
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
        })
        
        res.status(200).send(`recipe agregado con exito`)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

module.exports = addRecipe;