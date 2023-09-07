const { Router } = require('express');

const addIngredients = require('../controllers/addIngredients');
const addRecipe = require('../controllers/addRecipe');
const { searchIngredientsByName } = require('../controllers/searchIngredientsByName');
const getIngredientsForRecipes = require('../controllers/getIngredientsForRecipes');
const addUser = require('../controllers/addUser');
const addUserSelection = require('../controllers/addUserSelection');
const generateList = require('../controllers/generateList');
const getShoppingListItemsByListId = require('../controllers/getShoppingListItemsByListId');
const deleteRecipeInSelection = require('../controllers/deleteRecipeInSelection');
const addRecipeInSelection = require('../controllers/addRecipeInSelection');
const getUserSelection = require('../controllers/getUserSelection');
const deleteUserSelection = require('../controllers/deleteUserSelection');
const deleteListShop = require('../controllers/deleteListShop');
const getListForUser = require('../controllers/getListForUser');
const getRecipe = require('../controllers/getRecipe');

const router = Router();

router.get('/addingredients', addIngredients)
router.post('/addrecipe', addRecipe)
router.post('/adduser', addUser)
router.get('/ingredients/search', searchIngredientsByName);
router.get('/recipes/:recipeId/:numberOfPeople', getIngredientsForRecipes);
router.post('/adduserselection', addUserSelection)
router.post('/generate-shopping-list', generateList)
router.get('/getShoppingListItemsByListId/:listId', getShoppingListItemsByListId)
router.delete('/deleteRecipeInSelection/:selectionId/:recipeId', deleteRecipeInSelection)
router.put('/addRecipeInSelection', addRecipeInSelection)
router.get('/getUserSelection/:userId', getUserSelection)
router.delete('/deleteUserSelection/:selectionId', deleteUserSelection)
router.delete('/deleteListShop/:listId', deleteListShop)
router.get('/getListForUser/:userId', getListForUser)
router.get('/getRecipe/:recipeId', getRecipe)

module.exports = router;
