const offrefrsDAO = require('../dao/Offrefrs');

class OffrefrsService {
  createOffrefrs(OffrefrsDto) {
    const { offre_id,fournisseur_id } = OffrefrsDto;
    return offrefrsDAO.createOffrefrs(offre_id,fournisseur_id);
  };
  getAllOffrefrs(offre_id) {
    return offrefrsDAO.getAllOffrefrs(offre_id);
  };
  getOneOffrefrs(id) {
    return offrefrsDAO.getOneOffrefrs(id);
  };
  removeOffrefrs(id) {
    return offrefrsDAO.removeOffrefrs(id);
  };
  updateOffrefrs(id,changes) {
    return offrefrsDAO.updateOffrefrs(id,changes);
  };

  
}

module.exports = new OffrefrsService();