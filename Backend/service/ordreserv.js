const ordreservDAO = require('../dao/ordreserv');

class OrdreservService {
  createOrdreserv(OrdreservDto) {
    const { marche_id,ref,objet,typordre_id,fournisseur_id,date_notif,date_demarrage,charge_notif,charge_notif_dist,ordre } = OrdreservDto;
    return ordreservDAO.createOrdreserv(marche_id,ref,objet,typordre_id,fournisseur_id,date_notif,date_demarrage,charge_notif,charge_notif_dist,ordre);
  };
  getAllOrdreserv() {
    return ordreservDAO.getAllOrdreserv();
  };
  getOneOrdreserv(id) {
    return ordreservDAO.getOneOrdreserv(id);
  };
  removeOrdreserv(id) {
    return ordreservDAO.removeOrdreserv(id);
  };
  updateOrdreserv(id,changes) {
    return ordreservDAO.updateOrdreserv(id,changes);
  };

  findOrdreserv(marche_id){
      return ordreservDAO.findOrdreserv(marche_id)
  }

  countOrdreserv(marche_id){
    return ordreservDAO.countOrdreserv(marche_id)
}
  
}

module.exports = new OrdreservService();