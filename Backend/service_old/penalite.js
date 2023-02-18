const penaliteDAO = require('../dao/penalite');

class PenaliteService {
  createPenalite(PenaliteDto) {
    const { marche_id,date_pen,ref_marche,attributaire,montant_ht,delai,tx_pen,ref_ord,date_recep_tech,
        date_recep_prov,delai_reel,nbj_pen,montant_pen,decompte_pen,fichier } = PenaliteDto;
    return penaliteDAO.createPenalite(marche_id,date_pen,ref_marche,attributaire,montant_ht,delai,tx_pen,ref_ord,date_recep_tech,
        date_recep_prov,delai_reel,nbj_pen,montant_pen,decompte_pen,fichier);
  };

 
  getAllPenalite() {
    return penaliteDAO.getAllPenalite();
  };
  getOnePenalite(id) {
    return penaliteDAO.getOnePenalite(id);
  };
  removePenalite(id) {
    return penaliteDAO.removePenalite(id);
  };
  updatePenalite(id,changes) {
    return penaliteDAO.updatePenalite(id,changes);
  };
  findPenalite(marche_id) {
    return penaliteDAO.findPenalite(marche_id);
  };
  
}

module.exports = new PenaliteService();