const litigeDAO = require('../dao/litige');

class litigeService {
  createLitige(LitigeDto) {
    const { dossier_id,lot_id,motif,decision,date_ord,fournisseur_id,resultat,plainte,fichier } = LitigeDto;
    return litigeDAO.createLitige(dossier_id,lot_id,motif,decision,date_ord,fournisseur_id,resultat,plainte,fichier);
  };
  getAllLitige() {
    return litigeDAO.getAllLitige();
  };
  getOneLitige(id) {
    return litigeDAO.getOneLitige(id);
  };
  removeLitige(id) {
    return litigeDAO.removeLitige(id);
  };
  updateLitige(id,changes) {
    return litigeDAO.updateLitige(id,changes);
  };

  findLitige(dossier_id){
      return litigeDAO.findLitige(dossier_id)
  }

  sumMontantLitige(dossier_id){
    return litigeDAO.sumMontantLitige(dossier_id)
  }

  countLitige(num_Litige){
    return litigeDAO.countLitige(num_Litige)
  }
  
}

module.exports = new litigeService();