const { Router } = require('express');

const addIngredients = require('../controllers/addIngredients');
const addRecipe = require('../controllers/addRecipe');

const router = Router();

router.get('/addingredients', addIngredients)
router.post('/addrecipe', addRecipe)

module.exports = router;
