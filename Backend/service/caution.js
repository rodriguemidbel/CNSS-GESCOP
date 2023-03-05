const cautionDAO = require('../dao/caution');

class cautionService {
  createCaution(CautionDto) {
    const { dossier_id,marche_id,ref_marche,soumissionaire,nature_caution,date_caution,banque,montant_caution,
      date_trans,date_lettre,date_recp_lettre,lettre_confirmation,lettre_demande,caution } = CautionDto;
    return cautionDAO.createCaution(dossier_id,marche_id,ref_marche,soumissionaire,nature_caution,date_caution,banque,montant_caution,
      date_trans,date_lettre,date_recp_lettre,lettre_confirmation,lettre_demande,caution);
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