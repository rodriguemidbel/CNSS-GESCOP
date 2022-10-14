const db = require('../db/db');

class DossierDAO {
  async createDossier(planitem_id,numero_doss,intitule_doss,date_trans_sign,date_retour_sign,
    date_trans_dgcmef,taux_reception,niveau_traitement,taux_avencement,dossier,statut,created_by,modified_by) {
    const [id] = await db('dossiers')
      .insert({
        planitem_id,
        numero_doss,
        intitule_doss,
        date_trans_sign,
        date_retour_sign,
        date_trans_dgcmef,
        taux_reception,
        niveau_traitement,
        taux_avencement,
        dossier,
        statut,
        created_by,
        modified_by
      })
      .returning('id');

    return id;
  };

  
  async getAllDossier() {
    return await db('dossiers')
    .join('planitems', 'planitems.id', 'dossiers.planitem_id')
    .join('plans', 'plans.id', 'planitems.plan_id')
    .select(
      'plans.id as planID',
      'plans.annee as annee',
      'plans.statut as statut',
      'planitems.id as planitemid',
      'planitems.num_ordre as num_ordre',
      'planitems.budget as budget',
      'planitems.imputation as imputation',
      'planitems.montant_estime as montant_estime',
      'planitems.montant_depense as montant_depense',
      'planitems.credit as credit',
      'planitems.designation as designation',
      'planitems.nbr_lot as nbr_lot',
      'planitems.mode as mode',
      'planitems.date_lanc as periode_lanc',
      'planitems.date_reel_lanc as periode_reel_lanc',
      'planitems.date_remise as periode_remise',
      'planitems.date_reel_remise as periode_reel_remise',
      'planitems.temp as temp',
      'planitems.temp_reel as temp_reel',
      'planitems.date_prob_demarrage as date_prob_demarrage',
      'planitems.date_reel_demarrage as date_reel_demarrage',
      'planitems.delai_exe as delai_exe',
      'planitems.delai_reel_exe as delai_reel_exe',
      'planitems.date_prob_fin as date_prob_fin',
      'planitems.date_reel_fin as date_reel_fin',
      'planitems.gestionnaire as gestionnaire',    
      'dossiers.id as id',
      'dossiers.numero_doss as numero_doss',
      'dossiers.intitule_doss as intitule_doss',
      'dossiers.date_trans_sign as date_trans_sign',
      'dossiers.date_retour_sign as date_retour_sign',
      'dossiers.date_trans_dgcmef as date_trans_dgcmef',
      'dossiers.dossier as dossier',
      'dossiers.statut as statut'
     
    )
  };

  async getOneDossier(id) {
    return await db('dossiers').where({id}).first();
  };

  async getDossier(id) {
    return await db('dossiers')
    .join('planitems', 'planitems.id', 'dossiers.planitem_id')
    .join('plans', 'plans.id', 'planitems.plan_id')
    .select(
      'plans.id as planid',
      'plans.annee as annee',
      'plans.statut as statut',
      'planitems.id as id',
     'planitems.num_ordre as num_ordre',
     'planitems.budget as budget',
     'planitems.imputation as imputation',
     'planitems.montant_estime as montant_estime',
     'planitems.montant_depense as montant_depense',
     'planitems.credit as credit',
     'planitems.designation as designation',
     'planitems.nbr_lot as nbr_lot',
     'planitems.mode as mode',
     'planitems.date_lanc as periode_lanc',
     'planitems.date_reel_lanc as periode_reel_lanc',
     'planitems.date_remise as periode_remise',
     'planitems.date_reel_remise as periode_reel_remise',
     'planitems.temp as temp',
     'planitems.temp_reel as temp_reel',
     'planitems.date_prob_demarrage as date_prob_demarrage',
     'planitems.date_reel_demarrage as date_reel_demarrage',
     'planitems.delai_exe as delai_exe',
     'planitems.delai_reel_exe as delai_reel_exe',
     'planitems.date_prob_fin as date_prob_fin',
     'planitems.date_reel_fin as date_reel_fin',
     'planitems.gestionnaire as gestionnaire',    
      'dossiers.id as id',
      'dossiers.numero_doss as numero_doss',
      'dossiers.intitule_doss as intitule_doss',
      'dossiers.date_trans_sign as date_trans_sign',
      'dossiers.date_retour_sign as date_retour_sign',
      'dossiers.date_trans_dgcmef as date_trans_dgcmef',
      'dossiers.dossier as dossier',
    )

    .where({id});
  };

  async removeDossier(id) {
    return await db('dossiers').where({id}).del();
  };

  async updateDossier(id,changes) {
    return await db('dossiers').where({id}).update(changes)
    .then(() =>{
      return db('dossiers').where({id}).first();
    });
  };

  async findDossier(annee) {
       return await db('dossiers')
       .join('planitems', 'planitems.id', 'dossiers.planitem_id')
       .join('plans', 'plans.id', 'planitems.plan_id')
       .select(
        'plans.id as planid',
        'plans.annee as annee',
        'plans.statut as statut',
        'planitems.id as planitemid',
        'planitems.num_ordre as num_ordre',
        'planitems.budget as budget',
        'planitems.imputation as imputation',
        'planitems.montant_estime as montant_estime',
        'planitems.montant_depense as montant_depense',
        'planitems.credit as credit',
        'planitems.designation as designation',
        'planitems.nbr_lot as nbr_lot',
        'planitems.mode as mode',
        'planitems.date_lanc as periode_lanc',
        'planitems.date_reel_lanc as periode_reel_lanc',
        'planitems.date_remise as periode_remise',
        'planitems.date_reel_remise as periode_reel_remise',
        'planitems.temp as temp',
        'planitems.temp_reel as temp_reel',
        'planitems.date_prob_demarrage as date_prob_demarrage',
        'planitems.date_reel_demarrage as date_reel_demarrage',
        'planitems.delai_exe as delai_exe',
        'planitems.delai_reel_exe as delai_reel_exe',
        'planitems.date_prob_fin as date_prob_fin',
        'planitems.date_reel_fin as date_reel_fin',
        'planitems.gestionnaire as gestionnaire',    
        'dossiers.id as id',
        'dossiers.numero_doss as numero_doss',
        'dossiers.intitule_doss as intitule_doss',
        'dossiers.date_trans_sign as date_trans_sign',
        'dossiers.date_retour_sign as date_retour_sign',
        'dossiers.date_trans_dgcmef as date_trans_dgcmef',
        'dossiers.dossier as dossier'
    )
    .where({annee})
    .orderBy('dossiers.id', 'asc')
  };


  async findDossierByType(annee,type_id) {
    return await db('dossiers')
    .join('planitems', 'planitems.id', 'dossiers.planitem_id')
    .join('plans', 'plans.id', 'planitems.plan_id')
    .select(
     'plans.id as planid',
     'plans.annee as annee',
     'plans.statut as statut',
     'planitems.id as planitemid',
     'planitems.num_ordre as num_ordre',
     'planitems.budget as budget',
     'planitems.imputation as imputation',
     'planitems.montant_estime as montant_estime',
     'planitems.montant_depense as montant_depense',
     'planitems.credit as credit',
     'planitems.designation as designation',
     'planitems.nbr_lot as nbr_lot',
     'planitems.mode as mode',
     'planitems.date_lanc as periode_lanc',
     'planitems.date_reel_lanc as periode_reel_lanc',
     'planitems.date_remise as periode_remise',
     'planitems.date_reel_remise as periode_reel_remise',
     'planitems.temp as temp',
     'planitems.temp_reel as temp_reel',
     'planitems.date_prob_demarrage as date_prob_demarrage',
     'planitems.date_reel_demarrage as date_reel_demarrage',
     'planitems.delai_exe as delai_exe',
     'planitems.delai_reel_exe as delai_reel_exe',
     'planitems.date_prob_fin as date_prob_fin',
     'planitems.date_reel_fin as date_reel_fin',
     'planitems.gestionnaire as gestionnaire', 
     'planitems.type_id as type_id',
     'dossiers.id as id',
     'dossiers.numero_doss as numero_doss',
     'dossiers.intitule_doss as intitule_doss',
     'dossiers.date_trans_sign as date_trans_sign',
     'dossiers.date_retour_sign as date_retour_sign',
     'dossiers.date_trans_dgcmef as date_trans_dgcmef',
     'dossiers.dossier as dossier'
 )
 .where({annee,type_id})
 .orderBy('dossiers.id', 'asc')
};

  async countDossier(annee) {
    return await db('dossiers')
    .join('planitems', 'planitems.id', 'dossiers.planitem_id')
    .join('plans', 'plans.id', 'planitems.plan_id')
    .count('dossiers.id as nbr')
    .where({annee})
  };

 
}

module.exports = new DossierDAO();
