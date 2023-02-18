const db = require('../db/db');


class GroupementDAO {
  async createGroupement(libelle) {
    const [id] = await db('groupements')
      .insert({
        libelle
      })
      .returning('id');

    return id;
  };

  async getAllGroupement() {
    return await db('groupements');
  };

  async getOneGroupement(id) {
    return await db('groupements').where({id}).first();
  };

  async removeGroupement(id) {
    return await db('groupements').where({id}).del();
  };

  async updateGroupement(id,changes) {
    return await db('groupements').where({id}).update(changes)
    .then(() =>{
      return db('groupements').where({id}).first();
    });
  };

 
}

module.exports = new GroupementDAO();