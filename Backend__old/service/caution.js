const cautionDAO = require('../dao/caution');

class cautionService {
  createCaution(CautionDto) {
    const { dossier_id,soumissionaire,date_caution,banque,montant_caution,date_trans,date_lettre,date_recp_lettre,caution } = CautionDto;
    return cautionDAO.createCaution(dossier_id,soumissionaire,date_caution,banque,montant_caution,date_trans,date_lettre,date_recp_lettre,caution);
  };
  getAllCaution() {
    return cautionDAO.getAllCaution();
  };
  getOneCaution(id) {
    return cautionDAO.getOneCaution(id);
  };
  removeCaution(id) {
    return cautionDAO.removeCaution(id);
  };
  updateCaution(id,changes) {
    return cautionDAO.updateCaution(id,changes);
  };

  findcautions(dossier_id){
      return cautionDAO.findcautions(dossier_id)
  }
  
}

module.exports = new cautionService();