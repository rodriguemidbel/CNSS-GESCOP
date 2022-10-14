const db = require('../db/db');

class OffreDAO {
  async createOffre(dossier_id,fournisseur_id,lot_id,montant_offre,date_depot,heure_depot,nom_prenom_dep,telephone_dep) {
    const [id] = await db('offres')
      .insert({
        dossier_id,
        fournisseur_id,
        lot_id,
        montant_offre,
        date_depot,
        heure_depot,
        nom_prenom_dep,
        telephone_dep
      })
      .returning('id');

    return id;
  };

 /* async getAllDossier() {
    return await db('offres');
  };*/
  async getAllOffre(dossier_id) {
    return await db('offres')
      .join('dossiers', 'dossiers.id', 'offres.dossier_id')
      .join('fournisseurs', 'fournisseurs.id', 'offres.fournisseur_id')
      .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'fournisseurs.raison_sociale as raison_sociale',
        'offres.id as id',
        'offres.fournisseur_id as fournisseur_id',
        'offres.montant_offre as montant_offre',
        'offres.date_depot as date_depot',
        'offres.heure_depot as heure_depot',
        'offres.nom_prenom_dep as nom_prenom_dep',
        'offres.telephone_dep as telephone_dep'
      )
      .where({dossier_id})
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

  async findOffre(dossier_id) {
    return await db('offres')
    .join('dossiers', 'dossiers.id', 'offres.dossier_id')
    .select(
      'dossiers.numero_doss as numero',
      'dossiers.intitule_doss as intitule',
      'offres.id as id',
      'offres.fournisseur_id as fournisseur_id',
      'offres.lot_id as lot_id',
      'offres.montant_offre as montant_offre',
      'offres.date_depot as date_depot',
      'offres.heure_depot as heure_depot',
      'offres.nom_prenom_dep as nom_prenom_dep',
      'offres.telephone_dep as telephone_dep'
    )
    .where({dossier_id})
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

 
}

module.exports = new OffreDAO();