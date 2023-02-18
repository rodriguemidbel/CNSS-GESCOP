const decisionDAO = require('../dao/decision');

class DecisionService {
  createDecision(DecisionDto) {
    const { marche_id,nature_decision,montant_marche,montant_penalite,montant_guarantie,montant_decision,
        solde_marche,bordereau_liv,ref_fact,facture_def,decision,caution,autre_doc } = DecisionDto;
    return decisionDAO.createDecision(marche_id,nature_decision,montant_marche,montant_penalite,montant_guarantie,montant_decision,
        solde_marche,bordereau_liv,ref_fact,facture_def,decision,caution,autre_doc);
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
  
}

module.exports = new DecisionService();