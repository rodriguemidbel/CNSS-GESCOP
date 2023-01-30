const signataireDAO = require('../dao/signataire');

class signataireService {
  createSignataire(SignataireDto) {
    const { nom,prenom,titre,distinction,localisation_id,cam,sct,ordre,actif } = SignataireDto;
    return signataireDAO.createSignataire(nom,prenom,titre,distinction,localisation_id,cam,sct,ordre,actif);
  };
  getAllSignataire() {
    return signataireDAO.getAllSignataire();
  };
  getOneSignataire(id) {
    return signataireDAO.getOneSignataire(id);
  };
  removeSignataire(id) {
    return signataireDAO.removeSignataire(id);
  };
  updateSignataire(id,changes) {
    return signataireDAO.updateSignataire(id,changes);
  };

  findSignataire(localisation_id){
      return signataireDAO.findSignataire(localisation_id)
  }
  
}

module.exports = new signataireService();