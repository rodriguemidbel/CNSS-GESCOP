const resiliationDAO = require('../dao/resiliation');

class ResiliationService {
  createResiliation(ResiliationDto) {
    const { marche_id,ref_decision,date_decision,fichier } = ResiliationDto;
    return resiliationDAO.createResiliation(marche_id,ref_decision,date_decision,fichier);
  };

 
  getAllResiliation() {
    return resiliationDAO.getAllResiliation();
  };
  getOneResiliation(id) {
    return resiliationDAO.getOneResiliation(id);
  };
  removeResiliation(id) {
    return resiliationDAO.removeResiliation(id);
  };
  updateResiliation(id,changes) {
    return resiliationDAO.updateResiliation(id,changes);
  };
  
}

module.exports = new ResiliationService();