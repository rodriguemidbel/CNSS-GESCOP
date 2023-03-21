const db = require('../db/db');
var commonUtils = require('../common/common.utils');

class PubavisDAO {
  async createPubavis(dossier_id,num_bordereau,date_bordereau,observation) {
    const [id] = await db('pubavis')
      .insert({
        dossier_id,
        num_bordereau,
        date_bordereau : date_bordereau,
        observation
      })
      .returning('id');

    return id;
  };

  async getAllPubavis() {
    return await db('pubavis')
      .join('dossiers', 'dossiers.id', 'pubavis.dossier_id')
      .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'pubavis.id as id',
        'pubavis.num_bordereau as num_bordereau',
        'pubavis.date_bordereau as date_bordereau',
        'pubavis.observation as observation'
      )
      
  };

  async getOnePubavis(id) {
    return await db('pubavis').where({id}).first();
  };

  async removePubavis(id) {
    return await db('pubavis').where({id}).del();
  };

  async updatePubavis(id,changes) {
    
    
    return await db('pubavis').where({id}).update(changes)
    .then(() =>{
      return db('pubavis').where({id}).first();
    });
  };

  async findPubavis(dossier_id) {
    return await db('pubavis')
    .join('dossiers', 'dossiers.id', 'pubavis.dossier_id')
      .select(
        'dossiers.numero_doss as numero',
        'dossiers.intitule_doss as intitule',
        'pubavis.id as id',
        'pubavis.num_bordereau as num_bordereau',
        'pubavis.date_bordereau as date_bordereau',
        'pubavis.observation as observation'
      )
      .where({dossier_id})
  };

  async counPubavis(annee) {
    return await db('pubavis')
    .join('dossiers', 'dossiers.id', 'pubavis.dossier_id')
    .join('planitems', 'planitems.id', 'dossiers.planitem_id')
    .join('plans', 'plans.id', 'planitems.plan_id')
    .count('pubavis.id as nbr')
    .where({annee})
  };

 
}

module.exports = new PubavisDAO();