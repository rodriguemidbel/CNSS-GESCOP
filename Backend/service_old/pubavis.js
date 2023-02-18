const pubavisDAO = require('../dao/pubavis');

class pubavisService {
  createPubavis(pubavisDto) {
    const { dossier_id,num_bordereau,date_bordereau,observation } = pubavisDto;
    return pubavisDAO.createPubavis(dossier_id,num_bordereau,date_bordereau,observation);
  };
  getAllPubavis() {
    return pubavisDAO.getAllPubavis();
  };
  getOnePubavis(id) {
    return pubavisDAO.getOnePubavis(id);
  };
  removePubavis(id) {
    return pubavisDAO.removePubavis(id);
  };
  updatePubavis(id,changes) {
    return pubavisDAO.updatePubavis(id,changes);
  };

  findPubavis(dossier_id){
      return pubavisDAO.findPubavis(dossier_id)
  }

  counPubavis(annee){
    return pubavisDAO.counPubavis(annee)
}

  
  
}

module.exports = new pubavisService();