const reglementDAO = require('../dao/reglement');

class ReglementService {
  createReglement(ReglementDto) {
    const { marche_id,ref_marche,ref_decision,attributaire,date_reglement,montant_decision,
        atd,fichier } = ReglementDto;
    return reglementDAO.createReglement(marche_id,ref_marche,ref_decision,attributaire,date_reglement,montant_decision,
        atd,fichier);
  };

 
  getAllReglement() {
    return reglementDAO.getAllReglement();
  };
  getOneReglement(id) {
    return reglementDAO.getOneReglement(id);
  };
  removeReglement(id) {
    return reglementDAO.removeReglement(id);
  };
  updateReglement(id,changes) {
    return reglementDAO.updateReglement(id,changes);
  };
  findReglement(marche_id) {
    return reglementDAO.findReglement(marche_id);
  };
  
}

module.exports = new ReglementService();