const db = require('../db/db');

class OrdrepriseDAO {
  async createOrdreprise(marche_id,ref,date_notif,date_reprise,charge_notif,charge_notif_dist,ordre) {
    const [id] = await db('ordreprises')
      .insert({
        marche_id,
        ref,
        date_notif,
        date_reprise,
        charge_notif,
        charge_notif_dist,
        ordre
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
      .join('fournisseurs', 'fournisseurs.id', 'marches.attributaire')
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
        'fournisseurs.telephone1 as telephone1',
        'fournisseurs.telephone2 as telephone2',
        'fournisseurs.adresse as adresse',
        'fournisseurs.nom_four as nom_four',
        'fournisseurs.rccm as rccm',
        'fournisseurs.ifu as ifu',
        'fournisseurs.num_employeur as num_employeur',
        'fournisseurs.titre_resp as titre_resp',
        'fournisseurs.nom_prenom_resp as nom_prenom_resp',
        'ordreprises.id as id',
        'ordreprises.ref as ref',
        'ordreprises.objet as objet',
        'ordreprises.date_notif as date_notif',
        'ordreprises.date_reprise as date_reprise',
        'ordreprises.charge_notif as charge_notif',
        'ordreprises.charge_notif_dist as charge_notif_dist',
        'ordreprises.ordre as ordre'
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
    .join('fournisseurs', 'fournisseurs.id', 'marches.attributaire')
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
      'fournisseurs.telephone1 as telephone1',
      'fournisseurs.telephone2 as telephone2',
      'fournisseurs.adresse as adresse',
      'fournisseurs.nom_four as nom_four',
      'fournisseurs.rccm as rccm',
      'fournisseurs.ifu as ifu',
      'fournisseurs.num_employeur as num_employeur',
      'fournisseurs.titre_resp as titre_resp',
      'fournisseurs.nom_prenom_resp as nom_prenom_resp',
      'ordreprises.id as id',
      'ordreprises.ref as ref',
      'ordreprises.objet as objet',
      'ordreprises.date_notif as date_notif',
      'ordreprises.date_reprise as date_reprise',
      'ordreprises.charge_notif as charge_notif',
      'ordreprises.charge_notif_dist as charge_notif_dist',
      'ordreprises.ordre as ordre'
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