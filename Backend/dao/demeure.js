const db = require('../db/db');
var commonUtils = require('../common/common.utils');


class DemeureDAO {
  async createDemeure(marche_id,date_demeure,ref_correspande,delai) {
    const [id] = await db('demeures')
      .insert({
        marche_id,
        date_demeure : date_demeure,
        ref_correspande,
        delai
      })
      .returning('id');

    return id;
  };

  async getAllDemeure() {
    return await db('demeures');
  };

  async getOneDemeure(id) {
    return await db('demeures').where({id}).first();
  };

  async removeDemeure(id) {
    return await db('demeures').where({id}).del();
  };

  async updateDemeure(id,changes) {

    return await db('demeures').where({id}).update(changes)
    .then(() =>{
      return db('demeures').where({id}).first();
    });
  };

 
}

module.exports = new DemeureDAO();