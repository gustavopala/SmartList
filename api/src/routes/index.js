const { Router } = require('express');

const addIngredients = require('../controllers/addIngredients');
const addRecipe = require('../controllers/addRecipe');
const { searchIngredientsByName } = require('../controllers/searchIngredientsByName');
const getIngredientsForRecipes = require('../controllers/getIngredientsForRecipes');
const addUser = require('../controllers/addUser');
const addUserSelection = require('../controllers/addUserSelection');
const generateList = require('../controllers/generateList');

const router = Router();

router.get('/addingredients', addIngredients)
router.post('/addrecipe', addRecipe)
router.post('/adduser', addUser)
router.get('/ingredients/search', searchIngredientsByName);
router.get('/recipes/:recipeId/ingredients', getIngredientsForRecipes);
router.post('/adduserselection', addUserSelection)
router.post('/generate-shopping-list', generateList)
module.exports = router;
