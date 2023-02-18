const planDAO = require('../dao/plan');

class PlanService {
  createPlan(PlanDto) {
    const { annee,libelle,date_plan,statut,created_by,modified_by } = PlanDto;
    return planDAO.createPlan(annee,libelle,date_plan,statut,created_by,modified_by);
  };
  getAllPlan() {
    return planDAO.getAllPlan();
  };
  getOnePlan(id) {
    return planDAO.getOnePlan(id);
  };
  removePlan(id) {
    return planDAO.removePlan(id);
  };
  updatePlan(id,changes) {
    return planDAO.updatePlan(id,changes);
  };

  findPlan(annee){
    return planDAO.findPlan(annee);
  };
  
}

module.exports = new PlanService();