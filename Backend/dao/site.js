const db = require('../db/db');
var commonUtils = require('../common/common.utils');

class SiteDAO {
  async createSite(marche_id,date_rem_site,fichier) {
    const [id] = await db('sites')
      .insert({
        marche_id,
        date_rem_site : commonUtils.formatOracleDate2(date_rem_site),
        fichier
      })
      .returning('id');

    return id;
  };

  async getAllSite() {
    return await db('sites')
      .join('marches', 'marches.id', 'sites.marche_id')
      .select(
        'marches.num_ref as num_ref',
        'marches.objet as objet',
        'sites.id as id',
        'sites.date_rem_site as date_rem_site'
      )
      
  };

  async getOneSite(id) {
    return await db('sites').where({id}).first();
  };

  async removeSite(id) {
    return await db('sites').where({id}).del();
  };

  async updateSite(id,changes) {

    changes['date_rem_site'] = commonUtils.formatOracleDate2(changes['date_rem_site']);

    return await db('sites').where({id}).update(changes)
    .then(() =>{
      return db('sites').where({id}).first();
    });
  };

  async findsite(marche_id) {
    return await db('sites')
    .join('marches', 'marches.id', 'sites.marche_id')
    .select(
      'marches.num_ref as num_ref',
      'marches.objet as objet',
      'sites.id as id',
      'sites.date_rem_site as date_rem_site'
    )
    .where({marche_id})
  };

 
}

module.exports = new SiteDAO();