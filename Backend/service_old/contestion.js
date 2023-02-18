const contestationDAO = require('../dao/contestation');

class contestationService {
  createContestation(ContestationDto) {
    const { resultat_id,ref_conv,date_conv,structure_conv,statut_contest,commentaire,date_retour_not,decision,lettre_conv } = ContestationDto;
    return contestationDAO.createContestation(resultat_id,ref_conv,date_conv,structure_conv,statut_contest,commentaire,date_retour_not,decision,lettre_conv);
  };
  getAllContestation() {
    return contestationDAO.getAllContestation();
  };
  getOneContestation(id) {
    return contestationDAO.getOneContestation(id);
  };
  removeContestation(id) {
    return contestationDAO.removeContestation(id);
  };
  updateContestation(id,changes) {
    return contestationDAO.updateContestation(id,changes);
  };

  findContestation(resultat_id){
      return contestationDAO.findContestation(resultat_id)
  }
  
}

module.exports = new contestationService();