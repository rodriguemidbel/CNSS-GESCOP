const receptionDAO = require('../dao/reception');

class ReceptionService {
  createReception(receptDto) {
    const { typreception_id,marche_id,fournisseur_id,date_recept,heure_recept,membre,autre,pv_recept } = receptDto;
    return receptionDAO.createReception(typreception_id,marche_id,fournisseur_id,date_recept,heure_recept,membre,autre,pv_recept);
  };

  
  getAllReception() {
    return receptionDAO.getAllReception();
  };
  getOneReception(id) {
    return receptionDAO.getOneReception(id);
  };
  removeReception(id) {
    return receptionDAO.removeReception(id);
  };
  updateReception(id,changes) {
    return receptionDAO.updateReception(id,changes);
  };

  findReception(marche_id) {
    return receptionDAO.findReception(marche_id);
  };

  countReception(marche_id) {
    return receptionDAO.countReception(marche_id);
  };
  
}

module.exports = new ReceptionService();