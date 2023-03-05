const db = require('../db/db');
var commonUtils = require('../common/common.utils');


class ResiliationDAO {
  async createResiliation(marche_id,ref_decision,date_decision,fichier) {
    const [id] = await db('resiliations')
      .insert({
        marche_id,
        ref_decision,
        date_decision : commonUtils.formatOracleDate2(date_decision),
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

    changes['date_decision'] = commonUtils.formatOracleDate2(changes['date_decision']);

    return await db('resiliations').where({id}).update(changes)
    .then(() =>{
      return db('resiliations').where({id}).first();
    });
  };

  async findResiliation(marche_id) {
    return await db('resiliations')
    .select(
      'resiliations.id as id',
      'resiliations.marche_id as marche_id',
      'resiliations.ref_decision as ref_decision',
      'resiliations.date_decision as date_decision',
      'resiliations.fichier as fichier'
    )
    .where({marche_id})
  };

 
}

module.exports = new ResiliationDAO();