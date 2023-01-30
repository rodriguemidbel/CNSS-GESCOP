const marcheDAO = require('../dao/marche');

class marcheService {
  createMarche(marcheDto) {
    const { dossier_id,num_ref,notification_id,objet,fournisseur_id,lot_id,montant,montant_min,montant_max,
            delai,date_rem_sign,date_retour_sign,date_trans_visa,date_retour_visa,date_envoi_appro,
            date_appro,date_notif,date_rem_enr,date_retour_enr,num_visa,marche } = marcheDto;
    return marcheDAO.createMarche(dossier_id,
                                  num_ref,
                                  notification_id,
                                  objet,
                                  fournisseur_id,
                                  lot_id,
                                  montant,
                                  montant_min,
                                  montant_max,
                                  delai,
                                  date_rem_sign,
                                  date_retour_sign,
                                  date_trans_visa,
                                  date_retour_visa,
                                  date_envoi_appro,
                                  date_appro,
                                  date_notif,
                                  date_rem_enr,
                                  date_retour_enr,
                                  num_visa,
                                  marche
                              );
                            };
  getAllMarche() {
    return marcheDAO.getAllMarche();
  };
  getOneMarche(id) {
    return marcheDAO.getOneMarche(id);
  };
  removeMarche(id) {
    return marcheDAO.removeMarche(id);
  };
  updateMarche(id,changes) {
    return marcheDAO.updateMarche(id,changes);
  };

  findMarche(dossier_id){
      return marcheDAO.findMarche(dossier_id)
  }

  /*------*/
  countMarche(annee){
    return marcheDAO.countMarche(annee)
}
getMarche(dossier_id){
  return marcheDAO.getMarche(dossier_id)
}


  
}

module.exports = new marcheService();