const offreDAO = require('../dao/offre');

class offreService {
  createOffre(OffreDto) {
    const { dossier_id,fournisseur_id,lot_id,montant_offre,date_depot,heure_depot,nom_prenom_dep,telephone_dep } = OffreDto;
    return offreDAO.createOffre(dossier_id,fournisseur_id,lot_id,montant_offre,date_depot,heure_depot,nom_prenom_dep,telephone_dep);
  };
  getAllOffre(dossier_id) {
    return offreDAO.getAllOffre(dossier_id);
  };
  getOneOffre(id) {
    return offreDAO.getOneOffre(id);
  };
  removeOffre(id) {
    return offreDAO.removeOffre(id);
  };
  updateOffre(id,changes) {
    return offreDAO.updateOffre(id,changes);
  };

  findOffre(dossier_id){
      return offreDAO.findOffre(dossier_id)
  }
  // getOffreById

  getOffreById(id){
    return offreDAO.getOffreById(id)
}
}

module.exports = new offreService();