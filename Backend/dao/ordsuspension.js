const db = require('../db/db');

class OrdsuspenDAO {
  async createOrdsuspen(marche_id,ref,date_notif,date_suspension,charge_notif,charge_notif_dist,ordre) {
    const [id] = await db('ordsuspensions')
      .insert({
        marche_id,
        ref,
        date_notif,
        date_suspension,
        charge_notif,
        charge_notif_dist,
        ordre
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
        'ordsuspensions.id as id',
        'ordsuspensions.ref as ref',
        'ordsuspensions.objet as objet',
        'ordsuspensions.date_notif as date_notif',
        'ordsuspensions.date_suspension as date_suspension',
        'ordsuspensions.charge_notif as charge_notif',
        'ordsuspensions.charge_notif_dist as charge_notif_dist',
        'ordsuspensions.ordre as ordre'
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
      'ordsuspensions.id as id',
      'ordsuspensions.ref as ref',
      'ordsuspensions.objet as objet',
      'ordsuspensions.date_notif as date_notif',
      'ordsuspensions.date_suspension as date_suspension',
      'ordsuspensions.charge_notif as charge_notif',
      'ordsuspensions.charge_notif_dist as charge_notif_dist',
      'ordsuspensions.ordre as ordre'
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