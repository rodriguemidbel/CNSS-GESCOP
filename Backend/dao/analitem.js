const db = require('../db/db');

class AnalitemDAO {
       
        async createAnalitem(analyse_id,lot_id,soumissionnaire_id,soumissionnaire,off_mnt,off_mnt_min,off_mnt_max,conformite,
    motif,observation,statut) {
    const [id] = await db('analitems')
      .insert({
        analyse_id,
        lot_id,
        soumissionnaire_id,
        soumissionnaire,
        off_mnt,
        off_mnt_min,
        off_mnt_max,
        conformite,
        motif,
        observation,
        statut
      })
      .returning('id');

    return id;
  };

  async getAllAnalitem(analyse_id) {
    return await db('analitems')
      .join('analyses', 'analyses.id', 'analitems.analyse_id')
      .select(
        'analitems.id as id',
        'analitems.analyse_id as analyse_id',
        'analitems.lot_id as lot_id',
        'analitems.soumissionnaire_id as soumissionnaire_id',
        'analitems.soumissionnaire as soumissionnaire',
        'analitems.off_mnt as off_mnt',
        'analitems.off_mnt_min as off_mnt_min',
        'analitems.off_mnt_max as off_mnt_max',
        'analitems.conformite as conformite',
        'analitems.motif as motif',
        'analitems.observation as observation',
        'analitems.statut as statut'
      )
      .where({analyse_id})
  };

  async getOneAnalitem(id) {
    return await db('analitems').where({id}).first();
  };

  async removeAnalitem(id) {
    return await db('analitems').where({id}).del();
  };

  async updateAnalitem(id,changes) {
    return await db('analitems').where({id}).update(changes)
    .then(() =>{
      return db('analitems').where({id}).first();
    });
  };

}

module.exports = new AnalitemDAO();