const lotDAO = require('../dao/lot');

class lotService {
  createLot(LotDto) {
    const { dossier_id,num_lot,intitule_lot,montant_lot,montant_vente,observation,statut } = LotDto;
    return lotDAO.createLot(dossier_id,num_lot,intitule_lot,montant_lot,montant_vente,observation,statut);
  };
  getAllLot() {
    return lotDAO.getAllLot();
  };
  getOneLot(id) {
    return lotDAO.getOneLot(id);
  };
  removeLot(id) {
    return lotDAO.removeLot(id);
  };
  updateLot(id,changes) {
    return lotDAO.updateLot(id,changes);
  };

  findLot(dossier_id){
      return lotDAO.findLot(dossier_id)
  }

  sumMontantLot(dossier_id){
    return lotDAO.sumMontantLot(dossier_id)
  }

  countLot(num_lot){
    return lotDAO.countLot(num_lot)
  }
  
}

module.exports = new lotService();