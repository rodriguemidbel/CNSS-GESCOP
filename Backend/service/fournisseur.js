const fournisseurDAO = require('../dao/fournisseur');

class FournisseurService {
  createFournisseur(FournisseurDto) {
    const { raison_sociale,rccm,ifu,num_employeur,telephone1,telephone2,adresse,email,domaine,titre_resp,nom_prenom_resp,type } = FournisseurDto;
    return fournisseurDAO.createFournisseur(raison_sociale,rccm,ifu,num_employeur,telephone1,telephone2,adresse,email,domaine,titre_resp,nom_prenom_resp,type);
  };
  getAllFournisseur() {
    return fournisseurDAO.getAllFournisseur();
  };
  getOneFournisseur(id) {
    return fournisseurDAO.getOneFournisseur(id);
  };
  removeFournisseur(id) {
    return fournisseurDAO.removeFournisseur(id);
  };
  updateFournisseur(id,changes) {
    return fournisseurDAO.updateFournisseur(id,changes);
  };

  findFrs(ifu,rccm){
    return fournisseurDAO.findFrs(ifu,rccm);
  }

  
}

module.exports = new FournisseurService();