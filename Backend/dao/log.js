const db = require('../db/db');
var commonUtils = require('../common/common.utils');

class LogDAO {
  async createLog(user_id,action,created_by,created_at) {
    const [id] = await db('logs')
      .insert({
        user_id : user_id,
        action : action,
        created_by : created_by,
        created_at : created_at
      })
      .returning('id');

    return id;
  };

  async getAllLog() {
    return await db('logs');
  };

  async findLog() {
    return await db('logs')
    .join('users', 'users.id', 'logs.user_id')
    .join('usergroups', 'usergroups.id', 'users.usergroup_id')
    .select(
      'usergroups.id as usergroup_id',
      'usergroups.name as group_name',
      'users.name as name',
      'users.username as username',
      'users.localisation_id as localisation_id',
      'logs.user_id as user_id',
      'logs.action as action',
      'logs.created_by as created_by',
      'logs.created_at as created_at'
    )
    .orderBy([
      { column: 'logs.id', order: 'desc'}
    ])
  };

  async getOneLog(id) {
    return await db('logs').where({id}).first();
  };

  async removeLog(id) {
    return await db('logs').where({id}).del();
  };

  async updateLog(id,changes) {
    return await db('logs').where({id}).update(changes)
    .then(() =>{
      return db('logs').where({id}).first();
    });
  };

 
}

module.exports = new LogDAO();