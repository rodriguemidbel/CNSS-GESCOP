const db = require('../db/db');

class UserDAO {
  async createUser(usergroup_id, matricule,name, username,password,fonction,localisation_id,service,telephone,email,adresse,statut,created_by,modified_by) {
    const [id] = await db('users')
      .insert({
        usergroup_id,
        matricule,
        name,
        username,
        password,
        fonction,
        localisation_id,
        service,
        telephone,
        email,
        adresse,
        statut,
        created_by,
        modified_by

      })
      .returning('id');
    return id;
  };

  
  async getAllUser() {
    return await db('users');
  };

  async findUserByFonction() {
    return await db('users')
    .select(
      'users.id as id',
      'users.usergroup_id as usergroup_id',
      'users.name as name',
      'users.username as username',
      'users.fonction as fonction'
    )
    .where({
      fonction : 'Caissier'
    })
  };

  async getOneUser(id) {
    return await db('users').where({id}).first();
  };

  async removeUser(id) {
    return await db('users').where({id}).del();
  };

  async updateUser(id,changes) {
    return await db('users').where({id}).update(changes)
    .then(() =>{
      return db('users').where({id}).first();
    });
  };

  async passwordInit(username,changes) {
    return await db('users').where({username}).update(changes)
    .then(() =>{
      return db('users').where({username}).first();
    });
  };


  async findUser(username) {
    return await db('usergroups')
    .join('users', 'usergroups.id', 'users.usergroup_id')
    .select(
      'usergroups.id as groupid',
      'usergroups.name as groupname',
      'users.id as userid',
      'users.name as name',
      'users.username as username',
      'users.password as password',
      'users.telephone as telephone',
      'users.email as email',
      'users.adresse as adresse',
      'users.localisation_id as localisation_id',
      'users.created_by as created_by',
      'users.modified_by as modified_by'
    )
    .where({username})
  };

  async login(username,password) {
    return await db('usergroups')
      .join('users', 'usergroups.id', 'users.usergroup_id')
      .select(
        'usergroups.id as groupid',
        'usergroups.name as groupname',
        'users.id as userid',
        'users.name as name',
        'users.username as username',
        'users.password as password',
        'users.telephone as telephone',
        'users.email as email',
        'users.adresse as adresse',
        'users.localisation_id as localisation_id',
        'users.created_by as created_by',
        'users.modified_by as modified_by'
      )
      .where({username,password})
  };

  /*async login(username,password) {
    return await db('usergroups')
      .join('users', 'usergroups.id', 'users.usergroup_id')
      .select(
        'usergroups.id as groupid',
        'usergroups.name as groupName',
        'users.id as userid',
        'users.name as name',
        'users.username as username',
        'users.password as password'
      )
      .where({username,password})
  };*/

}

module.exports = new UserDAO();
