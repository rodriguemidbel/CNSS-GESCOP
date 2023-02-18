const offreDAO = require('../dao/offre');

class offreService {
  createOffre(OffreDto) {
    const { off_dossier_id,fournisseur_id,lot_id,montant_offre,montant_min,montant_max,
      delai_exe,date_depot,heure_depot,nom_prenom_dep,telephone_dep,banque,ref_caution,mnt_caution } = OffreDto;
    return offreDAO.createOffre(off_dossier_id,fournisseur_id,lot_id,montant_offre,montant_min,montant_max,
      delai_exe,date_depot,heure_depot,nom_prenom_dep,telephone_dep,banque,ref_caution,mnt_caution);
  };
  getAllOffre(off_dossier_id) {
    return offreDAO.getAllOffre(off_dossier_id);
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

  findOffre(off_dossier_id){
      return offreDAO.findOffre(off_dossier_id)
  }
  // getOffreById

  getOffreById(id){
    return offreDAO.getOffreById(id)
  }

  getOffreByLotID(lot_id){
    return offreDAO.getOffreByLotID(lot_id)
  }

  getAttributaire(lot_id,fournisseur_id){
    return offreDAO.getAttributaire(lot_id,fournisseur_id)
  }
}

module.exports = new offreService();