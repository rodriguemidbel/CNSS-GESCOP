const ordrepriseDAO = require('../dao/ordreprise');

class OrdrepriseService {
  createOrdreprise(OrdrepriseDto) {
    const { marche_id,ref,date_notif,date_suspension,charge_notif,charge_notif_dist,ordre } = OrdrepriseDto;
    return ordrepriseDAO.createOrdreprise(marche_id,ref,date_notif,date_suspension,charge_notif,charge_notif_dist,ordre);
  };
  getAllOrdreprise() {
    return ordrepriseDAO.getAllOrdreprise();
  };
  getOneOrdreprise(id) {
    return ordrepriseDAO.getOneOrdreprise(id);
  };
  removeOrdreprise(id) {
    return ordrepriseDAO.removeOrdreprise(id);
  };
  updateOrdreprise(id,changes) {
    return ordrepriseDAO.updateOrdreprise(id,changes);
  };

  findOrdreprise(marche_id){
      return ordrepriseDAO.findOrdreprise(marche_id)
  }

  countOrdreprise(marche_id){
    return ordrepriseDAO.countOrdreprise(marche_id)
}
  
}

module.exports = new OrdrepriseService();