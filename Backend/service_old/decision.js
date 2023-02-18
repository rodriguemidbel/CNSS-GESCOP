const decisionDAO = require('../dao/decision');

class DecisionService {
  createDecision(DecisionDto) {
    const { marche_id,date_decision,nature_decision,ref_marche,ref_ordre,recep_tech,
      recep_prov,montant_marche,montant_penalite,montant_guarantie,retenue_src,retenue_arcop,
      retenue_cotisation,montant_decision,solde_marche,bordereau_liv,ref_fact,facture_def,
      decision,caution,autre_doc } = DecisionDto;
    return decisionDAO.createDecision(marche_id,date_decision,nature_decision,ref_marche,ref_ordre,recep_tech,
      recep_prov,montant_marche,montant_penalite,montant_guarantie,retenue_src,retenue_arcop,
      retenue_cotisation,montant_decision,solde_marche,bordereau_liv,ref_fact,facture_def,
      decision,caution,autre_doc);
  };

  getAllDecision() {
    return decisionDAO.getAllDecision();
  };
  getOneDecision(id) {
    return decisionDAO.getOneDecision(id);
  };
  removeDecision(id) {
    return decisionDAO.removeDecision(id);
  };
  updateDecision(id,changes) {
    return decisionDAO.updateDecision(id,changes);
  };

  findDecision(marche_id) {
    return decisionDAO.findDecision(marche_id);
  };
  
}

module.exports = new DecisionService();