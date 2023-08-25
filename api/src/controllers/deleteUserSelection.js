const { UserSelection } = require('../db'); // Ajusta la ruta según tu estructura de archivos

const deleteUserSelection = async (req, res) => {
    const selectionId = req.params.selectionId;
  
    try {
      const deletedSelection = await UserSelection.destroy({
        where: {
          selection_id: selectionId
        }
      });
  
      if (deletedSelection === 0) {
        return res.status(404).json({ message: 'Selección de usuario no encontrada' });
      }
  
      return res.status(200).json({ message: 'Selección de usuario eliminada exitosamente' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error del servidor' });
    }
  };
  
module.exports = deleteUserSelection;