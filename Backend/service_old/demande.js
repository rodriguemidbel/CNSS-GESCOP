const demandeDAO = require('../dao/demande');

class OrdreservService {
    createDemande(OrdreservDto) {
    const { marche_id,ordreserv_id,date_demande,motif,courrier } = OrdreservDto;
    return demandeDAO.createDemande(marche_id,ordreserv_id,date_demande,motif,courrier);
  };
  getAllDemande() {
    return demandeDAO.getAllDemande();
  };
  getOneDemande(id) {
    return demandeDAO.getOneDemande(id);
  };
  removeDemande(id) {
    return demandeDAO.removeDemande(id);
  };
  updateDemande(id,changes) {
    return demandeDAO.updateDemande(id,changes);
  };

  findDemande(marche_id){
      return demandeDAO.findDemande(marche_id)
  }

  countDemande(marche_id){
    return demandeDAO.countDemande(marche_id)
}
  
}

module.exports = new OrdreservService();