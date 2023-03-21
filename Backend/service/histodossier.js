const planDAO = require('../dao/histodossier');

class HistodossService {
  createHistodoss(PlanDto) {
    const { dossier_id,statut,created_by,created_at } = PlanDto;
    return planDAO.createHistodoss(dossier_id,statut,created_by,created_at);
  };
  getAllHistodoss() {
    return planDAO.getAllHistodoss();
  };
  getOneHistodoss(id) {
    return planDAO.getOneHistodoss(id);
  };
  removeHistodoss(id) {
    return planDAO.removeHistodoss(id);
  };
  updateHistodoss(id,changes) {
    return planDAO.updateHistodoss(id,changes);
  };

  findHistodoss(numero_doss){
    return planDAO.findHistodoss(numero_doss);
  };
  
}

module.exports = new HistodossService();