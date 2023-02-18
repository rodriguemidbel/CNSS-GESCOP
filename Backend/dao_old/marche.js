const db = require('../db/db');

class MarcheDAO {
  async createMarche(dossier_id,
                      num_ref,
                      notification_id,
                      objet,
                      fournisseur_id,
                      lot_id,
                      montant,
                      montant_min,
                      montant_max,
                      delai,
                      date_rem_sign,
                      date_retour_sign,
                      date_trans_visa,
                      date_retour_visa,
                      date_envoi_appro,
                      date_appro,
                      date_notif,
                      date_rem_enr,
                      date_retour_enr,
                      num_visa,
                      marche){
    const [id] = await db('marches')
      .insert({
        dossier_id,
        num_ref,
        notification_id,
        objet,
        fournisseur_id,
        lot_id,
        montant,
        montant_min,
        montant_max,
        delai,
        date_rem_sign,
        date_retour_sign,
        date_trans_visa,
        date_retour_visa,
        date_envoi_appro,
        date_appro,
        date_notif,
        date_rem_enr,
        date_retour_enr,
        num_visa,
        marche
      })
      .returning('id');

    return id;
  };

 /* async getAllDossier() {
    return await db('marches');
  };*/
  async getAllMarche() {
    return await db('marches')
      .join('dossiers', 'dossiers.id', 'marches.dossier_id')
      .join('fournisseurs','fournisseurs.id','marches.fournisseur_id')
      .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'fournisseurs.id as fourID',
        'fournisseurs.raison_sociale as raison_sociale',
        'marches.id as id',
        'marches.num_ref as num_ref',
        'marches.objet as objet',
        'marches.montant as montant',
        'marches.montant_min as montant_min',
        'marches.montant_max as montant_max',
        'marches.delai as delai',
        'marches.date_rem_sign as date_rem_sign',
        'marches.date_retour_sign as date_retour_sign',
        'marches.date_trans_visa as date_trans_visa',
        'marches.date_retour_visa as date_retour_visa',
        'marches.date_envoi_appro as date_envoi_appro',
        'marches.date_appro as date_appro',
        'marches.date_notif as date_notif',
        'marches.date_rem_enr as date_rem_enr',
        'marches.date_retour_enr as date_retour_enr',
        'marches.num_visa as num_visa',
        'marches.marche as marche'
      )
  };

  async getOneMarche(id) {
    return await db('marches')
    .where({id}).first();
  };

  async removeMarche(id) {
    return await db('marches').where({id}).del();
  };

  async updateMarche(id,changes) {
    return await db('marches').where({id}).update(changes)
    .then(() =>{
      return db('marches').where({id}).first();
    });
  };

  async findMarche(dossier_id) {
    return await db('marches')
    .join('dossiers', 'dossiers.id', 'marches.dossier_id')
      .join('fournisseurs','fournisseurs.id','marches.fournisseur_id')
      .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'fournisseurs.id as fourID',
        'fournisseurs.raison_sociale as raison_sociale',
        'marches.id as id',
        'marches.num_ref as num_ref',
        'marches.objet as objet',
        'marches.montant as montant',
        'marches.montant_min as montant_min',
        'marches.montant_max as montant_max',
        'marches.delai as delai',
        'marches.date_rem_sign as date_rem_sign',
        'marches.date_retour_sign as date_retour_sign',
        'marches.date_trans_visa as date_trans_visa',
        'marches.date_retour_visa as date_retour_visa',
        'marches.date_envoi_appro as date_envoi_appro',
        'marches.date_appro as date_appro',
        'marches.date_notif as date_notif',
        'marches.date_rem_enr as date_rem_enr',
        'marches.date_retour_enr as date_retour_enr',
        'marches.num_visa as num_visa',
        'marches.marche as marche'
      )
      .where({dossier_id})
  };
  /*----------------*/
  async countMarche(annee) {
    return await db('marches')
    .join('dossiers', 'dossiers.id', 'marches.dossier_id')
    .join('planitems', 'planitems.id', 'dossiers.planitem_id')
    .join('plans', 'plans.id', 'planitems.plan_id')
    .count('dossiers.id as nbr')
    .where({annee})
    .orderBy('marches.id', 'asc')
  };

  async getMarche(dossier_id) {
    return await db('marches')
    .join('dossiers', 'dossiers.id', 'marches.dossier_id')
    .join('planitems', 'planitems.id', 'dossiers.planitem_id')
    .join('plans', 'plans.id', 'planitems.plan_id')
    .select(
      'plans.annee as annee',
      'plans.statut as statut',
      'planitems.budget as budget',
      'planitems.imputation as imputation',
      'planitems.montant_estime as montant_estime',
      'planitems.montant_depense as montant_depense',
      'planitems.credit as credit',
      'planitems.designation as designation',
      'planitems.nbr_lot as nbr_lot',
      'planitems.mode as mode',
      'planitems.periode_lanc as periode_lanc',
      'planitems.periode_reel_lanc as periode_reel_lanc',
      'planitems.periode_remise as periode_remise',
      'planitems.periode_reel_remise as periode_reel_remise',
      'planitems.temp as temp',
      'planitems.temp_reel as temp_reel',
      'planitems.date_prob_demarrage as date_prob_demarrage',
      'planitems.delai_exe as delai_exe',
      'planitems.date_prob_fin as date_prob_fin',
      'planitems.date_reel_fin as date_reel_fin',
      'planitems.localisation_id as localisation_id',
      'planitems.type_id as type_id',
      'planitems.gestionnaire as gestionnaire',    
      'dossiers.id as id',
      'dossiers.numero_doss as numero_doss',
      'dossiers.intitule_doss as intitule_doss',
      'dossiers.date_trans_sign as date_trans_sign',
      'dossiers.date_retour_sign as date_retour_sign',
      'dossiers.date_trans_dgcmef as date_trans_dgcmef',
      'marches.date_fin as date_fin',
      'marches.dossier_id'
    )
    .where({dossier_id})
  };

 
}

module.exports = new MarcheDAO();