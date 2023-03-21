const db = require('../db/db');
var commonUtils = require('../common/common.utils');

class PlanDAO {
  async createHistodoss(dossier_id,statut,created_by,created_at) {
    const [id] = await db('histodossiers')
      .insert({
        dossier_id:dossier_id,
        statut:statut,
        created_by:created_by,
        created_at : created_at
      })
      .returning('id');

    return id;
  };

  async getAllHistodoss() {
    return await db('histodossiers')
    .join('users', 'users.id', 'histodossiers.created_by')
    .join('dossiers', 'dossiers.id', 'histodossiers.dossier_id')
    .select(
      'dossiers.id as dossierid',
      'users.name as name',
      'users.username as username',
      'histodossiers.statut as statut',
      'histodossiers.created_by as created_by',
      'histodossiers.created_at as created_at'
    )
    .orderBy('dossiers.id', 'desc');
  };

  async getOneHistodoss(id) {
    return await db('histodossiers').where({id}).first();
  };

  async removeHistodoss(id) {
    return await db('histodossiers').where({id}).del();
  };

  async updateHistodoss(id,changes) {
    return await db('histodossiers').where({id}).update(changes)
    .then(() =>{
      return db('histodossiers').where({id}).first();
    });
  };

  async findHistodoss(numero_doss) {
    return await db('histodossiers')
    .join('dossiers', 'dossiers.id', 'histodossiers.dossier_id')
    .select(
      'dossiers.id as dossierid',
      'histodossiers.statut as statut',
      'histodossiers.created_by as created_by',
      'histodossiers.created_at as created_at'
    )
    .where({numero_doss})
  };

  

 
}

module.exports = new PlanDAO();