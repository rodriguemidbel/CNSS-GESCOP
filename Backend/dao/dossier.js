const db = require('../db/db');
var commonUtils = require('../common/common.utils');

class DossierDAO {
  async createDossier(planitem_id,numero_doss,intitule_doss,date_trans_sign,date_retour_sign,
    date_trans_dgcmef,taux_reception,niveau_traitement,taux_avencement,ordre_cmd,dossier,dossier_2,dossier_3,statut,
    created_by,created_at) {
    const [id] = await db('dossiers')
      .insert({
        planitem_id : planitem_id,
        numero_doss : numero_doss,
        intitule_doss : intitule_doss,
        date_trans_sign : commonUtils.formatOracleDate2(date_trans_sign),
        date_retour_sign : commonUtils.formatOracleDate2(date_retour_sign),
        date_trans_dgcmef : commonUtils.formatOracleDate2(date_trans_dgcmef),
        taux_reception : taux_reception,
        niveau_traitement : niveau_traitement,
        taux_avencement : taux_avencement,
        ordre_cmd : ordre_cmd,
        dossier : dossier,
        dossier_2 : dossier_2,
        dossier_3 : dossier_3,
        statut : statut,
        created_by,
        created_at
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
      'dossiers.ordre_cmd as ordre_cmd',
      'dossiers.dossier as dossier',
      'dossiers.dossier_2 as dossier_2',
      'dossiers.dossier_3 as dossier_3',
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
     'plans.annee as annee',
     'plans.statut as statut',
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
     'planitems.localisation_id as localisation_id',    
     'dossiers.id as id',
      'dossiers.numero_doss as numero_doss',
      'dossiers.intitule_doss as intitule_doss',
      'dossiers.date_trans_sign as date_trans_sign',
      'dossiers.date_retour_sign as date_retour_sign',
      'dossiers.date_trans_dgcmef as date_trans_dgcmef',
      'dossiers.dossier as dossier',
      'dossiers.ordre_cmd as ordre_cmd'
    )

    .where({id});
  };

  async removeDossier(id) {
    return await db('dossiers').where({id}).del();
  };

  async updateDossier(id,changes) {

    changes['date_trans_sign'] = commonUtils.formatOracleDate2(changes['date_trans_sign']);
    changes['date_retour_sign'] = commonUtils.formatOracleDate2(changes['date_retour_sign']);
    changes['date_trans_dgcmef'] = commonUtils.formatOracleDate2(changes['date_trans_dgcmef']);

    return await db('dossiers').where({id}).update(changes)
    .then(() =>{
      return db('dossiers').where({id}).first();
    });
  };

  async findDossier(annee) {
       return await db('dossiers')
       .join('planitems', 'planitems.id', 'dossiers.planitem_id')
       .join('plans', 'plans.id', 'planitems.plan_id')
       .join('modes', 'modes.id', 'planitems.mode')
       .select(
        'plans.id as planid',
        'plans.annee as annee',
        'plans.statut as plan_statut',
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
        'planitems.localisation_id as localisation_id',
        'planitems.type_id as type_id',
        'modes.libelle as libelle',
        'dossiers.id as id',
        'dossiers.numero_doss as numero_doss',
        'dossiers.intitule_doss as intitule_doss',
        'dossiers.date_trans_sign as date_trans_sign',
        'dossiers.date_retour_sign as date_retour_sign',
        'dossiers.date_trans_dgcmef as date_trans_dgcmef',
        'dossiers.ordre_cmd as ordre_cmd',
        'dossiers.dossier as dossier',
        'dossiers.dossier_2 as dossier_2',
        'dossiers.dossier_3 as dossier_3',
        'dossiers.statut as statut'
    )
    .where({annee})
    
  };

  async findDossierByType(annee,type_id) {
    return await db('dossiers')
    .join('planitems', 'planitems.id', 'dossiers.planitem_id')
    .join('plans', 'plans.id', 'planitems.plan_id')
    .join('modes', 'modes.id', 'planitems.mode')
    .select(
      'plans.id as planid',
      'plans.annee as annee',
      'plans.statut as plan_statut',
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
      'planitems.localisation_id as localisation_id',
      'planitems.type_id as type_id',
      'modes.libelle as libelle',
      'dossiers.id as id',
      'dossiers.numero_doss as numero_doss',
      'dossiers.intitule_doss as intitule_doss',
      'dossiers.date_trans_sign as date_trans_sign',
      'dossiers.date_retour_sign as date_retour_sign',
      'dossiers.date_trans_dgcmef as date_trans_dgcmef',
      'dossiers.ordre_cmd as ordre_cmd',
      'dossiers.dossier as dossier',
      'dossiers.dossier_2 as dossier_2',
      'dossiers.dossier_3 as dossier_3',
      'dossiers.statut as statut'
 )
 .where({annee,type_id})
 
};

  async findDossierByLoca(annee,localisation_id) {
    return await db('dossiers')
    .join('planitems', 'planitems.id', 'dossiers.planitem_id')
    .join('plans', 'plans.id', 'planitems.plan_id')
    .join('modes', 'modes.id', 'planitems.mode')
    .select(
      'plans.id as planid',
      'plans.annee as annee',
      'plans.statut as plan_statut',
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
      'planitems.localisation_id as localisation_id',
      'planitems.type_id as type_id',
      'modes.libelle as libelle',
      'dossiers.id as id',
      'dossiers.numero_doss as numero_doss',
      'dossiers.intitule_doss as intitule_doss',
      'dossiers.date_trans_sign as date_trans_sign',
      'dossiers.date_retour_sign as date_retour_sign',
      'dossiers.date_trans_dgcmef as date_trans_dgcmef',
      'dossiers.ordre_cmd as ordre_cmd',
      'dossiers.dossier as dossier',
      'dossiers.dossier_2 as dossier_2',
      'dossiers.dossier_3 as dossier_3',
      'dossiers.statut as statut'
 )
 .where({annee,localisation_id})
 
};


  

async findDossierByLocaAndType(annee,type_id,localisation_id) {
  return await db('dossiers')
  .join('planitems', 'planitems.id', 'dossiers.planitem_id')
  .join('plans', 'plans.id', 'planitems.plan_id')
  .join('modes', 'modes.id', 'planitems.mode')
  .select(
   'plans.id as planid',
   'plans.annee as annee',
   'plans.statut as plan_statut',
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
   'planitems.localisation_id as localisation_id',
   'planitems.type_id as type_id',
   'modes.libelle as libelle',
   'dossiers.id as id',
   'dossiers.numero_doss as numero_doss',
   'dossiers.intitule_doss as intitule_doss',
   'dossiers.date_trans_sign as date_trans_sign',
   'dossiers.date_retour_sign as date_retour_sign',
   'dossiers.date_trans_dgcmef as date_trans_dgcmef',
   'dossiers.ordre_cmd as ordre_cmd',
   'dossiers.dossier as dossier',
   'dossiers.dossier_2 as dossier_2',
   'dossiers.dossier_3 as dossier_3',
   'dossiers.statut as statut'
)
.where({annee,type_id,localisation_id})

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
