const planitemDAO = require('../dao/planitem');

class planitemService {

  
  createPlanitem(PlanitemDto) {
    const { plan_id,num_ordre,budget,imputation,montant_estime,montant_depense,credit,designation,nbr_lot,
      mode,date_lanc,date_remise,temp,date_prob_demarrage,delai_exe,date_prob_fin,gestionnaire,ppm,type_id,
      localisation_id } = PlanitemDto;
    return planitemDAO.createPlanitem(plan_id,num_ordre,budget,imputation,montant_estime,montant_depense,credit,designation,nbr_lot,
      mode,date_lanc,date_remise,temp,date_prob_demarrage,delai_exe,date_prob_fin,gestionnaire,ppm,type_id,
      localisation_id);
  };
  getAllPlanitem() {
    return planitemDAO.getAllPlanitem();
  };
  getOnePlanitem(id) {
    return planitemDAO.getOnePlanitem(id);
  };
  removePlanitem(id) {
    return planitemDAO.removePlanitem(id);
  };
  updatePlanitem(id,changes) {
    return planitemDAO.updatePlanitem(id,changes);
  };

  findPlanitem(annee) {
    return planitemDAO.findPlanitem(annee);
  };

  findLigneByPlanID(plan_id) {
    return planitemDAO.findLigneByPlanID(plan_id);
  };

  findPlanitemByLoc(plan_id,localisation_id){
         return planitemDAO.findPlanitemByLoc(plan_id,localisation_id);
  };

  countPlanitem(plan_id,localisation_id,type_id){
    return planitemDAO.countPlanitem(plan_id,localisation_id,type_id);
};
}

module.exports = new planitemService();