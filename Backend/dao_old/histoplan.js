const db = require('../db/db');
var commonUtils = require('../common/common.utils');

class PlanDAO {
  async createHistoplan(plan_id,statut,created_by,created_at) {
    const [id] = await db('histoplans')
      .insert({
        plan_id:plan_id,
        statut:statut,
        created_by:created_by,
        created_at : commonUtils.formatOracleDate()
      })
      .returning('id');

    return id;
  };

  async getAllHistoPlan() {
    return await db('histoplans')
    .join('plans', 'plans.id', 'histoplans.plan_id')
    .select(
      'plans.id as planid',
      'plans.annee as annee',
      'plans.date_plan as date_plan',
      'histoplans.statut as statut'
    )
    .orderBy('plans.annee', 'desc');
  };

  async getOneHistoPlan(id) {
    return await db('histoplans').where({id}).first();
  };

  async removeHistoPlan(id) {
    return await db('histoplans').where({id}).del();
  };

  async updateHistoPlan(id,changes) {
    return await db('histoplans').where({id}).update(changes)
    .then(() =>{
      return db('histoplans').where({id}).first();
    });
  };

  async findHistoPlan(annee) {
    return await db('histoplans')
    .join('plans', 'plans.id', 'histoplans.plan_id')
    .select(
      'plans.id as planid',
      'plans.annee as annee',
      'plans.date_plan as date_plan',
      'histoplans.statut as statut'
    )
    .where({annee})
  };

  

 
}

module.exports = new PlanDAO();