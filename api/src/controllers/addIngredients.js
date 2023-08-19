const axios = require('axios');
const { Ingredient } = require('../db');

const addIngredients = async (req, res) => {
    try {
        // Hacer la solicitud a la API externa para obtener los ingredientes
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        const ingredientsFromAPI = response.data.meals;

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
