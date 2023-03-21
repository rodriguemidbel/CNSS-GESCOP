const db = require('../db/db');
var commonUtils = require('../common/common.utils');

class OffreDAO {
  async createOffre( off_dossier_id,fournisseur_id,lot_id,montant,montant_ttc,montant_min,montant_min_ttc,montant_max,
    montant_max_ttc,delai_exe,rabais,condi,taux,date_depot,heure_depot,nom_prenom_dep,telephone_dep,banque,ref_caution,
    mnt_caution,created_by,created_at) {
    const [id] = await db('offres')
      .insert({
        off_dossier_id,
        fournisseur_id,
        lot_id,
        montant : montant,
        montant_ttc : montant_ttc,
        montant_min : montant_min,
        montant_min_ttc : montant_min_ttc,
        montant_max : montant_max,
        montant_max_ttc : montant_max_ttc,
        delai_exe,
        rabais,
        condi,
        taux,
        date_depot : date_depot,
        heure_depot,
        nom_prenom_dep,
        telephone_dep,
        banque,
        ref_caution,
        mnt_caution,
        created_by,
        created_at
      })
      .returning('id');

    return id;
  };

 /* async getAllDossier() {
    return await db('offres');
  };*/
  async getAllOffre(off_dossier_id) {
    return await db('offres')
      .join('dossiers', 'dossiers.id', 'offres.off_dossier_id')
      .join('lots', 'lots.id', 'offres.lot_id')
      .join('fournisseurs', 'fournisseurs.id', 'offres.fournisseur_id')
      .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'fournisseurs.raison_sociale as raison_sociale',
        'lots.num_lot as num_lot',
        'lots.intitule_lot as intitule_lot',
        'offres.id as id',
        'offres.fournisseur_id as fournisseur_id',
        'offres.lot_id as lot_id',
        'offres.montant as montant',
        'offres.montant_ttc as montant_ttc',
        'offres.montant_min as montant_min',
        'offres.montant_min_ttc as montant_min_ttc',
        'offres.montant_max as montant_max',
        'offres.montant_max_ttc as montant_max_ttc',
        'offres.delai_exe as delai_exe',
        'offres.date_depot as date_depot',
        'offres.heure_depot as heure_depot',
        'offres.nom_prenom_dep as nom_prenom_dep',
        'offres.telephone_dep as telephone_dep',
        'offres.banque as banque',
        'offres.ref_caution as ref_caution',
        'offres.mnt_caution as mnt_caution',
        'offres.rabais as rabais',
        'offres.condi as condi',
        'offres.taux as taux',
      )
      .where({off_dossier_id})
      .orderBy('offres.date_depot','asc')
      .orderBy('offres.heure_depot','asc')
  };

  async getOneOffre(id) {
    return await db('offres').where({id}).first();
  };

  async removeOffre(id) {
    return await db('offres').where({id}).del();
  };

  async updateOffre(id,changes) {

    return await db('offres').where({id}).update(changes)
    .then(() =>{
      return db('offres').where({id}).first();
    });
  };

  async findOffre(off_dossier_id) {
    return await db('offres')
    .join('dossiers', 'dossiers.id', 'offres.off_dossier_id')
    .select(
      'dossiers.numero_doss as numero',
      'dossiers.intitule_doss as intitule',
      'offres.id as id',
      'offres.fournisseur_id as fournisseur_id',
      'offres.lot_id as lot_id',
      'offres.montant as montant_offre',
      'offres.montant_min as montant_min',
      'offres.montant_max as montant_max',
      'offres.delai_exe as delai_exe',
      'offres.date_depot as date_depot',
      'offres.heure_depot as heure_depot',
      'offres.nom_prenom_dep as nom_prenom_dep',
      'offres.telephone_dep as telephone_dep',
      'offres.banque as banque',
      'offres.ref_caution as ref_caution',
      'offres.mnt_caution as mnt_caution'
    )
    .where({off_dossier_id})
  };

  async getOffreById(id) {
    return await db('offres')
    .join('fournisseurs','fournisseurs.id','offres.fournisseur_id')
    .join('lots','lots.id','offres.lot_id')
    .select(
      'offres.fournisseur_id as fournisseur_id',
      'fournisseurs.raison_sociale as raison_sociale',
      'offres.lot_id as lot_id',
      'lots.intitule_lot as intitule_lot'
    )
    .where({id})
  };


  async getOffreByLotID(lot_id) {
    return await db('offres')
      .join('fournisseurs', 'fournisseurs.id', 'offres.fournisseur_id')
      .join('lots', 'lots.id', 'offres.lot_id')
      .select(
        'fournisseurs.id as off_frs_ID',
        'fournisseurs.raison_sociale as raison_sociale',
        'lots.intitule_lot as intitule_lot',
        'offres.id as id',
        'offres.lot_id as lot_id',
        'offres.montant as montant',
        'offres.montant_ttc as montant_ttc',
        'offres.montant_min as montant_min',
        'offres.montant_min_ttc as montant_min_ttc',
        'offres.montant_max as montant_max',
        'offres.montant_max_ttc as montant_max_ttc',
        'offres.delai_exe as delai_exe',
        'offres.date_depot as date_depot',
        'offres.heure_depot as heure_depot',
        'offres.nom_prenom_dep as nom_prenom_dep',
        'offres.telephone_dep as telephone_dep',
        'offres.banque as banque',
        'offres.ref_caution as ref_caution',
        'offres.mnt_caution as mnt_caution'
      )
      .where({lot_id})
      .orderBy('offres.montant','asc')
      .orderBy('offres.montant_max','asc')
  };

  async getAttributaire(lot_id,fournisseur_id) {
    return await db('offres')
      .join('fournisseurs', 'fournisseurs.id', 'offres.fournisseur_id')
      .join('lots', 'lots.id', 'offres.lot_id')
      .select(
        'fournisseurs.raison_sociale as raison_sociale',
        'lots.num_lot as num_lot',
        'lots.intitule_lot as intitule_lot',
        'offres.id as id',
        'offres.fournisseur_id as fournisseur_id',
        'offres.lot_id as lot_id',
        'offres.montant as montant',
        'offres.montant_ttc as montant_ttc',
        'offres.montant_min as montant_min',
        'offres.montant_min_ttc as montant_min_ttc',
        'offres.montant_max as montant_max',
        'offres.montant_max_ttc as montant_max_ttc',
        'offres.delai_exe as delai_exe',
        'offres.date_depot as date_depot',
        'offres.heure_depot as heure_depot',
        'offres.nom_prenom_dep as nom_prenom_dep',
        'offres.telephone_dep as telephone_dep',
        'offres.banque as banque',
        'offres.ref_caution as ref_caution',
        'offres.mnt_caution as mnt_caution',
        'offres.rabais as rabais',
        'offres.condi as condi',
        'offres.taux as taux',
      )
      .where({lot_id,fournisseur_id})
  };

 
}

module.exports = new OffreDAO();