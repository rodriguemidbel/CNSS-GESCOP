const deliberationDAO = require('../dao/deliberation');

class deliberationService {
  createDeliberation(DeliberationDto) {
    const { dossier_id,date_delib,date_transpv_sign,date_retourpv_sign,date_transpv_dgcmef,
      typedelib,pvdeliberation } = DeliberationDto;
      
    return deliberationDAO.createDeliberation(dossier_id,date_delib,date_transpv_sign,date_retourpv_sign,date_transpv_dgcmef,
      typedelib,pvdeliberation);
  };
  getAllDeliberation() {
    return deliberationDAO.getAllDeliberation();
  };
  getOneDeliberation(id) {
    return deliberationDAO.getOneDeliberation(id);
  };
  removeDeliberation(id) {
    return deliberationDAO.removeDeliberation(id);
  };
  updateDeliberation(id,changes) {
    return deliberationDAO.updateDeliberation(id,changes);
  };

  findDeliberation(dossier_id){
      return deliberationDAO.findDeliberation(dossier_id)
  }

  findDelibByLotID(lot_id){
    return deliberationDAO.findDelibByLotID(lot_id)
  }
  
}

module.exports = new deliberationService();