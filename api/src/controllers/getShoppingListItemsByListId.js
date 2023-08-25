const { ShoppingListItem, Ingredient } = require('../db');

const getShoppingListItemsByListId = async (req, res) => {
  const listId = req.params.listId;

  try {
    // Buscar los elementos de la lista de compras por list_id
    const shoppingListItems = await ShoppingListItem.findAll({
      where: {
        list_id: listId
      },
      include: [
        {
          model: Ingredient,
          attributes: ['name'] // Aquí puedes especificar los atributos del ingrediente que deseas obtener
        }
      ]
    });

    if (shoppingListItems.length === 0) {
      return res.status(404).json({ message: 'No se encontraron elementos en la lista de compras' });
    }

    return res.status(200).json({ shoppingListItems });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error del servidor' });
  }
}

module.exports = getShoppingListItemsByListId;