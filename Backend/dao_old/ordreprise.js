const db = require('../db/db');

class OrdrepriseDAO {
  async createOrdreprise(marche_id,ordsuspension_id,ref,date_reprise,date_prob_fin,delai_couru,delai_restant,charge_notif,charge_notif_titre) {
    const [id] = await db('ordreprises')
      .insert({
        marche_id,
        ordsuspension_id,
        ref,
        date_reprise,
        date_prob_fin,
        delai_couru,
        delai_restant,
        charge_notif,
        charge_notif_titre
      })
      .returning('id');

    return id;
  };

 /* async getAllDossier() {
    return await db('ordreprises');
  };*/
  async getAllOrdreprise() {
    return await db('ordreprises')
      .join('marches', 'marches.id', 'ordreprises.marche_id')
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
        'ordreprises.id as id',
        'ordreprises.ref as ref',
        'ordreprises.ordsuspension_id as ordsuspension_id',
        'ordreprises.date_reprise as date_reprise',
        'ordreprises.date_prob_fin as date_prob_fin',
        'ordreprises.charge_notif as charge_notif',
        'ordreprises.charge_notif_titre as charge_notif_titre',
        'ordreprises.delai_couru as delai_couru',
        'ordreprises.delai_restant as delai_restant'
      )
  };

  async getOneOrdreprise(id) {
    return await db('ordreprises').where({id}).first();
  };

  async removeOrdreprise(id) {
    return await db('ordreprises').where({id}).del();
  };

  async updateOrdreprise(id,changes) {
    return await db('ordreprises').where({id}).update(changes)
    .then(() =>{
      return db('ordreprises').where({id}).first();
    });
  };

  async findOrdreprise(marche_id) {
    return await db('ordreprises')
    .join('marches', 'marches.id', 'ordreprises.marche_id')
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
        'ordreprises.id as id',
        'ordreprises.ref as ref',
        'ordreprises.ordsuspension_id as ordsuspension_id',
        'ordreprises.date_reprise as date_reprise',
        'ordreprises.date_prob_fin as date_prob_fin',
        'ordreprises.charge_notif as charge_notif',
        'ordreprises.charge_notif_titre as charge_notif_titre',
        'ordreprises.delai_couru as delai_couru',
        'ordreprises.delai_restant as delai_restant'
    )
    .where({marche_id})
  };

   /*----------------*/
   async countOrdreprise(marche_id) {
    return await db('ordreprises')
    .join('marches', 'marches.id', 'ordreprises.marche_id')
    .count('ordreprises.id as nbr')
    .where({marche_id})
  };

 
}

module.exports = new OrdrepriseDAO();