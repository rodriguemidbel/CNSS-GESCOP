const planDAO = require('../dao/plan');

class PlanService {
  createPlan(PlanDto) {
    const { annee,libelle,date_plan,statut,created_by,created_at } = PlanDto;
    return planDAO.createPlan(annee,libelle,date_plan,statut,created_by,created_at);
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

  findPlanByStatut(statut){
    return planDAO.findPlanByStatut(statut);
  };
  
}

module.exports = new PlanService();