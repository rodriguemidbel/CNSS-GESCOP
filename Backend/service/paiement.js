const paiementDAO = require('../dao/paiement');

class paiementService {
  createPaiement(PaiementDto) {
    const { dossier_id,entreprise_cons,date_paie,montant } = PaiementDto;
    return paiementDAO.createPaiement(dossier_id,entreprise_cons,date_paie,montant);
  };
  getAllPaiement(dossier_id) {
    return paiementDAO.getAllPaiement(dossier_id);
  };
  getOnePaiement(id) {
    return paiementDAO.getOnePaiement(id);
  };
  removePaiement(id) {
    return paiementDAO.removePaiement(id);
  };
  updatePaiement(id,changes) {
    return paiementDAO.updatePaiement(id,changes);
  };

  findPaiement(dossier_id){
      return paiementDAO.findPaiement(dossier_id)
  }
  
}

module.exports = new paiementService();