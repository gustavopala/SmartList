const { Ingredient } = require('../db');

const addIngredients = async (req, res) => {
    try {
        const ingredientsFromAPI = req.body; // Array de objetos de ingredientes desde la API

        // Mapear los datos de la API al formato esperado por el modelo Ingredient
        const mappedIngredients = ingredientsFromAPI.map(apiIngredient => ({
            name: apiIngredient.strIngredient,
            nutrition_info: apiIngredient.strDescription,
            category: apiIngredient.strType
        }));

        // Usar bulkCreate para insertar los ingredientes en la base de datos
        const newIngredients = await Ingredient.bulkCreate(mappedIngredients);

        res.status(200).json({ message: 'Ingredientes agregados con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = addIngredients;
