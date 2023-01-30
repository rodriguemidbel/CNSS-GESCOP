const db = require('../db/db');

class PlanitemDAO {
    
  async createPlanitem(plan_id,num_ordre,budget,imputation,montant_estime,montant_depense,credit,designation,nbr_lot,
    mode,date_lanc,date_remise,temp,date_prob_demarrage,delai_exe,date_prob_fin,gestionnaire,ppm,type_id,
    localisation_id) {
    const [id] = await db('planitems')
      .insert({
        plan_id,
        num_ordre,
        budget,
        imputation,
        montant_estime,
        montant_depense,
        credit,
        designation,
        nbr_lot,
        mode,
        date_lanc,
        date_remise,
        temp,
        date_prob_demarrage,
        delai_exe,
        date_prob_fin,
        gestionnaire,
        ppm,
        type_id,
        localisation_id

      })
      .returning('id');
    return id;
  };

  async getAllPlanitem() {
    return await db('planitems')
    .join('plans', 'plans.id', 'planitems.plan_id')
    .join('types', 'types.id', 'planitems.type_id')
    .join('localisations', 'localisations.id', 'planitems.localisation_id')
    .join('modes', 'modes.id', 'planitems.mode')
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
      'planitems.ppm as ppm',
      'modes.id as mode_id',
      'modes.libelle as mode',
      'types.id as type_id',
      'types.libelle as type',
      'localisations.id as localisation_id',
      'localisations.sigle as localisation'
    )
    .orderBy([
      { column: 'planitems.localisation_id', order: 'asc'}, 
      { column: 'planitems.type_id', order: 'asc' },
      { column: 'planitems.num_ordre', order: 'asc' }


    ])
  };

 /* async getOnePlanitem(id) {
    return await db('planitems')
      .join('plans', 'plans.id', 'planitems.plan_id')
      .join('types', 'types.id', 'planitems.type_id')
      .join('localisations', 'localisations.id', 'planitems.localisation_id')
      .select(
        'planitems.plan_id as planID',
        'plans.annee as annee',
        'planitems.id as id',
        'planitems.budget as budget',
        'planitems.imputation as imputation',
        'planitems.montant_estime as montant_estime',
        'planitems.montant_depense as montant_depense',
        'planitems.credit as credit',
        'planitems.designation as designation',
        'planitems.nbr_lot as nbr_lot',
        'planitems.mode as mode',
        'planitems.periode_lanc as periode_lanc',
        'planitems.periode_remise as periode_remise',
        'planitems.temp as temp',
        'planitems.date_prob_demarrage as date_prob_demarrage',
        'planitems.delai_exe as delai_exe',
        'planitems.date_prob_fin as date_prob_fin',
        'planitems.gestionnaire as gestionnaire',
        'planitems.type_id as type_id',
        'types.libelle as type',
        'planitems.localisation_id as localisation_id',
        'localisations.sigle as localisation',
        'planitems.ppm as ppm'
      )
      .where({id}).first();
  };*/
  /*async getAllPlanitem() {
    return await db('planitems');
  };*/

  async getOnePlanitem(id) {
    return await db('planitems')
    .where({id}).first();
  };

  async removePlanitem(id) {
    return await db('planitems').where({id}).del();
  };

  async updatePlanitem(id,changes) {
    return await db('planitems').where({id}).update(changes)
    .then(() =>{
      return db('planitems').where({id}).first();
    });
  };

  async findPlanitem(annee) {
   return await db('planitems')
   .join('plans', 'plans.id', 'planitems.plan_id')
   .join('types', 'types.id', 'planitems.type_id')
   .join('localisations', 'localisations.id', 'planitems.localisation_id')
   .join('modes', 'modes.id', 'planitems.mode')
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
     'planitems.ppm as ppm',
     'modes.id as mode_id',
     'modes.libelle as mode',
     'types.id as type_id',
     'types.libelle as type',
     'localisations.id as localisation_id',
     'localisations.sigle as localisation'
   )
    .where({annee})
    .orderBy([
      { column: 'planitems.localisation_id', order: 'asc'}, 
        { column: 'planitems.type_id', order: 'asc' },
        { column: 'planitems.num_ordre', order: 'asc' }

    ])             
  };

  async findLigneByPlanID(plan_id) {
    return await db('planitems')
    .join('plans', 'plans.id', 'planitems.plan_id')
    .join('types', 'types.id', 'planitems.type_id')
    .join('localisations', 'localisations.id', 'planitems.localisation_id')
    .join('modes', 'modes.id', 'planitems.mode')
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
      'planitems.ppm as ppm',
      'modes.id as mode_id',
      'modes.libelle as mode',
      'types.id as type_id',
      'types.libelle as type',
      'localisations.id as localisation_id',
      'localisations.sigle as localisation'
    )
     .where({plan_id})
     .orderBy([
       { column: 'planitems.localisation_id', order: 'asc'}, 
         { column: 'planitems.type_id', order: 'asc' },
         { column: 'planitems.num_ordre', order: 'asc' }
 
     ])             
   };
  /*-----------*/
  async findPlanitemByLoc(plan_id,localisation_id) {
    return await db('planitems')
    .join('plans', 'plans.id', 'planitems.plan_id')
    .join('types', 'types.id', 'planitems.type_id')
    .join('localisations', 'localisations.id', 'planitems.localisation_id')
    .join('modes', 'modes.id', 'planitems.mode')
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
      'planitems.ppm as ppm',
      'modes.id as mode_id',
      'modes.libelle as mode',
      'types.id as type_id',
      'types.libelle as type',
      'localisations.id as localisation_id',
      'localisations.sigle as localisation'
    )
     .where({plan_id,localisation_id})
     .orderBy([
        { column: 'planitems.localisation_id', order: 'asc'}, 
        { column: 'planitems.type_id', order: 'asc' },
        { column: 'planitems.num_ordre', order: 'asc' }
 
     ])             
   };
   /*--------
  /*
   knex('users')
  .whereLike('email', '%mail%')
  .andWhereLike('email', '%.com')
  .orWhereLike('email', '%name%')
  */

  async countPlanitem(plan_id,localisation_id,type_id) {
    return await db('planitems')
    .count('planitems.id as nbr')
    .where({plan_id,localisation_id,type_id})
  };

}

module.exports = new PlanitemDAO();
