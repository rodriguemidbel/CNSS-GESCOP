const VentefrsDAO = require('../dao/ventefrs');

class VentefrsService {
  createVentefrs(VentefrsDto) {
    const {vente_id,lot_id,fournisseur_id,grpent } = VentefrsDto;
    return VentefrsDAO.createVentefrs(vente_id,lot_id,fournisseur_id,grpent);
  };
  getAllVentefrs(vente_id) {
    return VentefrsDAO.getAllVentefrs(vente_id);
  };
  getOneVentefrs(id) {
    return VentefrsDAO.getOneVentefrs(id);
  };
  removeVentefrs(id) {
    return VentefrsDAO.removeVentefrs(id);
  };
  updateVentefrs(id,changes) {
    return VentefrsDAO.updateVentefrs(id,changes);
  };

}

module.exports = new VentefrsService();