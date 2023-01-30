const db = require('../db/db');


class ResiliationDAO {
  async createResiliation(marche_id,ref_decision,date_decision,fichier) {
    const [id] = await db('resiliations')
      .insert({
        marche_id,
        ref_decision,
        date_decision,
        fichier
      })
      .returning('id');

    return id;
  };


  async getAllResiliation() {
    return await db('resiliations');
  };

  async getOneResiliation(id) {
    return await db('resiliations').where({id}).first();
  };

  async removeResiliation(id) {
    return await db('resiliations').where({id}).del();
  };

  async updateResiliation(id,changes) {
    return await db('resiliations').where({id}).update(changes)
    .then(() =>{
      return db('resiliations').where({id}).first();
    });
  };

 
}

module.exports = new ResiliationDAO();