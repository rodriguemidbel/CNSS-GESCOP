const db = require('../db/db');

class CaisseDAO {
  async createCaisse(num_recu,date_recu,vente_id,modepaiement_id,user_id) {
    const [id] = await db('caisses')
      .insert({
        num_recu,
        date_recu,
        vente_id,
        modepaiement_id,
        user_id
      })
      .returning('id');

    return id;
  };

  
  async getAllCaisse() {
    return await db('caisses')
    .join('ventes', 'ventes.id', 'caisses.vente_id')
    .join('users', 'users.id', 'caisses.user_id')
    .join('lots', 'lots.id', 'ventes.lot_id')
    .join('modepaiements', 'modepaiements.id', 'caisses.modepaiement_id')
    .join('fournisseurs', 'fournisseurs.id', 'ventes.fournisseur_id')
    .select(
        'users.name as name',
        'lots.id as lotID',
        'lots.intitule_lot as intitule_lot',
        'fournisseurs.id as fourID',
        'fournisseurs.raison_sociale as raison_sociale',
        'modepaiements.id as modepaieID',
        'modepaiements.libelle as modepaie',
        'ventes.id as venteID',
        'ventes.num_vente as num_vente',
        'ventes.date_vente as date_vente',
        'ventes.montant as montant',
        'ventes.vent_statut as vent_statut',
        'caisses.id as CaisseID',
        'caisses.num_recu as num_recu',
        'caisses.date_recu as date_recu'
    )
  };

  async getOneCaisse(id) {
    return await db('caisses').where({id}).first();
  };

  async removeCaisse(id) {
    return await db('caisses').where({id}).del();
  };

  async updateCaisse(id,changes) {
    return await db('caisses').where({id}).update(changes)
    .then(() =>{
      return db('caisses').where({id}).first();
    });
  };

  async findCaisse(vente_id) {
    return await db('caisses')
    .join('ventes', 'ventes.id', 'caisses.vente_id')
    .join('users', 'users.id', 'caisses.user_id')
    .join('lots', 'lots.id', 'ventes.lot_id')
    .join('modepaiements', 'modepaiements.id', 'caisses.modepaiement_id')
    .join('fournisseurs', 'fournisseurs.id', 'ventes.fournisseur_id')
    .select(
        'users.name as name',
        'lots.id as lotID',
        'lots.intitule_lot as intitule_lot',
        'fournisseurs.id as fourID',
        'fournisseurs.raison_sociale as raison_sociale',
        'modepaiements.id as modepaieID',
        'modepaiements.libelle as modepaie',
        'ventes.id as vente_id',
        'ventes.num_vente as num_vente',
        'ventes.date_vente as date_vente',
        'ventes.montant as montant',
        'ventes.vent_statut as vent_statut',
        'caisses.id as id',
        'caisses.num_recu as num_recu',
        'caisses.date_recu as date_recu'
    )
    .where({vente_id})
  };


 
}

module.exports = new CaisseDAO();