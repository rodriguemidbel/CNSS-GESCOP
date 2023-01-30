const db = require('../db/db');
var commonUtils = require('../common/common.utils');

class PlanDAO {
  async createPlan(annee,libelle,date_plan,statut,created_by) {
    const [id] = await db('plans')
      .insert({
        annee : annee,
        libelle : libelle,
        date_plan : commonUtils.formatOracleDate2(date_plan),
        statut : statut,
        created_by : created_by
      })
      .returning('id');

    return id;
  };

  /*async getAllPlan() {
    return await db('plans').orderBy('plans.annee', 'desc');
  };*/

  /*async getAllPlan() {
    return await db('plans')
    .join('histoplans', 'histoplans.plan_id', 'plans.id')
    .select(
      'plans.id as id',
      'plans.annee as annee',
      'plans.date_plan as date_plan',
      'histoplans.statut as statut'
    )
    .orderBy('plans.annee', 'desc');
  };*/
  
  async getAllPlan() {
    return await db('plans')
    .select(
      'plans.id as id',
      'plans.annee as annee',
      'plans.libelle as libelle',
      'plans.date_plan as date_plan',
      'plans.statut as statut'
    )
    .orderBy('plans.annee', 'desc');
  };


  async getOnePlan(id) {
    return await db('plans').where({id}).first();
  };

  async removePlan(id) {
    return await db('plans').where({id}).del();
  };

  async updatePlan(id,changes) {
    return await db('plans').where({id}).update(changes)
    .then(() =>{
      return db('plans').where({id}).first();
    });
  };

  /*async findPlan(annee) {
    return await db('plans')
      .select(
        'plans.id as id',
        'plans.annee as annee',
        'plans.date_plan as date',
      )
      .where({annee})
  };*/

  async findPlan(annee) {
    return await db('plans')
    .select(
      'plans.id as id',
      'plans.annee as annee',
      'plans.libelle as libelle',
      'plans.date_plan as date_plan',
      'plans.statut as statut'
    )
    .where({annee})
  };

  

 
}

module.exports = new PlanDAO();