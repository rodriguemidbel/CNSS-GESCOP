const analyseDAO = require('../dao/analyse');

class analyseService {
  createAnalyse(analyseDto) {
    const { dossier_id,date_effec_ana,libelle,lot_id,attributaire,montant_init,montant_corri,
      montant_min_init,montant_min_corri,montant_max_init,montant_max_corri,duree_execution } = analyseDto;
    return analyseDAO.createAnalyse(
      dossier_id,
      date_effec_ana,
      libelle,
      lot_id,
      attributaire,
      montant_init,
      montant_corri,
      montant_min_init,
      montant_min_corri,
      montant_max_init,
      montant_max_corri,
      duree_execution);
  };
  getAllAnalyse(dossier_id) {
    return analyseDAO.getAllAnalyse(dossier_id);
  };
  getOneAnalyse(id) {
    return analyseDAO.getOneAnalyse(id);
  };
  removeAnalyse(id) {
    return analyseDAO.removeAnalyse(id);
  };
  updateAnalyse(id,changes) {
    return analyseDAO.updateAnalyse(id,changes);
  };

  findAnalyse(dossier_id){
      return analyseDAO.findAnalyse(dossier_id)
  }
  
}

module.exports = new analyseService();