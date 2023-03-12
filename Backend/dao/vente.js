const db = require('../db/db');
var commonUtils = require('../common/common.utils');

class VenteDAO {
  async createVente(vent_dossier_id,num_vente,lot_id,fournisseur_id,date_vente,montant,vent_statut,grpent,created_by,created_at) {
    const [id] = await db('ventes')
      .insert({
        vent_dossier_id,
        num_vente,
        lot_id,
        fournisseur_id,
        date_vente: date_vente,
        montant,
        vent_statut,
        grpent,
        created_by,
        created_at

      })
      .returning('id');

    return id;
  };

 
  
  async getAllVente() {
    return await db('ventes')
    .join('lots','lots.id','ventes.lot_id')
    .join('dossiers','dossiers.id','lots.dossier_id')
    .join('fournisseurs','fournisseurs.id','ventes.fournisseur_id')
    .select(
        'dossiers.id as dossier_id',
        'dossiers.numero_doss as numero_doss',
        'dossiers.intitule_doss as intitule_doss',
        'lots.id as lotID',
        'lots.num_lot as num_lot',
        'lots.intitule_lot as intitule_lot',
        'fournisseurs.id as fourID',
        'fournisseurs.raison_sociale as raison_sociale',
        'ventes.id as id',
        'ventes.num_vente as num_vente',
        'ventes.date_vente as date_vente',
        'ventes.montant as montant',
        'ventes.vent_statut as vent_statut'
    )
    .orderBy('ventes.vent_statut', 'asc')
  };

  async getOneVente(id) {
    return await db('ventes').where({id}).first();
  };

  async removeVente(id) {
    return await db('ventes').where({id}).del();
  };

  async updateVente(id,changes) {

    return await db('ventes').where({id}).update(changes)
    .then(() =>{
      return db('ventes').where({id}).first();
    });
  };

  async findVente(lot_id) {
    return await db('ventes')
    .join('fournisseurs','fournisseurs.id','ventes.fournisseur_id')
    .join('lots','lots.id','ventes.lot_id')
    .select(
      'lots.id as lotID',
      'lots.num_lot as num_lot',
      'lots.intitule_lot as intitule_lot',
      'lots.montant_lot as montant_lot',
      'fournisseurs.id as fourID',
      'fournisseurs.raison_sociale as raison_sociale',
      'ventes.id as id',
      'ventes.num_vente as num_vente',
      'ventes.date_vente as date_vente',
      'ventes.montant as montant'
    )
    .where({lot_id})
    
  };

  async findVenteByNum(num_vente) {
    return await db('ventes')
    .join('lots','lots.id','ventes.lot_id')
    .join('dossiers','dossiers.id','lots.dossier_id')
    .join('fournisseurs','fournisseurs.id','ventes.fournisseur_id')
    .select(
        'dossiers.id as dossier_id',
        'dossiers.numero_doss as numero_doss',
        'dossiers.intitule_doss as intitule_doss',
        'lots.id as lotID',
        'lots.intitule_lot as intitule_lot',
        'fournisseurs.id as fourID',
        'fournisseurs.raison_sociale as raison_sociale',
        'ventes.id as id',
        'ventes.num_vente as num_vente',
        'ventes.date_vente as date_vente',
        'ventes.montant as montant',
        'ventes.vent_statut as vent_statut'
    )
    .where({num_vente})
    .orderBy('ventes.vent_statut', 'desc')
    
  };

  async findVenteByDossID(vent_dossier_id) {
    return await db('ventes')
    .join('fournisseurs','fournisseurs.id','ventes.fournisseur_id')
    .join('lots','lots.id','ventes.lot_id')
    .select(
      'lots.id as lotID',
      'lots.num_lot as num_lot',
      'lots.intitule_lot as intitule_lot',
      'lots.montant_lot as montant_lot',
      'fournisseurs.id as fourID',
      'fournisseurs.raison_sociale as raison_sociale',
      'ventes.id as id',
      'ventes.num_vente as num_vente',
      'ventes.date_vente as date_vente',
      'ventes.montant as montant',
      'ventes.vent_statut as vent_statut'
    )
    .where({vent_dossier_id})
    
  };
  
  async findVenteByStatut(vent_statut) {
    return await db('ventes')
    .join('fournisseurs','fournisseurs.id','ventes.fournisseur_id')
    .join('lots','lots.id','ventes.lot_id')
    .select(
      'lots.id as lotID',
      'lots.num_lot as num_lot',
      'lots.intitule_lot as intitule_lot',
      'lots.montant_lot as montant_lot',
      'fournisseurs.id as fourID',
      'fournisseurs.raison_sociale as raison_sociale',
      'ventes.id as id',
      'ventes.num_vente as num_vente',
      'ventes.date_vente as date_vente',
      'ventes.montant as montant',
      'ventes.vent_statut as vent_statut'
    )
    .where({vent_statut})
   
  };

  async sumMontantAllVente() {
    return await db('ventes')
    .sum('ventes.montant as total_montant')
  };

  async sumMontantVenteByStatut(vent_statut) {
    return await db('ventes')
    .sum('ventes.montant as total_montant')
    .where({vent_statut})
  };

  async findVenteID(lot_id,fournisseur_id) {
    return await db('ventes')
    .join('lots','lots.id','ventes.lot_id')
    .join('fournisseurs','fournisseurs.id','ventes.fournisseur_id')
    .select(
        'lots.id as lotID',
        'lots.num_lot as num_lot',
        'lots.intitule_lot as intitule_lot',
        'lots.montant_vente as montant_vente',
        'lots.montant_lot as montant_lot',
        'fournisseurs.id as fourID',
        'fournisseurs.raison_sociale as raison_sociale',
        'ventes.id as vente_id',
        'ventes.num_vente as num_vente',
        'ventes.date_vente as date_vente',
        'ventes.montant as montant',
        'ventes.grpent as grpent'
    )
    .where({lot_id,fournisseur_id})
  };

  async countSellLot(vent_dossier_id) {
    return await db('ventes')
    .join('lots','lots.id','ventes.lot_id')
    .select('ventes.lot_id as lotID','lots.num_lot as num_lot','lots.intitule_lot as intitule_lot')
    .count('ventes.id as nbr')
    .where({vent_dossier_id})
    .groupBy('ventes.lot_id','lots.num_lot','lots.intitule_lot')
  };

  async countVente() {
    return await db('ventes')
    .join('lots','lots.id','ventes.lot_id')
    .count('ventes.id as nbr')
  };

 
}

module.exports = new VenteDAO();