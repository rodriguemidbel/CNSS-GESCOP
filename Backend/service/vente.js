const venteDAO = require('../dao/vente');

class VenteService {
  createVente(VenteDto) {
    const {dossier_id,num_vente,lot_id,fournisseur_id,date_vente,montant,statut} = VenteDto;
    return venteDAO.createVente(dossier_id,num_vente,lot_id,fournisseur_id,date_vente,montant,statut);
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
  
}

module.exports = new VenteService();