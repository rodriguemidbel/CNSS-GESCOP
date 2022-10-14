const planDAO = require('../dao/histoplan');

class PlanService {
  createHistoplan(PlanDto) {
    const { plan_id,statut,created_by } = PlanDto;
    return planDAO.createHistoplan(plan_id,statut,created_by);
  };
  getAllHistoplan() {
    return planDAO.getAllHistoplan();
  };
  getOneHistoplan(id) {
    return planDAO.getOneHistoplan(id);
  };
  removeHistoplan(id) {
    return planDAO.removeHistoplan(id);
  };
  updateHistoplan(id,changes) {
    return planDAO.updateHistoplan(id,changes);
  };

  findHistoplan(annee){
    return planDAO.findHistoplan(annee);
  };
  
}

module.exports = new PlanService();