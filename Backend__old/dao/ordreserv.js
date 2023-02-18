const db = require('../db/db');

class OrdreservDAO {
  async createOrdreserv(marche_id,ref,date_notif,date_demarrage,charge_notif,charge_notif_titre,delai_couru,delai_restant,ordre) {
    const [id] = await db('ordreservs')
      .insert({
        marche_id,
        ref,
        date_notif,
        date_demarrage,
        charge_notif,
        charge_notif_titre,
        delai_couru,
        delai_restant,
        ordre
      })
      .returning('id');

    return id;
  };

 /* async getAllDossier() {
    return await db('ordreservs');
  };*/
  async getAllOrdreserv() {
    return await db('ordreservs')
      .join('marches', 'marches.id', 'ordreservs.marche_id')
      .join('fournisseurs', 'fournisseurs.id', 'marches.fournisseur_id')
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
        'ordreservs.id as id',
        'ordreservs.ref as ref',
        'ordreservs.date_notif as date_notif',
        'ordreservs.date_demarrage as date_demarrage',
        'ordreservs.charge_notif as charge_notif',
        'ordreservs.charge_notif_dist as charge_notif_dist',
        'ordreservs.delai_couru as delai_couru',
        'ordreservs.delai_restant as delai_restant',
        'ordreservs.ordre as ordre'
      )
  };

  async getOneOrdreserv(id) {
    return await db('ordreservs').where({id}).first();
  };

  async removeOrdreserv(id) {
    return await db('ordreservs').where({id}).del();
  };

  async updateOrdreserv(id,changes) {
    return await db('ordreservs').where({id}).update(changes)
    .then(() =>{
      return db('ordreservs').where({id}).first();
    });
  };

  async findOrdreserv(marche_id) {
    return await db('ordreservs')
    .join('marches', 'marches.id', 'ordreservs.marche_id')
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
      'ordreservs.id as id',
      'ordreservs.ref as ref',
      'ordreservs.date_notif as date_notif',
      'ordreservs.date_demarrage as date_demarrage',
      'ordreservs.charge_notif as charge_notif',
      'ordreservs.charge_notif_dist as charge_notif_dist',
      'ordreservs.delai_couru as delai_couru',
      'ordreservs.delai_restant as delai_restant',
      'ordreservs.ordre as ordre'
    )
    .where({marche_id})
  };

   /*-------------
   async countOrdreserv(annee) {
    return await db('ordreservs')
    .join('marches', 'marches.id', 'ordreservs.marche_id')
    .join('dossiers', 'dossiers.id', 'marches.dossier_id')
    .join('planitems', 'planitems.id', 'dossiers.planitem_id')
    .join('plans', 'plans.id', 'planitems.plan_id')
    .count('ordreservs.id as nbr')
    .where({annee})
  };---*/


  async countOrdreserv(marche_id) {
    return await db('ordreservs')
    .join('marches', 'marches.id', 'ordreservs.marche_id')
    .count('ordreservs.id as nbr')
    .where({marche_id})
  };

 
}

module.exports = new OrdreservDAO();