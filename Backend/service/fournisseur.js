const fournisseurDAO = require('../dao/fournisseur');

class FournisseurService {
  createFournisseur(FournisseurDto) {
    const { raison_sociale,rccm,ifu,num_employeur,telephone1,telephone2,
      adresse,email,domaine,activite,titre_resp,nom_prenom_resp,type,created_by,created_at } = FournisseurDto;
    return fournisseurDAO.createFournisseur(raison_sociale,rccm,ifu,num_employeur,telephone1,telephone2,
      adresse,email,domaine,activite,titre_resp,nom_prenom_resp,type,created_by,created_at);
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


  findFrs(ifu,rccm){
    return fournisseurDAO.findFrs(ifu,rccm);
  }

  getAllEntreprise(){
    return fournisseurDAO.getAllEntreprise();
  }

  getAllGroupement(){
    return fournisseurDAO.getAllGroupement();
  }

  
}

module.exports = new FournisseurService();