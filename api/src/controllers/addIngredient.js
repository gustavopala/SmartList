const { Ingredient } = require('../db');

const addIngredient = async (req,res) =>{
    try{
        const { name, nutrition_info, category } = req.body;
        const newIngredient = await Ingredient.create({ name, nutrition_info, category })
        res.status(200).send(`ingrediente ${name} agregado con exito`)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

module.export = addIngredient;

