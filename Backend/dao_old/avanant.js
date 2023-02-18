const db = require('../db/db');


class AvenantDAO {
  async createAvenant(marche_id,objet,montant,delai) {
    const [id] = await db('avenants')
      .insert({
        marche_id,
        objet,
        montant,
        delai
      })
      .returning('id');

    return id;
  };


  async getAllAvenant() {
    return await db('avenants');
  };

  async getOneAvenant(id) {
    return await db('avenants').where({id}).first();
  };

  async removeAvenant(id) {
    return await db('avenants').where({id}).del();
  };

  async updateAvenant(id,changes) {
    return await db('avenants').where({id}).update(changes)
    .then(() =>{
      return db('avenants').where({id}).first();
    });
  };

 
}

module.exports = new AvenantDAO();