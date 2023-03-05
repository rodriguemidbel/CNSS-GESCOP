const db = require('../db/db');
var commonUtils = require('../common/common.utils');

class OffreDAO {
  async createOffre( off_dossier_id,fournisseur_id,lot_id,montant_offre,montant_min,montant_max,
    delai_exe,date_depot,heure_depot,nom_prenom_dep,telephone_dep,banque,ref_caution,
    mnt_caution) {
    const [id] = await db('offres')
      .insert({
        off_dossier_id,
        fournisseur_id,
        lot_id,
        montant_offre,
        montant_min,
        montant_max,
        delai_exe,
        date_depot : commonUtils.formatOracleDate2(date_depot),
        heure_depot,
        nom_prenom_dep,
        telephone_dep,
        banque,
        ref_caution,
        mnt_caution
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
        'offres.montant_offre as montant_offre',
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

    changes['date_depot'] = commonUtils.formatOracleDate2(changes['date_depot']);

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
      'offres.montant_offre as montant_offre',
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
        'offres.montant_offre as montant_offre',
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
      .where({lot_id})
      .orderBy('offres.montant_offre','asc')
      .orderBy('offres.montant_max','asc')
  };

  async getAttributaire(lot_id,fournisseur_id) {
    return await db('offres')
      .join('fournisseurs', 'fournisseurs.id', 'offres.fournisseur_id')
      .join('lots', 'lots.id', 'offres.lot_id')
      .select(
        'fournisseurs.raison_sociale as raison_sociale',
        'lots.intitule_lot as intitule_lot',
        'fournisseurs.id as fournisseur_id',
        'offres.id as id',
        'offres.lot_id as lot_id',
        'offres.montant_offre as montant_offre',
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
      .where({lot_id,fournisseur_id})
  };

 
}

module.exports = new OffreDAO();