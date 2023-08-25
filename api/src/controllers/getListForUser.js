const { ShoppingList } = require('../db'); 

const getListForUser = async (req, res) => {
    const userId = req.params.userId;
    try {
      
      const shoppingList = await ShoppingList.findAll({
        where: {
          user_id: userId
        },
      });
      return res.status(200).json({ shoppingList });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error del servidor' });
    }
  };
  
  module.exports = getListForUser;