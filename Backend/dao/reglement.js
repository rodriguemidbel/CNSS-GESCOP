const db = require('../db/db');


class ReglementDAO {
  async createReglement(marche_id,ref_marche,ref_decision,attributaire,date_reglement,montant_decision,
    atd,fichier) {
    const [id] = await db('reglements')
      .insert({
        marche_id,
        ref_marche,
        ref_decision,
        attributaire,
        date_reglement,
        montant_decision,
        atd,
        fichier
      })
      .returning('id');

    return id;
  };


  async getAllReglement() {
    return await db('reglements');
  };

  async getOneReglement(id) {
    return await db('reglements').where({id}).first();
  };

  async removeReglement(id) {
    return await db('reglements').where({id}).del();
  };

  async updateReglement(id,changes) {
    return await db('reglements').where({id}).update(changes)
    .then(() =>{
      return db('reglements').where({id}).first();
    });
  };

  async findReglement(marche_id) {
    return await db('reglements')
    .select(
      'reglements.id as id',
      'reglements.marche_id as marche_id',
      'reglements.ref_marche as ref_marche',
      'reglements.ref_decision as ref_decision',
      'reglements.attributaire as attributaire',
      'reglements.date_reglement as date_reglement',
      'reglements.montant_decision as montant_decision',
      'reglements.atd as atd',
      'reglements.fichier as fichier'
    )
    .where({marche_id})
  };

 
}

module.exports = new ReglementDAO();