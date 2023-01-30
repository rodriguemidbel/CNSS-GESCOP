const ordsuspenDAO = require('../dao/ordsuspension');

class OrdsuspenService {
  createOrdsuspen(OrdsuspenDto) {
    const { marche_id,ordreserv_id,ref,date_suspension,lettre_demande,notif_suspension,motif,delai_couru,delai_restant,charge_notif,charge_notif_titre } = OrdsuspenDto;
    return ordsuspenDAO.createOrdsuspen(marche_id,ordreserv_id,ref,date_suspension,lettre_demande,notif_suspension,motif,delai_couru,delai_restant,charge_notif,charge_notif_titre);
  };
  getAllOrdsuspen() {
    return ordsuspenDAO.getAllOrdsuspen();
  };
  getOneOrdsuspen(id) {
    return ordsuspenDAO.getOneOrdsuspen(id);
  };
  removeOrdsuspen(id) {
    return ordsuspenDAO.removeOrdsuspen(id);
  };
  updateOrdsuspen(id,changes) {
    return ordsuspenDAO.updateOrdsuspen(id,changes);
  };

  findOrdsuspen(marche_id){
      return ordsuspenDAO.findOrdsuspen(marche_id)
  }

  countOrdsuspen(marche_id){
    return ordsuspenDAO.countOrdsuspen(marche_id)
}

  
}

module.exports = new OrdsuspenService();