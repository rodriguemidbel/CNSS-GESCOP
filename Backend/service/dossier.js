const dossierDAO = require('../dao/dossier');

class dossierService {
  createDossier(DossierDto) {
    const { planitem_id,numero_doss,intitule_doss,date_trans_sign,date_retour_sign,
      date_trans_dgcmef,taux_reception,niveau_traitement,taux_avencement,dossier,statut,created_by,modified_by } = DossierDto;
    return dossierDAO.createDossier(planitem_id,numero_doss,intitule_doss,date_trans_sign,date_retour_sign,
      date_trans_dgcmef,taux_reception,niveau_traitement,taux_avencement,dossier,statut,created_by,modified_by);
  };
  getAllDossier() {
    return dossierDAO.getAllDossier();
  };
  getOneDossier(id) {
    return dossierDAO.getOneDossier(id);
  };

  

  removeDossier(id) {
    return dossierDAO.removeDossier(id);
  };
  updateDossier(id,changes) {
    return dossierDAO.updateDossier(id,changes);
  };

  findDossier(annee){
      return dossierDAO.findDossier(annee)
  }

  findDossierByType(annee,type_id){
    return dossierDAO.findDossierByType(annee,type_id)
  }

  findDossierByLoca(annee,localisation_id){
    return dossierDAO.findDossierByLoca(annee,localisation_id)
  }

  findDossierByLocaAndType(annee,type_id,localisation_id){
    return dossierDAO.findDossierByLocaAndType(annee,type_id,localisation_id)
  }

countDossier(annee){
    return dossierDAO.countDossier(annee)
}
  
}

module.exports = new dossierService();