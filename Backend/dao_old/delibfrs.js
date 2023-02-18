const db = require('../db/db');

class delibfrsDAO {
  async createDelibFrs(delib_id,fournisseur_id,statut) {
    const [id] = await db('delibfrs')
      .insert({
        delib_id,
        fournisseur_id,
        statut
      })
      .returning('id');
    return id;
  };

  
  async getAllDelibFrs(delib_id) {
    return await db('delibfrs')
    .select(
        'delibfrs.id as id',
        'delibfrs.delib_id as delib_id',
        'delibfrs.fournisseur_id as fournisseur_id',
        'delibfrs.statut as statut'
    )
    .where({delib_id})
  };

  async getOneDelibFrs(id) {
    return await db('delibfrs').where({id}).first();
  };

  async removeDelibFrs(id) {
    return await db('delibfrs').where({id}).del();
  };

  async updateDelibFrs(id,changes) {
    return await db('delibfrs').where({id}).update(changes)
    .then(() =>{
      return db('delibfrs').where({id}).first();
    });
  };

}

module.exports = new delibfrsDAO();