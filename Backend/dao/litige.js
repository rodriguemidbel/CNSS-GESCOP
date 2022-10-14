const db = require('../db/db');

class LitigeDAO {
  async createLitige(dossier_id,lot_id,motif,decision,date_ord,observation,resultat,plainte) {
    const [id] = await db('litiges')
      .insert({
        dossier_id,
        lot_id,
        motif,
        decision,
        date_ord,
        observation,
        resultat,
        plainte
      })
      .returning('id');

    return id;
  };

 /* async getAllDossier() {
    return await db('litiges');
  };*/
  async getAllLitige(dossier_id) {
    return await db('litiges')
      .join('dossiers', 'dossiers.id', 'litiges.dossier_id')
      .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'litiges.id as id',
        'litiges.lot_id as lot_id',
        'litiges.motif as motif',
        'litiges.decision as decision',
        'litiges.date_ord as date_ord',
        'litiges.observation as observation',
        'litiges.resultat as resultat'
      )
      .where({dossier_id})
  };

  async getOneLitige(id) {
    return await db('litiges').where({id}).first();
  };

  async removeLitige(id) {
    return await db('litiges').where({id}).del();
  };

  async updateLitige(id,changes) {
    return await db('litiges').where({id}).update(changes)
    .then(() =>{
      return db('litiges').where({id}).first();
    });
  };

  async findLitige(dossier_id) {
    return await db('litiges')
    .join('dossiers', 'dossiers.id', 'litiges.dossier_id')
      .join('lots', 'lots.id', 'litiges.lot_id')
      .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'lots.num_lot as num_lot',
        'lots.intitule_lot as intitule_lot',
        'lots.montant_lot as montant_lot',
        'litiges.id as id',
        'litiges.lot_id as lot_id',
        'litiges.motif as motif',
        'litiges.decision as decision',
        'litiges.date_ord as date_ord',
        'litiges.observation as observation',
        'litiges.resultat as resultat')
      .where({dossier_id})
  };

 
}

module.exports = new LitigeDAO();