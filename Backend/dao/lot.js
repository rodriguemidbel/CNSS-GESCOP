const db = require('../db/db');

class LotDAO {
  async createLot(dossier_id,num_lot,intitule_lot,montant_lot,montant_vente,statut) {
    const [id] = await db('lots')
      .insert({
        dossier_id,
        num_lot,
        intitule_lot,
        montant_lot,
        montant_vente,
        statut
      })
      .returning('id');

    return id;
  };

  
  async getAllLot() {
    return await db('lots')
    .join('lots', 'lots.id', 'lots.dossier_id')
    .select(
      'dossiers.id as dossierid',
      'dossiers.numero_doss as numero_doss',
      'dossiers.intitule_doss as intitule_doss',
      'dossiers.date_trans_sign as date_trans_sign',
      'dossiers.date_retour_sign as date_retour_sign',
      'dossiers.date_trans_dgcmef as date_trans_dgcmef',
      'lots.id as lotid',
      'lots.num_lot as num_lot',
      'lots.intitule_lot as intitule_lot',
      'lots.montant_lot as montant_lot',
      'lots.montant_vente as montant_vente',
      'lots.statut as statut'
      )
      .orderBy('lots.id', 'asc')
  };

  async getOneLot(id) {
    return await db('lots').where({id}).first();
  };

  async removeLot(id) {
    return await db('lots').where({id}).del();
  };

  async updateLot(id,changes) {
    return await db('lots').where({id}).update(changes)
    .then(() =>{
      return db('lots').where({id}).first();
    });
  };

  async findLot(dossier_id) {
    return await db('lots')
    .join('dossiers', 'dossiers.id', 'lots.dossier_id')
    .select(
      'dossiers.id as dossierid',
      'dossiers.numero_doss as numero_doss',
      'dossiers.intitule_doss as intitule_doss',
      'dossiers.date_trans_sign as date_trans_sign',
      'dossiers.date_retour_sign as date_retour_sign',
      'dossiers.date_trans_dgcmef as date_trans_dgcmef',
      'lots.id as lotid',
      'lots.num_lot as num_lot',
      'lots.intitule_lot as intitule_lot',
      'lots.montant_lot as montant_lot',
      'lots.montant_vente as montant_vente',
      'lots.statut as statut'
      )
      .where({dossier_id})
      .orderBy('lots.id', 'asc')
  };

  async sumMontantLot(dossier_id) {
    return await db('lots')
    .sum('lots.montant_lot as total_mnt')
    .where({dossier_id})
  };

  async countLot(num_lot) {
    return await db('lots')
    .count('lots.id as nbr')
    .where({num_lot})
  };


 
}

module.exports = new LotDAO();
