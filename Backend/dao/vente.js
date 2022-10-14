const db = require('../db/db');

class VenteDAO {
  async createVente(dossier_id,num_vente,lot_id,fournisseur_id,date_vente,montant,statut) {
    const [id] = await db('ventes')
      .insert({
        dossier_id,
        num_vente,
        lot_id,
        fournisseur_id,
        date_vente,
        montant,
        statut

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
        'ventes.statut as statut'
    )
    .orderBy('ventes.statut', 'desc')
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
        'ventes.statut as statut'
    )
    .where({num_vente})
    .orderBy('ventes.statut', 'desc')
    
  };


 
}

module.exports = new VenteDAO();