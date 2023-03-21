const db = require('../db/db');
var commonUtils = require('../common/common.utils');

class OrdsuspenDAO {
  async createOrdsuspen(marche_id,ordreserv_id,ref,date_suspension,lettre_demande,notif_suspension,motif,delai_couru,delai_restant,charge_notif,charge_notif_titre) {
    const [id] = await db('ordsuspensions')
      .insert({
        marche_id,
        ordreserv_id,
        ref,
        date_suspension : date_suspension,
        lettre_demande,
        notif_suspension,
        motif,
        delai_couru,
        delai_restant,
        charge_notif,
        charge_notif_titre
      })
      .returning('id');

    return id;
  };

 /* async getAllDossier() {
    return await db('ordsuspensions');
  };*/
  async getAllOrdsuspen() {
    return await db('ordsuspensions')
      .join('marches', 'marches.id', 'ordsuspensions.marche_id')
      .join('dossiers', 'dossiers.id', 'marches.dossier_id')
      .join('planitems', 'planitems.id', 'dossiers.planitem_id')
      .join('plans', 'plans.id', 'planitems.plan_id')
      .select(
        'plans.annee as annee',
        'planitems.budget as budget',
        'marches.dossier_id as dossier_id',
        'marches.num_ref as num_ref',
        'marches.objet as objet',
        'marches.montant as montant',
        'marches.montant_lettre as montant_lettre',
        'marches.delai as delai',
        'marches.delai_lettre as delai_lettre',
        'marches.date_fin as date_fin',
        'ordsuspensions.id as id',
        'ordsuspensions.ref as ref',
        'ordsuspensions.ordreserv_id as ordreserv_id',
        'ordsuspensions.date_suspension as date_suspension',
        'ordsuspensions.lettre_demande as lettre_demande',
        'ordsuspensions.notif_suspension as notif_suspension',
        'ordsuspensions.motif as motif',
        'ordsuspensions.delai_couru as delai_couru',
        'ordsuspensions.delai_restant as delai_restant',
        'ordsuspensions.charge_notif as charge_notif',
        'ordsuspensions.charge_notif_titre as charge_notif_titre'
   
      )
  };

  async getOneOrdsuspen(id) {
    return await db('ordsuspensions').where({id}).first();
  };

  async removeOrdsuspen(id) {
    return await db('ordsuspensions').where({id}).del();
  };

  async updateOrdsuspen(id,changes) {

    return await db('ordsuspensions').where({id}).update(changes)
    .then(() =>{
      return db('ordsuspensions').where({id}).first();
    });
  };

  async findOrdsuspen(marche_id) {
    return await db('ordsuspensions')
    .join('marches', 'marches.id', 'ordsuspensions.marche_id')
    .join('dossiers', 'dossiers.id', 'marches.dossier_id')
    .join('planitems', 'planitems.id', 'dossiers.planitem_id')
    .join('plans', 'plans.id', 'planitems.plan_id')
    .select(
      'plans.annee as annee',
      'planitems.budget as budget',
      'marches.dossier_id as dossier_id',
      'marches.num_ref as num_ref',
      'marches.objet as objet',
      'marches.montant as montant',
      'marches.delai as delai',
      'ordsuspensions.id as id',
      'ordsuspensions.ref as ref',
      'ordsuspensions.ordreserv_id as ordreserv_id',
      'ordsuspensions.date_suspension as date_suspension',
      'ordsuspensions.lettre_demande as lettre_demande',
      'ordsuspensions.notif_suspension as notif_suspension',
      'ordsuspensions.motif as motif',
      'ordsuspensions.delai_couru as delai_couru',
      'ordsuspensions.delai_restant as delai_restant',
      'ordsuspensions.charge_notif as charge_notif',
      'ordsuspensions.charge_notif_titre as charge_notif_titre'
    )
    .where({marche_id})
  };

    /*----------------*/
    async countOrdsuspen(marche_id) {
      return await db('ordsuspensions')
      .join('marches', 'marches.id', 'ordsuspensions.marche_id')
      .count('ordsuspensions.id as nbr')
      .where({marche_id})
    };
 
}

module.exports = new OrdsuspenDAO();