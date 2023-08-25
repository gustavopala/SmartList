const { ShoppingList, ShoppingListItem } = require('../db'); // Ajusta la ruta según tu estructura de archivos

// Ruta para eliminar una lista de compra y sus elementos asociados
const deleteListShop = async (req, res) => {
  const listId = req.params.listId;

  try {
    // Buscar y eliminar los elementos de la lista de compra por el list_id
    await ShoppingListItem.destroy({
      where: {
        list_id: listId
      }
    });

    // Luego, eliminar la lista de compra en sí
    const deletedList = await ShoppingList.destroy({
      where: {
        list_id: listId
      }
    });

    if (deletedList === 0) {
      return res.status(404).json({ message: 'Lista de compra no encontrada' });
    }

    return res.status(200).json({ message: 'Lista de compra y elementos eliminados exitosamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error del servidor' });
  }
};

module.exports = deleteListShop;