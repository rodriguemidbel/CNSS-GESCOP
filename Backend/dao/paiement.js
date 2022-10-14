const db = require('../db/db');

class PaiementDAO {
  async createPaiement(dossier_id,entreprise_cons,date_paie,montant) {
    const [id] = await db('paiements')
      .insert({
        dossier_id,
        entreprise_cons,
        date_paie,
        montant,
        date_parution
      })
      .returning('id');

    return id;
  };

  async getAllPaiement(dossier_id) {
    return await db('dossiers')
      .join('paiements', 'dossiers.id', 'paiements.dossier_id')
      .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'paiements.id as id',
        'paiements.entreprise_cons as entreprise_cons',
        'paiements.date_paie as date_paie',
        'paiements.montant as montant',
      )
      .where({dossier_id})
  };

  /*async getAllDossier() {
    return await db('paiements');
  };*/

  async getOnePaiement(id) {
    return await db('paiements').where({id}).first();
  };

  async removePaiement(id) {
    return await db('paiements').where({id}).del();
  };

  async updatePaiement(id,changes) {
    return await db('paiements').where({id}).update(changes)
    .then(() =>{
      return db('paiements').where({id}).first();
    });
  };

  async findPaiement(dossier_id) {
    return await db('dossiers')
      .join('paiements', 'dossiers.id', 'paiements.dossier_id')
      .select(
        'dossiers.id as dossierID',
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'paiements.entreprise_cons as entreprise_cons',
        'paiements.date_paie as date_paie',
        'paiements.montant as montant',
      )
      .where({dossier_id})
  };

 
}

module.exports = new PaiementDAO();