const caisseDAO = require('../dao/caisse');

class caisseService {
  createCaisse(CaisseDto) {
    const { num_recu,date_recu,vente_id,modepaiement_id,user_id } = CaisseDto;
    return caisseDAO.createCaisse(num_recu,date_recu,vente_id,modepaiement_id,user_id);
  };
  getAllCaisse() {
    return caisseDAO.getAllCaisse();
  };
  getOneCaisse(id) {
    return caisseDAO.getOneCaisse(id);
  };
  removeCaisse(id) {
    return caisseDAO.removeCaisse(id);
  };
  updateCaisse(id,changes) {
    return caisseDAO.updateCaisse(id,changes);
  };

  findCaisse(vente_id){
      return caisseDAO.findCaisse(vente_id)
  }

  findCaisseByDoss(vent_dossier_id){
    return caisseDAO.findCaisseByDoss(vent_dossier_id)
 }

 getCaisseByUser(user_id){
  return caisseDAO.getCaisseByUser(user_id)
 }
  
}

module.exports = new caisseService();