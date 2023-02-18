const venteDAO = require('../dao/vente');

class VenteService {
  createVente(VenteDto) {
    const {vent_dossier_id,num_vente,lot_id,fournisseur_id,date_vente,montant,vent_statut,grpent} = VenteDto;
    return venteDAO.createVente(vent_dossier_id,num_vente,lot_id,fournisseur_id,date_vente,montant,vent_statut,grpent);
  };
  getAllVente() {
    return venteDAO.getAllVente();
  };
  getOneVente(id) {
    return venteDAO.getOneVente(id);
  };
  removeVente(id) {
    return venteDAO.removeVente(id);
  };
  updateVente(id,changes) {
    return venteDAO.updateVente(id,changes);
  };

  findVente(lot_id){
    return venteDAO.findVente(lot_id);
  }

  findVenteByNum(num_vente){
    return venteDAO.findVenteByNum(num_vente);
  }

  findVenteByDossID(vent_dossier_id){
    return venteDAO.findVenteByDossID(vent_dossier_id);
  }

  findVenteByStatut(vent_statut){
    return venteDAO.findVenteByStatut(vent_statut);
  }

  sumMontantAllVente(){
    return venteDAO.sumMontantAllVente();
  }

  sumMontantVenteByStatut(vent_statut){
    return venteDAO.sumMontantVenteByStatut(vent_statut);
  }

  findVenteID(lot_id,fournisseur_id){
    return venteDAO.findVenteID(lot_id,fournisseur_id);
  }
  
}

module.exports = new VenteService();